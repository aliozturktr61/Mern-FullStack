import React, { useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { createPostAction, updatePostAction } from "../redux/actions/post";
const Modal = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.modal);
  const [postData, setPostData] = useState({
    user: "",
    title: "",
    description: "",
  });
  const onChangeFunc = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const postCreate = () => {
    // Eğer updateId varsa, sadece güncelleme yapılır
    if (modal?.updateId) {
      dispatch(updatePostAction(modal?.updateId, postData));
    } else {
      // Eğer updateId yoksa, yeni post eklenir
      dispatch(createPostAction(postData));
    }
  
    // Modalı kapat
    dispatch({ type: "MODAL", payload: false });
  
    // Post data'yı sıfırla
    setPostData({ user: "", title: "", description: "" });
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-1/3 p-2 rounded-md shadow-md">
        <div
          onClick={() => dispatch({ type: "MODAL", payload: false })}
          className="flex justify-between items-center cursor-pointer"
        >
          <h1 className="h1-text_style">{modal?.updateId?"Post Güncelle":"Post Paylaş"}</h1>
          {/* kapatma iconu için */}
          <AiOutlineClose
            size={25}
            className="cursor-pointer"
            onClick={() => dispatch({ type: "MODAL", payload: false })}
          />
        </div>
        <div className="form_giris_style">
          <input
            value={postData.user}
            type="text"
            name="user"
            placeholder="User"
            className="input-style"
            onChange={onChangeFunc}
          />
          <input
            value={postData.title}
            type="text"
            name="title"
            placeholder="Title"
            className="input-style"
            onChange={onChangeFunc}
          />
          <input
            value={postData.description}
            type="text"
            name="description"
            placeholder="Description"
            className="input-style"
            onChange={onChangeFunc}
          />
        </div>

       <Button onClick={postCreate} title={ modal?.updateId?"Güncelle":"Paylaş"} />
      </div>
    </div>
  );
};

export default Modal;
