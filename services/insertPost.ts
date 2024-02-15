import axios from "axios";
import { Post } from "../interfaces/post";

export const insertPost = async ( post: Post) => {
  try {
    await axios({
      method: "POST",
      url: "http://192.168.100.29/api/insert.php",
      headers: { "Content-Type": "multipart/form-data" },
      data: {
        post,
      },
    })
      .then(res => {
        console.log("res", res.data);
      })
      .catch(err => {
        console.log("error in request", err);
      });
  } catch (error) {
    console.error('Erro ao inserir o post:', error);
  }
}