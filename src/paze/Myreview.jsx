import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
import { authcontex } from '../authcontex/AuthProvider'
import Swal from 'sweetalert2'

export default function Myreview() {
    const [myreview, setmyreview] = useState([])

    //const { name, review, rating, publish,useremail, username,_id, genres, photo } = myreview

    const { user } = useContext(authcontex)
    console.log(user)
    const data = useLoaderData()

    // console.log(data)
    console.log(myreview)
    useEffect(() => {
        const reviews = data.filter(item => item.useremail == user?.email)
        setmyreview(reviews)
        console.log(reviews)
    }, [data, user])







    const handledelet = (id) => {
        console.log(id)
        fetch(`https://game-review-server-eight.vercel.app/addreview/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result?.deletedCount > 0) {
                    Swal.fire({
                        title: "Delete SuccessFully ",
                        icon: "success",
                        draggable: true
                    });
                }

            })


        const newdata = myreview.filter(item => item._id !== id)
        setmyreview(newdata)

    }






    return (
        <div className=' grid md:grid-cols-2 lg:grid-cols-3'>
            {

                user && (myreview.map(item => <div className="card w-96 h-[400px] bg-base-200 shadow-xl">

                    <div className='flex justify-center '><img className="h-52 w-80 pt-5 rounded" src={item?.photo} alt="Shoes" /></div>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item?.name}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p> Review: {item?.review}</p>
                        <p> Rating: {item?.rating}<div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        </div>

                        </p>
                        <div className="card-actions justify-end">
                            <button onClick={() => handledelet(item._id)} className='btn btn-accent'>  Delete</button>
                            <NavLink to={`/update/${item._id}`}><button className='btn btn-accent'>  Update</button></NavLink>

                        </div>
                    </div>
                </div>))


            }
               <div className='flex justify-center'>
            {
              myreview?.length == 0 && <p className='font-extrabold text-2xl text-center'>No Data Fond</p>
            }
            </div>
        </div>
    )
}
