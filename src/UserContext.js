import { createContext, useContext } from "react";
 
export const UserContext = createContext(undefined);

export default function useUserContext(){
    const user = useContext(UserContext)

    if(user == undefined) throw new Error('useContext must be used with a UserContext')

    return user 
}