import axios from 'axios';

const getAllPostData = async () => {
  try {
    const response = await axios.get('http://192.168.100.29/api/get.php');
    return response.data;
  } catch (error) {
    console.error('Error ao recuperar posts:', error);
    throw error;
  }
};

export default getAllPostData;