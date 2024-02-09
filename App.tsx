import React, { useEffect, useState } from 'react';
import {
  Button,
  FlatList, TextInput, TouchableOpacity, View,
} from 'react-native';
import { Post } from './interfaces/post';
import { styles } from './styles/styles';
import { RenderCard } from './components/Posts/Card/renderCard';
import getAllPostData from './db/get';
import { InsertPost } from './components/Posts/Card/insertPost';

function App(): React.JSX.Element {

  const [data, setData] = useState<Post[]>([]);
  const requestPosts = async () => {
    const fetchDataFromAPI = async () => {
      try {
        const responseData = await getAllPostData();
        setData(responseData);
      } catch (error) {
        console.error('Erro recuperar post:', error);
      }
    };

    fetchDataFromAPI();
  }

  useEffect(() => {
    requestPosts();
  }, []);

  return (
    <View style={styles.container}>
      <Button
        onPress={requestPosts}
        title="Atualizar"
        color="#841584"
        accessibilityLabel="Atualiza posts"
      />
      <InsertPost />
      <FlatList
        data={data}
        renderItem={({ item }) => <RenderCard item={item} />}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

export default App;
