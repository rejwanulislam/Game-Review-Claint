import React, { useContext } from 'react'
import { authcontex } from '../authcontex/AuthProvider'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

export default function Login() {
    const { handlelogin ,handlegooglelogin} = useContext(authcontex)
    const uselocation = useLocation()
    const usenavigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        handlelogin(email, password)
        .then(res=>{
            usenavigate(uselocation?.state?.form)
        })
        console.log(email, password)
    }



      //handlegooglelogin

      const googlelogin =()=>{
        handlegooglelogin()
        .then(res =>{
            usenavigate(uselocation?.state?.form)
        })
      }


    return (
        <div>
            <form onSubmit={handleLogin}>
                <div className=' flex  justify-center'>
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className=" font-semibold label-text">Email:</span>
                            </label>
                            <input type="email" placeholder="Type here" name="email" className="input input-bordered font-semibold w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className=" font-semibold label-text">Password:</span>
                            </label>
                            <input type="password" placeholder="Type here" name="password" className="input input-bordered font-semibold w-full max-w-xs" />
                        </div>
                        <div className='flex gap-4'>
                            <button className='btn btn-accent w-1/2 '><input type='submit'></input></button>
                            
                        </div>
                    </div>
                </div>
            </form>
            <div className='text-center'>
            <button className='text-center btn rounded-full btn-accent bg-red-400 font-bold ' onClick={()=>googlelogin()}>Google Login</button>
            </div>
            <p className='text-center'>If you don't have an account Plase <NavLink className="text-red-500 font-semibold" to="/signup">Sign Up</NavLink></p>
        </div>
    )
}
