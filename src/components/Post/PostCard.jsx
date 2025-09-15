import React from 'react'
import appwriteService from "../../appwrite/config"
import { Link } from 'react-router'


function PostCard({$id,title, featuredImage, className='' }) {
  return (
    <Link to={`/post/${$id}`}>
    <div className={`w-full bg-gray-100 rounded-xl p-4`}>
        <div className='w-full justify-center mb-4'>
            <img className={`rounded-xl w-[300px] `} src={appwriteService.getFilePreview(featuredImage)} alt={title} />
            
        </div>
        <h2 className='text-xl font-semibold'>{title}</h2>
    </div>
    </Link>
  )
}

export default PostCard