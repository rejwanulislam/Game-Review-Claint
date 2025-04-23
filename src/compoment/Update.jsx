import React, { useContext, useState } from 'react'
import { useLoaderData, useParams, } from 'react-router-dom'
import { authcontex } from '../authcontex/AuthProvider'
import Swal from 'sweetalert2'

export default function Update() {
    const { user } = useContext(authcontex)
    const data = useLoaderData()
    const { id } = useParams()

    // const value = {  review, rating, publish, useremail, username, genres, photo }

    const [name, setname] = useState(data?.name)
    const [review, setreview] = useState(data?.review)
    const [rating, setrating] = useState(data?.rating)
    const [publish, setpublish] = useState(data?.publish)
    const [photo, setphoto] = useState(data?.photo)
    const [genres, setgenres] = useState(data?.genres)



    const value = { name, review, rating, publish, genres, photo }

    console.log(value)

    const handleUpdate = () => {
        fetch(`https://game-review-server-eight.vercel.app/addreview/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(value)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result?.modifiedCount > 0) {
                    Swal.fire({
                        title: "Update SuccessFully ",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }


    return (
        <div className='flex flex-col '>

            {/* row 1 */}
            <form>
                <div className='flex gap-4 justify-center '>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className=" font-semibold label-text">Game Name:</span>
                        </label>
                        <input type="text" placeholder="Type here" value={name} onChange={(e) => setname(e.target.value)} name="name" className="input input-bordered font-semibold w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className=" font-semibold label-text">Review Description:</span>
                        </label>
                        <input type="text" placeholder="Type here" value={review} onChange={(e) => setreview(e.target.value)} name="review" className="input input-bordered font-semibold w-full max-w-xs" />
                    </div>
                </div>
                {/* row 2 */}
                <div className='flex justify-center gap-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className=" font-semibold label-text">Rating:</span>
                        </label>
                        <input type="text" placeholder="Type here" value={rating} onChange={(e) => setrating(e.target.value)} name="rating" className="input input-bordered font-semibold w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className=" font-semibold label-text">Publishing year:</span>
                        </label>
                        <input type="text" placeholder="Type here" value={publish} onChange={(e) => setpublish(e.target.value)} name="publish" className="input input-bordered font-semibold w-full max-w-xs" />
                    </div>
                </div>
                {/* row 3 */}
                <div className='flex justify-center gap-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className=" font-semibold label-text">User Name :</span>
                        </label>
                        <input type="text" placeholder="Type here" value={user?.displayName} name="username" className="input input-bordered font-semibold w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className=" font-semibold label-text">User Email :</span>
                        </label>
                        <input type="text" placeholder="Type here" value={user?.email} name="useremail" className="input input-bordered font-semibold w-full max-w-xs" />
                    </div>

                </div>
                {/* row 4 */}
                <div className='flex justify-center gap-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className=" font-semibold label-text">Genres :</span>
                        </label>
                        <select value={genres} onChange={(e) => setgenres(e.target.value)} name='genres' className="select select-bordered w-full  max-w-xs">
                            <option>Action</option>
                            <option>RPG</option>
                            <option>Adventure</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className=" font-semibold label-text">Game Cover Image:</span>
                        </label>
                        <input type="text" value={photo} onChange={(e) => setphoto(e.target.value)} name='photo' placeholder="Type here" className="input input-bordered font-semibold w-full max-w-xs" />
                    </div>

                </div>
                <div className='flex justify-center'>
                </div>
            </form>
            <div className='flex justify-center'>
            <button onClick={() => handleUpdate()} className='btn btn-accent w-1/2 '>Update</button>
            </div>
        </div>
    )
}

