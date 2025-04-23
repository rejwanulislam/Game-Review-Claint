import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { authcontex } from '../authcontex/AuthProvider'

export default function WatchList() {
    const [alldata, setalldata] = useState([])
    const lodedata = useLoaderData()
    console.log(alldata)
    const { user } = useContext(authcontex)
    useEffect(() => {
        const data = lodedata.filter(item => item?.useremail == user?.email)
        setalldata(data)
    }, [lodedata, user])
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 '>
            {
                user && alldata.map(item => (<div className="card w-96 h-96 mt-4 bg-base-200 shadow-xl">

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


                        </div>
                    </div>
                </div>))
            }
            {
                alldata?.length == 0 && <p className='font-extrabold text-2xl text-center'>No Data Fond</p>
            }
        </div>
    )
}
