import React,{useState, useEffect} from 'react'

import { PostCard , Container} from '../components/index'
import service from '../appwrite/config'

function AllPost() {
    const [posts , setPosts] = useState([])
    useEffect(()=>{
        service.listPost([])
            .then((Cposts) => {
                if (Cposts){
                    console.log(Cposts.documents[0])
                    setPosts(Cposts.documents)
                }
            })
             
    },[])

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