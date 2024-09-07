import { createContext, useReducer } from "react";
import GithubReducer from "../Reducer/GithubReducer";



const GithubContext = createContext();

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        loading: true
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    const getUsers = async () => {
        const res = await fetch(`${process.env.REACT_APP_GITHUB_TOKEN}/users`,{
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_GITHUB_URL}`
            }
        });
        const data = await res.json();
        dispatch({type: 'GETUSERS', payload: data})
    };
    
    return <GithubContext.Provider value={{ ...state, getUsers}}>{children}</GithubContext.Provider>
}


export default GithubContext;







