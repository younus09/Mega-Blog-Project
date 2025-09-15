import React,{useState, useEffect} from 'react'

import { PostCard , Container} from '../components/index'
import service from '../appwrite/config'
import { useSelector } from 'react-redux'

function AllPost() {
   const posts =  useSelector(state => state.post.posts)
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex -flex-wrap'>
                {posts.map((post) => (
                   
                    <div key={post.$id}>
                        <PostCard featuredImage={post.featuredImage} $id={post.$id} title={post.$id} className='p-2 w-1/4'/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost