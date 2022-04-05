import {createContext, useEffect, useState} from 'react';
import {useMoralis} from "react-moralis"

export const RobinhoodContext = createContext();

export const RobinhoodProvider = ({children}) => {

    const [currentAccount, setCurrentAccount] = useState()
    const [formattedAccount, setFormattedAccount] = useState()

    const {isAuthenticated, authenticate, user, logout, Moralis,  enableWeb3} = useMoralis();

    useEffect(() => {
        if(isAuthenticated){
            const account = user.get("ethAddress");
            let formattedAccount = account.slice(0, 4) + "..." + account.slice(account.length - 4);
            setFormattedAccount(formattedAccount)
            setCurrentAccount(account)
        }
    }, [isAuthenticated, enableWeb3])

    const connectWallet = () => {
        authenticate();
    }

    const signOut = () => {
        logout();
    }



    return(
        <RobinhoodContext.Provider value={{}}>{children}</RobinhoodContext.Provider>
    )
}
