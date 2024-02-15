import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { styles } from "../../../styles/styles";
import { modalStyle } from '../../../styles/modalStyle';
import axios from "axios";
import { useQuery } from 'react-query';
import getAllPostData from '../../../db/get';
import { insertPost } from '../../../services/insertPost';

export const InsertPost = () => {
  const [idAuthor, setIdAuthor] = useState('');
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [typeMachine, setTypeMachine] = useState('');
  const [warning, setWarning] = useState(false);
  const [messageResponse, setMessageResponse] = useState(false);

  const { refetch } = useQuery('postsData', getAllPostData);

  useEffect(() => {
    refetch();
  }, []);


  const handleSendPost = async () => {
    if (idAuthor.length == 0 || type.length == 0 || title.length == 0 || description.length == 0 || type.length == 0) {
      setWarning(true)
      return
    }
    setWarning(false)
  
    try {
      const response = await axios({
        method: "POST",
        url: "http://192.168.100.29/api/insert.php",
        headers: { "Content-Type": "multipart/form-data" },
        data: {
          idAuthor: idAuthor,
          type: type,
          title: title,
          description: description,
          typeMachine: typeMachine,
        },
      });

      setIdAuthor('');
      setTitle('');
      setDescription('');
      setType('');
      setTypeMachine('');
      refetch();
      setMessageResponse(true);
    } catch (error) {
      console.error('Erro ao inserir o post:', error);
      setMessageResponse(false);
    }
  };

  const handleCancel = () => {
    setIdAuthor('');
    setDescription('');
    setTitle('');
    setType('');
    setTypeMachine('');
  }
  return (
    <View >
      <ScrollView>
        <Text style={modalStyle.modalTitle}>Novo Post</Text>
        <TextInput
          style={styles.input}
          placeholder="ID do Autor"
          value={idAuthor}
          onChangeText={setIdAuthor}
        />
        <TextInput
          style={styles.input}
          placeholder="Tipo"
          value={type}
          onChangeText={setType}
        />
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Categoria"
          value={typeMachine}
          onChangeText={setTypeMachine}
        />
        {/* {messageResponse && (
            <Text style={styles.commentText}>Post inserido com sucesso!</Text>
          )}
          {warning && (
            <Text style={styles.commentText}>Todos os campos são obrigatorios</Text>
          )} */}
        <TouchableOpacity onPress={handleSendPost} style={styles.button}>
          <Text style={styles.buttonText}>Enviar Post</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCancel} style={styles.button}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
