import React, {useState, useEffect} from 'react'
import { Container, PostForm } from '../components/index'
import service from '../appwrite/config'
import { useNavigate, useParams } from 'react-router'

function EditPost() {
    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        if (slug){
            service.getPost(slug)
                .then((post) => {
                    if (post) {
                        setPost(post)
                    }
                })
        }else{
            navigate('/')
        }
    },[slug,navigate])

  return post ? (
    <div className='py-8'>
        <Container >
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost