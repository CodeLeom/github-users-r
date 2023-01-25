import {useEffect, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../Spinner'
import RepoList from '../RepoList'
import {FaCode, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'

function User() {
    const {getUser, user, isLoading, getUserRepos, repos} = useContext(GithubContext)
    const params = useParams()

    useEffect(() =>{
        getUser(params.login)
        getUserRepos(params.login)
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
                        <div className="w-full p-3 rounded-lg shadow-md bg-base-100 stats">
                        {location && (
                        <div className='stat'>
                            <div className='stat-title text-md'>Location</div>
                            <div className='text-sm stat-value'>{location}</div>
                        </div>)}
                        {blog && (
                        <div className='stat'>
                            <div className='stat-title text-md'>Website</div>
                            <div className='text-sm stat-value'>
                                <a href={`https://${blog}`} target='_blank' rel='noreferrer'>Visit Website</a>
                            </div>
                        </div>)}
                        {twitter_username && (
                        <div className='stat'>
                            <div className='stat-title text-md'>Twitter</div>
                            <div className='text-sm stat-value'>
                                <a href={`https://twitter.com/${twitter_username}`} target='_blank' rel='noreferrer'>{twitter_username}</a>
                            </div>
                        </div>)}
                      </div>
                    </div>
                    <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <FaUsers className='text-3xl md:text-3xl' />
                            </div>
                            <div className="stat-title pr-5">Followers</div>
                            <div className="stat-value pr-5 text-3xl md:text-2xl">
                                {followers}
                            </div>
                        </div>
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <FaUserFriends className='text-3xl md:text-3xl' />
                            </div>
                            <div className="stat-title pr-5">Following</div>
                            <div className="stat-value pr-5 text-3xl md:text-2xl">
                                {following}
                            </div>
                        </div>
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <FaCode className='text-3xl md:text-3xl' />
                            </div>
                            <div className="stat-title pr-5">Public Repos</div>
                            <div className="stat-value pr-5 text-3xl md:text-2xl">
                                {public_repos}
                            </div>
                        </div>
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <FaStore className='text-3xl md:text-3xl' />
                            </div>
                            <div className="stat-title pr-5">Public Gists</div>
                            <div className="stat-value pr-5 text-3xl md:text-2xl">
                                {public_gists}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RepoList repos={repos} />
        </div>
    </>
  )
}

export default User