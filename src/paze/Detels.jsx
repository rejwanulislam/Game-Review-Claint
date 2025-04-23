import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { authcontex } from '../authcontex/AuthProvider'
import Swal from 'sweetalert2'

export default function Detels() {
    const data = useLoaderData()
    const { user } = useContext(authcontex)
    const params = useParams()
    const [finddata, setfinddata] = useState([])
    const { name, review, rating, publish, useremail, username, _id, genres, photo } = finddata

    console.log(finddata)
    useEffect(() => {
        {
            const newdata = data.find(item => item._id == params.id)
            setfinddata(newdata)
        }
    }, [data, params])

    const handleWatchList = (data) => {

        const { name, review, rating, publish, useremail, username, genres, photo } = data
        const watchitem = {
            name,
            review,
            rating,
            publish,
            useremail: user.email,
            username: user.displayName,
            genres,
            photo
        }
        fetch('https://game-review-server-eight.vercel.app/watchList', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(watchitem)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result?.acknowledged) {
                    Swal.fire({
                        title: "  SuccessFully Added to WatchList",
                        icon: "success",
                        draggable: true
                    });
                }
            })

    }

    return (
        <div className='flex justify-center'>
            <div className="card w-4/5 h-[550px] bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Game Name: {name}<br></br>
                        Game Rating: {rating}<br></br>
                        Game Review: {review}<br></br>
                        Game Publish: {publish}<br></br>
                        User Name: {username}<br></br>
                        User Umail: {useremail}<br></br>
                        Genres: {genres}
                    </h2>

                    <button onClick={() => handleWatchList(finddata)} className='btn btn-accent'>Add to WatchList</button>
                </div>
            </div>
        </div>
    )
}
