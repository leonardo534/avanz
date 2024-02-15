import React, { useEffect, useState } from 'react';

import { QueryClient, QueryClientProvider, useMutation, useQuery } from 'react-query';
import axios from 'axios';
import { HomePage } from './components/homepage';

const queryClient = new QueryClient();



export default function App() {
  // const requestPosts = async () => {
  //   const fetchDataFromAPI = async () => {
  //     try {
  //       const responseData = await getAllPostData();
  //       setData(responseData);
  //     } catch (error) {
  //       console.error('Erro ao recuperar post:', error);
  //     }
  //   };

  //   fetchDataFromAPI();
  // }

  // useEffect(() => {
  //   requestPosts();
  // }, []);

  

  return (
    <QueryClientProvider client={queryClient}>
      
      <HomePage />
    </QueryClientProvider>
  );
}
