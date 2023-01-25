import {useEffect, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../Spinner'
import {FaCodepen, FaStore, FaUserFriends, FaUser} from 'react-icons/fa'
import { getValue } from '@testing-library/user-event/dist/utils'

function User() {
    const {getUser, user, isLoading} = useContext(GithubContext)
    const params = useParams()

    useEffect(() =>{
        getUser(params.login)
    }, [])

    //destructure the user data coming from the api
    const {name, type, avatar_url, location, bio, blog, twitter_username, login, html_url, followers, following, public_repos, public_gists, hireable} = user

    if(isLoading){
        return <Spinner />
    }

  return (
    <>
        <div className="w-full mx-auto lg:w-10/12">
            <div className='mb-4'>
                <Link to='/' className='btn btn-ghost'>
                    Back to Search Page
                </Link>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
                <div className="mb-6 md:mb-0">
                    <div className="rounded-lg shadow-lg card image-full">
                        <figure>
                            <img src={avatar_url} alt="user profile pics" />
                        </figure>
                        <div className="card-body justify-end">
                            <h2 className="card-title mt-40">
                                {name}
                            </h2>
                            <p>
                                {login}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="mb-6">
                        <h1 className="text-3xl card-title">{name}
                        <div className="ml-2 mr-1 badge badge-success text-white">{type}</div>{hireable && (<div className='mx-1 badge badge-info text-white'>Hireable</div>)}
                        </h1>
                        <p>{bio}</p>
                        <div className="mt-4 card-actions">
                            <a href={html_url} target='_blank' rel='noreferrer' className='btn btn-outline'>Visit Github Profile</a>
                        </div>
                    </div>
                    <div className="w-full p-3 rounded-lg shadow-md bg-base-100 stats">
                        {location && (
                        <>
                            <div className='stat-title text-md'>Location</div>
                            <div className='text-lg stat-value'>{location}</div>
                        
                        </>)}
                        {blog && (
                        <>
                            <div className='mt-2 stat-title text-md'>Website</div>
                            <div className='text-lg stat-value'>
                                <a href={`https://${blog}`} target='_blank' rel='noreferrer'>{blog}</a>
                            </div>
                        </>)}
                        {twitter_username && (
                        <>
                            <div className='mt-2 stat-title text-md'>Twitter</div>
                            <div className='text-lg stat-value'>
                                <a href={`https://twitter.com/${twitter_username}`} target='_blank' rel='noreferrer'>{twitter_username}</a>
                            </div>
                        </>)}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default User