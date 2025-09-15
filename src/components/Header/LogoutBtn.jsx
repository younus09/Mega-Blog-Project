import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logOut } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const handleLogout = () => {
        authService.logOut()
        .then(()=>{
            dispatch(logOut())
        })
    }
  return (
    <button onClick={handleLogout} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounder-full'>Logout</button>
  )
}

export default LogoutBtn;