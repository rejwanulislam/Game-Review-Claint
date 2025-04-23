import React, { useContext } from 'react'
import { authcontex } from '../authcontex/AuthProvider'

export default function Signup() {

    const { emailsignup, updateuser } = useContext(authcontex)

    const handleSignup = (e) => {
        e.preventDefault()
        const name = e.target.name.value

        const email = e.target.email.value
        const password = e.target.password.value

        const photo = e.target.photo.value

        const value = { name, email, password, photo }
        console.log(value)
        emailsignup(email, password)
            .then(res => {
                updateuser(name, photo)
            })
    }
    return (
        <div>
            <form onSubmit={handleSignup}>
                <div className='flex justify-center'>
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className=" font-semibold label-text">Name:</span>
                            </label>
                            <input type="text" placeholder="Type here" name="name" className="input input-bordered font-semibold w-full max-w-xs" />
                        </div>
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

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className=" font-semibold label-text">Photo:</span>
                            </label>
                            <input type="text" placeholder="Type here" name="photo" className="input input-bordered font-semibold w-full max-w-xs" />
                        </div>
                        <button className='btn btn-accent w-1/2 '><input type='submit'></input></button>
                    </div>
                </div>
            </form>
        </div>

    )
}
