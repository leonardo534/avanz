import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Modal, ScrollView, Alert, ToastAndroid } from 'react-native';
import { useQuery } from "react-query";
import { deletePost } from "../../../services/deletePost";
import { styles } from "../../../styles/styles";
import { modalStyle } from "../../../styles/modalStyle";
import axios from "axios";
import { Post } from "../../../interfaces/post";
import Icon from 'react-native-vector-icons/FontAwesome';
import getAllPostData from "../../../db/get";

export const RenderCard: React.FC<{ item: Post }> = ({ item }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState();
  const [messageComment, setMessageComment] = useState(false);
  const [textMessage, setTextMessageComment] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [comment, setComment] = useState('');
  const { refetch } = useQuery('postsData', getAllPostData);
  const handleLike = async (id: number) => {
    try {
      const response = await axios.post(`http://192.168.100.29/api/${isLiked ? 'deslike' : 'like'}Comment.php`, {
        comment_id: id
      });
      setLikesCount(response.data.likes_count);
      setIsLiked(prev => !prev);
    } catch (error) {
      console.error('Erro ao curtir o comentário:', error);
    }
  };

  const showToast = (text: string) => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  };

  const handleDeletePost = async (id: number) => {
    Alert.alert('Deseja continuar com a exclusão?', 'Após excluido não será possivel recuperar', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'OK', onPress: async () => {
          const response = await deletePost(id)
          if (response.success) {
            showToast('Apagado com sucesso!')
            refetch();
            return;
          }
          showToast('Error tente novamente!')
        }
      },
    ],
      {
        cancelable: true,
      });
  }

  const handleSendComment = async (user_origin_id: number, content_id: number, comment: string) => {
    if (comment == '' || comment.length == 0) return;
    try {
      const response = await axios.post(`http://192.168.100.29/api/insertComment.php`, {
        user_origin_id: user_origin_id,
        content_id: content_id,
        comment: comment,
      });

      if (response.data.status == 'success') {
        setMessageComment(true);
        setTextMessageComment(response.data.message);
        setComment('');
        return;
      }

      setMessageComment(false)
    } catch (error) {
      console.error('Erro ao inserir o comentário:', error);
    }
  };
  

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => handleDeletePost(item.id)} style={styles.iconButtonTrash}>
        <Icon name="trash" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.type}>{item.type}</Text>
        <Text style={styles.typeMachine}>{item.typeMachine}</Text>
      </TouchableOpacity>

      <View style={styles.commentContainer}>
        <TextInput
          style={styles.input}
          placeholder="Deixe um comentário..."
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity onPress={() => handleSendComment(item.id, item.id, comment)} style={styles.iconButton}>
          <Icon name="send" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {messageComment && (
        <View>
          <Text style={styles.messageComment}>{textMessage}</Text>
        </View>
      )}

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={modalStyle.modalContainer}>
          <View style={modalStyle.modalContent}>
            <ScrollView>
              <Text style={modalStyle.modalTitle}>Comentários</Text>
              {item.comments.map(comment => (
                <View key={comment.id} style={modalStyle.modalCommentContainer}>
                  <Text style={styles.commentText}>{comment.comment}</Text>
                  <View style={styles.actionsContainer}>
                    <TouchableOpacity style={styles.iconButton}>
                      <View>
                        <Text style={styles.commentText}>{likesCount ? likesCount : comment.likes_count}</Text>
                      </View>
                      <Icon name={isLiked ? "heart" : "heart-o"} onPress={() => handleLike(comment.id)} size={24} color={isLiked ? "red" : "black"} />
                    </TouchableOpacity>
                  </View>
                  {comment.replies.length > 0 && (
                    <View style={styles.repliesContainer}>
                      {comment.replies.map((reply: any) => (
                        <View key={reply.id} style={styles.replyContainer}>
                          <Text style={styles.replyText}>{reply.comment}</Text>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              ))}
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={modalStyle.closeButton}>Fechar</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  )
};
