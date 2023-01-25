import { createContext, useReducer } from "react";
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_BASE_URL = process.env.REACT_APP_GITHUB_BASE_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider =({children}) => {
    // const [users, setUsers] = useState([])
    // const [isLoading, setIsLoading] = useState(true)
    const initialState = {
        users:[],
        user: {},
        repos: [],
        isLoading: false
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState)

    //fetch user function
    const fetchUsers = async (text) => {
        setLoading()
        const params = new URLSearchParams({q: text})

        const res = await fetch(`${GITHUB_BASE_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })
        const {items} = await res.json()
        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
        
    }
 
    //function to get single user from the api
    const getUser = async (login) => {
        setLoading()

        const res = await fetch(`${GITHUB_BASE_URL}/users/${login}`,{
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            }
        })

        if(res.status === 404){
            window.location = '/notfound'
        } else {
            const data = await res.json()
            dispatch({
                type: 'GET_USER',
                payload: data,
            })
        }

    }

    //function to get the user repositories
    const getUserRepos = async (login) => {
        setLoading()

        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10
        })

        const res = await fetch(`${GITHUB_BASE_URL}/users/${login}/repos?${params}`,{
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })

        const data = await res.json()
        dispatch ({
            type: 'GET_REPOS',
            payload: data,
        })
    }

    //function to clear users from our state
    const clearUsers = () => dispatch ({
        type: 'CLEAR_USERS'
    })

    //function to set the loading gif while fetching data from the api
    const setLoading = () => dispatch ({
        type: 'SET_LOADING'
    })

    return <GithubContext.Provider value={{
        users: state.users,
        isLoading: state.isLoading,
        user: state.user,
        repos: state.repos,
        fetchUsers,
        clearUsers,
        getUser,
        getUserRepos
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext