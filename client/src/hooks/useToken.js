//local storage kaydettiğin token geri döndürmek için kullanılır.
import { useEffect, useState } from "react";

const useToken = () => {
  const [token, setToken] = useState("");
  //sayfa yüklendipinde local storage'dan token'ı çekiyoruz.
  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("auth")));
  }, []);

  return [token];
};

export default useToken;
