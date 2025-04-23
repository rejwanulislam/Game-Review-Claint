import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Card({ gamereview }) {
    const { name, review, rating, publish, useremail, username,_id, genres, photo } = gamereview
    return (
        <div>
            <div className="card w-96 h-[430px] bg-base-100 shadow-xl">
            <div className='flex justify-center '><img className="h-52 w-80 pt-5 rounded" src={photo} alt="Shoes" /></div>
            <div className="card-body">
                    <h2 className="card-title">
                      Game Name: {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p> Review: {review}</p>
                    <p> Publish Year: {publish}</p>
                        <p> Rating: {rating}<div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        </div></p>
                    <div className="card-actions justify-end">
                       <NavLink to={`/detels/${_id}`}> <button  className='btn btn-accent'> Viw Detels</button></NavLink>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
