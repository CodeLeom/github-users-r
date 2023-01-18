import {useEffect, useState} from 'react'
import UserItem from './UserItem'
import Spinner from './Spinner'

function UserResult() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const res = await fetch(`${process.env.REACT_APP_GITHUB_BASE_URL}/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
        })
        const data = await res.json()
        setUsers(data)
        setIsLoading(false)
    }
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
