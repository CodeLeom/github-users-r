import {useEffect, useContext} from 'react'
import GithubContext from '../context/github/GithubContext'
import UserItem from './UserItem'
import Spinner from './Spinner'

function UserResult() {
  const {users, isLoading, fetchUsers} = useContext(GithubContext)

    useEffect(() => {
        fetchUsers()
    }, [])

    
    if(!isLoading) {
       return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {users.map((user) => (
        // <h2>{user.login}</h2>
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  ) 
    } else {
       return <Spinner />
    }
  
}

export default UserResult
