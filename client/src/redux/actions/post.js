import axios from "axios";
import { toast } from "react-toastify";

// Post oluşturma işlemi için action
export const getPostsAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:4080/getPosts");
    dispatch({ type: "GET_POSTS", payload: data });
    // Başarı mesajı gösterme
    toast.success("Kayıt başarılı!", {
      position: "top-right",
      autoClose: 3000,
    });
  } catch (error) {
    toast.error(error?.response?.data?.message || "Bir hata oluştu", {
      position: "top-right",
      autoClose: 5000,
    });
  }
};

//create post
export const createPostAction = (postData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:4080/createPost",
      postData
    );
    dispatch({ type: "CREATE_POST", payload: data });
    // Başarı mesajı gösterme
    toast.success("Post Oluşturma İşlemi Başarılı!", {
      position: "top-right",
      autoClose: 3000,
    });
  } catch (error) {
    toast.error(error?.response?.data?.message || "Bir hata oluştu", {
      position: "top-right",
      autoClose: 5000,
    });
  }
};
//update post
export const updatePostAction = (id, postData) => async (dispatch) => {
  try {
    const { data } = await axios.patch(
      `http://localhost:4080/updatePost/${id}`,
      postData
    );
    dispatch({ type: "UPDATE_POST", payload: data });
    // Başarı mesajı gösterme
    toast.success("Post Güncelleme İşlemi Başarılı!", {
      position: "top-right",
      autoClose: 3000,
    });
  } catch (error) {
    toast.error(error?.response?.data?.message || "Bir hata oluştu", {
      position: "top-right",
      autoClose: 5000,
    });
  }
};
//delete post
export const deletePostAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:4080/deletePost/${id}`);
    dispatch({ type: "DELETE_POST", payload: id });
    // Başarı mesajı gösterme
    toast.success("Post Silme İşlemi Başarılı!", {
      position: "top-right",
      autoClose: 3000,
    });
  } catch (error) {
    toast.error(error?.response?.data?.message || "Bir hata oluştu", {
      position: "top-right",
      autoClose: 5000,
    });
  }
};
