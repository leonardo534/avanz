import React, { useEffect, useState } from 'react';
import {
  Button,
  FlatList, View, TouchableOpacity, Text, Modal,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { QueryClient, QueryClientProvider, useMutation, useQuery } from 'react-query';
import axios from 'axios';
import { styles } from '../styles/styles';
import { modalStyle } from '../styles/modalStyle';
import { InsertPost } from './Posts/Card/insertPost';
import { RenderCard } from './Posts/Card/renderCard';
import getAllPostData from '../db/get';

export const HomePage = () => {
  const { data, refetch } = useQuery('postsData', getAllPostData);
  const [modalInsertPost, setModalInsertPost] = useState(false);

  return (
    <View style={styles.container}>

        <TouchableOpacity onPress={() => setModalInsertPost(true)} style={styles.iconButton}>
          <Icon name="plus" size={24} color="black" />
        </TouchableOpacity>
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
        <Text>Loading...</Text>
      )}
      </View>
  )
}