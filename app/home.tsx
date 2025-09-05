import { Text } from "react-native-paper"
import { useAuth } from "../context/Auth"
import { View } from "react-native"
import { styles } from "../styles/basic"
import { Link } from "expo-router"
import { useEffect, useState } from "react"
import * as SecureStore from 'expo-secure-store'

export default function Home(){
    const {user} = useAuth()
    const [token, setToken] = useState('')

    useEffect(()=>{
        try {
            const token = SecureStore.getItem('token')
            if(token) setToken(token)            
        } catch (error) {
            setToken('SecureStore não disponível')
        }
    }, [])
    
    return(
        <View style={styles.container}>
            <Text>Bem-vindo, {user.email}</Text>
            <Text>Token: {token}</Text>
            <Link href='/profile/configuration'>Perfil</Link>
        </View>
    )
}