import React, { useContext } from 'react'
import { authcontex } from '../authcontex/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivectRoute({ children }) {
    const { user ,loding} = useContext(authcontex)
    const uselocation = useLocation()
    console.log(uselocation)
   
   
    if(loding){
        return <span className="loading loading-bars loading-lg"></span>
    }
   
    if(!user) {
     return <Navigate to="/login" state={{form:uselocation?.pathname}}></Navigate>
    }
   return children
}

