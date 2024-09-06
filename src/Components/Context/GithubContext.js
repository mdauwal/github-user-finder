import { createContext } from "react";

const GithubContext = createContext();

export const GithubProvider = ({children}) => {
    
    return <GithubContext.Provider value={{}}>{children}</GithubContext.Provider>
}


export default GithubContext;







