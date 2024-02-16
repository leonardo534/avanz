import axios from "axios";

export const deletePost = async (post_id: number) => {
  return axios({
    method: "POST",
    url: "http://192.168.100.29/api/deletePost.php",
    headers: { "Content-Type": "multipart/form-data" },
    data: {
      post_id,
    },
  })
    .then(res => {
      return res.data
    })
    .catch(err => {
      return err;
    });
}