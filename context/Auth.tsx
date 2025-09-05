import { router } from "expo-router"
import React, { useContext, useState } from "react"
import { createContext } from "react"
import { app } from "../firebase"
import { initializeAuth, signInWithEmailAndPassword } from "firebase/auth"
import * as SecureStore from 'expo-secure-store'

interface IUser {
    email: string
    password: string
    uid: string
}

interface IAuthContext {
    user: IUser
    setUser: (user: IUser) => void
    handleLogin: () => void
}

interface IAuthProviderProps {
    children: React.ReactNode
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: React.FC<IAuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<IUser>({email: "", password: "", uid: ""})

    function handleLogin() {
        if(!user || user.email === "" || user.password === ""){
          alert('E-mail ou senha inválidos') 
          return false;
        }

        const auth = initializeAuth(app)
        signInWithEmailAndPassword(auth,user.email,user.password)
        .then((response) => {
            setUser({...user, uid: response.user.uid})

            try {
                SecureStore.setItem('token',user.uid)
            } catch (error) {
                console.log('SecureStore indisponível')
            }  

            router.push('home')
        })
        .catch(()=>{
            alert('E-mail ou senha inválidos')
        })
    }

    return (
        <AuthContext.Provider value={{user, handleLogin, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}