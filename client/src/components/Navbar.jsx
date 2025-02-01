import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import Button from './Button';
import { useDispatch } from 'react-redux';
const Navbar = () => {
  const dispatch=useDispatch();
//logout fonksiyonu
const logoutFunc = () => {
    localStorage.clear();
    window.location="/auth"
}
const openModal=()=>{
dispatch({type:"MODAL",payload:true})
}

  return (
    //ana div
    <div className='h-20 bg-indigo-600  flex items-center justify-between px-5' >
        {/* post paylaş yazısı */}
        <div className='text-white font-bold text-2xl cursor-pointer '>POST PAYLAŞ</div>
    {/* sol ara, postoluştur ve logout bölümü */}
    <div className='flex items-center space-x-5'>
        <input type="text" placeholder="Ara" className='p-2 outline-none rounded-md'/>
       
       <div><Button onClick={openModal} title={"Post Oluştur"}/></div>
        {/* logout için */}
        <BiLogOut onClick={logoutFunc} className='text-white cursor-pointer' size={25}/>
    </div>
    </div>
  )
}

export default Navbar