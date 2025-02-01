import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction, registerAction } from "../redux/actions/auth";

/* style'lar index.css içinde tanımlandı */
const Auth = () => {
  const dispatch = useDispatch();

  /* Kayıt ol veya Giriş yap için state tutuyoruz */
  const [signUp, setSignUp] = useState(false);

  /* input verileri için state oluşturuyoruz */
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
  });

  /* input verileri değiştiğinde state güncelliyoruz */
  const onChangeFunc = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const authFunc = () => {
    if (signUp) {
      dispatch(registerAction(authData));
    } else {
      dispatch(loginAction(authData));
    }
  };

  return (
    <div className="ana_div_style">
      <div className="w-1/3 bg-white p-3 rounded-md shadow-md">
        <h1 className="h1-text_style">{signUp ? "Kayıt Ol" : "Giriş Yap"}</h1>
        <div className="form_giris_style">
          {signUp && (
            <input
              value={authData.username}
              name="username"
              onChange={onChangeFunc}
              type="text"
              placeholder="Username"
              className="input-style"
            />
          )}
          <input
            value={authData.email}
            name="email"
            onChange={onChangeFunc}
            type="text"
            placeholder="Email"
            className="input-style"
          />
          <input
            value={authData.password}
            name="password"
            onChange={onChangeFunc}
            type="password"
            placeholder="Password"
            className="input-style"
          />
        </div>
        <div className="giris_yap_style">
          {signUp ? (
            <span onClick={() => setSignUp(false)}>
              Daha Önce Giriş Yaptınız mı?
            </span>
          ) : (
            <span onClick={() => setSignUp(true)}>
              Kayıt Olmak İçin Tıklayınız.
            </span>
          )}
        </div>
        <div onClick={authFunc} className="kayit_ol_style">
          {signUp ? "Kayıt Ol" : "Giriş Yap"}
        </div>
      </div>
    </div>
  );
};

export default Auth;