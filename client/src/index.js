import React from 'react';
import ReactDOM from 'react-dom/client'; // Modern React için doğru import
import App from './App'; // Uygulamanın ana bileşeni
import './index.css'; // Varsayılan stil dosyası (isteğe bağlı)
import { Provider } from 'react-redux';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* Redux Tüm yapı içerisinde kullanmak için provider ile sarmaladık. */
  <Provider store={store}>  
    <App />
  </Provider>
);