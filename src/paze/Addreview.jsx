import React, { useContext } from 'react'
import { authcontex } from '../authcontex/AuthProvider'
import Swal from 'sweetalert2'

export default function Addreview() {
    const { user } = useContext(authcontex)

    const handlesubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const review = e.target.review.value
        const rating = e.target.rating.value
        const publish = e.target.publish.value
        const username = user?.displayName
        const useremail = user?.email
        const genres = e.target.genres.value
        const photo = e.target.photo.value

        const value = { name, review, rating, publish, useremail, username, genres, photo }
        console.log(value)

        fetch('https://game-review-server-eight.vercel.app/addreview', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(value)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if(result?.acknowledged){
                    Swal.fire({
                        title: "Your Review SuccessFully Added",
                        icon: "success",
                        draggable: true
                      });
                }
            })
    }


    return (
        <div className='flex flex-col '>

            {/* row 1 */}
            <form onSubmit={handlesubmit}>
                <div className='flex gap-4 justify-center '>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className=" font-semibold label-text">Game Name:</span>
                        </label>
                        <input type="text" placeholder="Type here" name="name" className="input input-bordered font-semibold w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className=" font-semibold label-text">Review Description:</span>
                        </label>
                        <input type="text" placeholder="Type here" name="review" className="input input-bordered font-semibold w-full max-w-xs" />
                    </div>
                </div>
                {/* row 2 */}
                <div className='flex justify-center gap-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className=" font-semibold label-text">Rating:</span>
                        </label>
                        <input type="number" placeholder="Type here" name="rating" className="input input-bordered font-semibold w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className=" font-semibold label-text">Publishing year:</span>
                        </label>
                        <input type="number" placeholder="Type here" name="publish" className="input input-bordered font-semibold w-full max-w-xs" />
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
                        <select name='genres' className="select select-bordered w-full  max-w-xs">
                            <option >Action</option>
                            <option>RPG</option>
                            <option>Adventure</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className=" font-semibold label-text">Game Cover Image:</span>
                        </label>
                        <input type="text" name='photo' placeholder="Type here" className="input input-bordered font-semibold w-full max-w-xs" />
                    </div>

                </div>
                <div className='flex justify-center'>
                <button className='btn btn-accent w-1/2 '><input type='submit'></input></button>
                </div>
            </form>
        </div>
    )
}

