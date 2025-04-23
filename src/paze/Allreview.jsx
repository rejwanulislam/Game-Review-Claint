import React, { useState } from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
import Card from '../compoment/Card'

export default function Allreview() {

    const data = useLoaderData()
    console.log(data)
    const [sorting, setsorting] = useState(data)
    const sortbyrating = () => {
        const rating = [...data].sort((a, b) => b.rating - a.rating)
        setsorting(rating)
    }

    const sortbyrpublishyear = () => {
        const year = [...data].sort((a, b) => b.publish - a.publish)
        setsorting(year)
    }


    return (
        <div>
            <div className='pl-7'>
                <select className=" font-bold text-xl max-w-xs"
                    onChange={(e) => {
                        if (e.target.value == "rating") {
                            sortbyrating()
                        }
                        if (e.target.value == "year") {
                            sortbyrpublishyear()
                        }
                    }}>
                    <option className=' disabled selected font-bold text-xl'>sort By </option>
                    <option className=' font-bold text-xl' value="rating">sort By rating</option>
                    <option className=' font-bold text-xl' value="year">sort By Year</option>

                </select>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    sorting.map(gamereview => <Card gamereview={gamereview}></Card>)
                }
            </div>


        </div>

    )
}
