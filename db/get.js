import axios from 'axios';

const getAllPostData = async () => {
  try {
    const response = await axios.get('http://192.168.100.29/api/get.php');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default getAllPostData;