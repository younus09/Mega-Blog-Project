import React,{useEffect, useState} from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components/index'
import { useSelector } from 'react-redux'


function Home() {
    const posts = useSelector((state) => state.post.posts)

  
    if (posts.length === 0){
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <h1 className='text-2xl font-bold hover:text-gray-500'>
                            ....Loading
                        </h1>

                    </div>
                </Container>

            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard featuredImage={post.featuredImage} $id={post.$id} title={post.$id} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home