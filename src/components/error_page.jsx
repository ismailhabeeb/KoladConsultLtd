import '../assets/styles/App.css'
import '../assets/styles/home.css'
import error from '../assets/images/error.jpg'
import { Link } from 'react-router-dom'
export default function ErrorPage(params) {
    return (
        <div style={{backgroundColor:'rgb(206, 223, 240)'}} className='p-3'>
            <img className='w-100' src={error} alt="" />
            <Link className='btnget d-flex gap-2 more btn btn-hover m-5' to={'/home'} >Back to Home</Link>
        </div>
    )
}

