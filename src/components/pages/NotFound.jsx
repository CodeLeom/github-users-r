import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'


function NotFound() {
  return (
    <div className='hero'>
        <div className='text-center hero-content'>
            <div className='max-w-lg'>
                <h1 className='text-6xl font-bold mb-5'>Omo! x5000</h1>
                <p className='text-3xl mb-6'>Error 404 - Please check the URL and Try again. </p>
                <Link to='/' className='btn btn-primary btn-md'>
                    <FaHome className='mr-2' />
                    Back To Home
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound