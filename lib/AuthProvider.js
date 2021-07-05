import { User } from 'firebase'
import { FC, createContext, useEffect, useState } from 'react'
import { auth } from 'db'

AuthContextProps = {
    currentUser
}

const AuthContext = createContext({ currentUser: undefined })

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(undefined)

    //authのonAuthStateChangedメソッドでuserの情報を取得しローカルステートのcurrentUserに格納。
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user)
        })
    }, [])
    return (
        <AuthContext.Provider value={{ currentUser }}>{ children }</AuthContext.Provider>//context.providerで値を渡す
    )
}

export { AuthContext,AuthProvider }