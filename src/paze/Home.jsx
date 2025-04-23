
import { NavLink, useLoaderData } from 'react-router-dom'
import Slider from '../compoment/Slider'
import Card from '../compoment/Card'



export default function Home() {
  const data = useLoaderData()
 
  return (
    <div>
        <Slider></Slider>
         <div className='grid md:grid-cols-2 lg:grid-cols-3'>
        {
          data.slice(0,6).map(gamereview => <Card key={gamereview._id} gamereview={gamereview}></Card>)
        }
        </div>
        <NavLink to="/allreview"> <button  className='btn btn-accent'>All Review</button></NavLink>

    </div>
  )
}
