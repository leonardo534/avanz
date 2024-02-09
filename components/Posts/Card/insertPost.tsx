import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { styles } from "../../../styles/styles";
import axios from "axios";
import { modalStyle } from '../../../styles/modalStyle';

export const InsertPost = () => {
  const [idAuthor, setIdAuthor] = useState('');
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [typeMachine, setTypeMachine] = useState('');
  const [warning, setWarning] = useState(false);
  const [messageResponse, setMessageResponse] = useState(false);

  const handleSendPost = async () => {
    if (idAuthor.length == 0 || type.length == 0 || title.length == 0 || description.length == 0 || type.length == 0) {
      setWarning(true)
      return
    }
    setWarning(false)
    try {
      const response = await axios.post('http://localhost/api/insert.php', {
        idAuthor,
        type,
        title,
        description,
        typeMachine
      });

      if (response.data.status === 'success') {
        console.log('Post inserido com sucesso!');
        setMessageResponse(true)
        setIdAuthor('');
        setDescription('');
        setTitle('');
        setType('');
      } else {
        console.error('Erro ao inserir o post:', response.data.message);
      }
    } catch (error) {
      console.error('Erro ao inserir o post:', error);
    }
  };

  const handleCancel = () =>{
    setMessageResponse(true)
    setIdAuthor('');
    setDescription('');
    setTitle('');
    setType('');
  }
  return (
    <View style={styles.card}>
      <View style={styles.container}>
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
          {messageResponse && (
            <Text style={styles.commentText}>Post inserido com sucesso!</Text>
          )}
          {warning && (
            <Text style={styles.commentText}>Todos os campos são obrigatorios</Text>
          )}
          <TouchableOpacity onPress={handleSendPost} style={styles.button}>
            <Text style={styles.buttonText}>Enviar Post</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCancel} style={styles.button}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};
