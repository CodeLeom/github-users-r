import {useState, useContext} from 'react'
import GithubContext from '../context/github/GithubContext'

function UserSearch() {
    const [text, setText] = useState('')
    const {users, fetchUsers, clearUsers} = useContext(GithubContext)

    //input function handler
    const handleChange = (e) => setText(e.target.value)
   
    //submit function handler
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text === '') {
            alert('Kindly input a search word')
        } else {
            // search users
            fetchUsers(text)
            setText('')
        }
    }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input type="text" className="w-full pr-40  bg-neutral input input-lg text-white" placeholder="search for a user" value={text} onChange={handleChange} />
                        <button type="submit" className="absolute top-0 right-0 rounded-l-none bg-black w-26 btn btn-lg">Search</button>
                    </div>
                </div>
            </form>
        </div>
            {users.length > 0 && (
                <div>
                    <button onClick={clearUsers} className="btn bg-neutral btn-ghost btn-lg text-white">Clear</button>
                </div>
            )}
    </div>
  )
}

export default UserSearch