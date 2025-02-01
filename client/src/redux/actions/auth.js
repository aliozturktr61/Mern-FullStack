import axios from 'axios';
import { toast } from "react-toastify";

// Kayıt işlemi için action
export const registerAction = (authData) => async (dispatch) => {
    try {
        const { data } = await axios.post("http://localhost:4080/register", authData);
        dispatch({ type: "REGISTER", payload: data });

        // Başarı mesajı gösterme
        toast.success("Kayıt başarılı!", { position: "top-right", autoClose: 3000 });

        // Yönlendirme
        window.location = "/";
    } catch (error) {
        toast.error(error?.response?.data?.message || "Bir hata oluştu", {
            position: "top-right",
            autoClose: 5000,
        });
    }
};

// Giriş işlemi için action
export const loginAction = (authData) => async (dispatch) => {
    try {
        const { data } = await axios.post("http://localhost:4080/login", authData);
        dispatch({ type: "LOGIN", payload: data });

        // Başarı mesajı gösterme
        toast.success("Giriş başarılı!", { position: "top-right", autoClose: 3000 });

        // Yönlendirme
        window.location = "/";
    } catch (error) {
        toast.error(error?.response?.data?.message || "Bir hata oluştu", {
            position: "top-right",
            autoClose: 5000,
        });
    }
};