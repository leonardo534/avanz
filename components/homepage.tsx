import React, { useState } from 'react';
import { FlatList, View, TouchableOpacity, Text, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Animated from 'react-native-reanimated';
import { useQuery } from 'react-query';
import { styles } from '../styles/styles';
import { modalStyle } from '../styles/modalStyle';
import { InsertPost } from './Posts/Card/insertPost';
import { RenderCard } from './Posts/Card/renderCard';
import getAllPostData from '../db/get';
import { sppiner } from '../styles/keyframes';

export const HomePage = () => {
  const { data } = useQuery('postsData', getAllPostData);
  const [modalInsertPost, setModalInsertPost] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.iconButtonPlus}>
        <TouchableOpacity onPress={() => setModalInsertPost(true)} >
          <Icon name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalInsertPost}
        onRequestClose={() => setModalInsertPost(false)}
      >
        <View style={modalStyle.modalContainer}>
          <View style={modalStyle.modalContent}>
            <InsertPost />
            <TouchableOpacity onPress={() => setModalInsertPost(false)}>
              <Text style={modalStyle.closeButton}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {data ? (
        <FlatList
          data={data}
          renderItem={({ item }) => <RenderCard item={item} />}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.sppiner}>
          <Animated.View
            entering={sppiner}
          >
            <Icon name="spinner" size={24} color="black" />
          </Animated.View>
        </View>
      )}
    </View>
  )
}