import { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
import authService from './appwrite/auth'
import service from './appwrite/config'
import { logIn, logOut } from './store/authSlice'
import { Header,Footer } from './components'
import {Outlet} from "react-router"


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
      .then((userData) => {
        if (userData){
          return dispatch(logIn({userData}))
        }else{
          return dispatch(logOut())
        }
      })
      .catch((err)=>{
        console.log("no user logged in ")
        dispatch(logOut())
      })
      .finally(()=> setLoading(false))
  },[])


  return !loading ?
  <div className='min-h-screen flex flex-wrap content-between justify-center bg-gray-400'>
    <div className='w-full block'>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>

  </div> 
  : null
}

export default App
