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
        isLoading: false
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState)

    const fetchUsers = async () => {
        setLoading()
        const res = await fetch(`${GITHUB_BASE_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })
        const data = await res.json()
        dispatch({
            type: 'GET_USERS',
            payload: data,
        })
        
    }
 
    const setLoading = () => dispatch ({
        type: 'SET_LOADING'
    })

    return <GithubContext.Provider value={{
        users: state.users,
        isLoading: state.isLoading,
        fetchUsers
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext