import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { GrUpdate } from 'react-icons/gr'
import { useDispatch } from 'react-redux'
import { deletePostAction} from '../redux/actions/post'

const HomeCard = ({post}) => {
    const dispatch = useDispatch()
    
    const deletePost = (id) => {
        dispatch(deletePostAction(id))
    }
    const updatePost = (id) => {
        dispatch({ type: "MODAL", payload: {open:true,updateId:id} })
    }
  return (
    <div className='relative w-full border p-3 rounded-md bg-gray-50'>
    <div className='text-xl font-bold'>{post?.title}</div>
        <div className='text-sm text-gray-700'>{post?.description}</div>
        <div className='flex item-center justify-between mt-4'> 
            <span className='text-xs text-gray-500'>{post?.user}</span>
            <span className='text-xs text-gray-500'>{(post?.date)?.substring(0,10)}</span>
        </div>
        <div className='absolute -top-3 -right-3 flex space-x-3 items-center  p-1 rounded-md bg-gray-50'> 
            <AiOutlineDelete onClick={()=>deletePost(post._id)} size={22} className='bg-red-500 rounded-full text-white  cursor-pointer '/>
            <GrUpdate onClick={()=>updatePost(post._id)} size={22} className='bg-red-500 rounded-full cursor-pointer text-white p-1' />

        </div>
    </div>
  )
}

export default HomeCard