import axios from 'axios';

const getAllPostData = async () => {
  try {
    const response = await axios.get('http://localhost/api/get.php');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default getAllPostData;