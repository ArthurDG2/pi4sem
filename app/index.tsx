import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useAuth } from "../context/Auth";
import { styles } from "../styles/basic";

export default function Login() {

    const { user, handleLogin, setUser } = useAuth()

    return (
        <View style={styles.container}>
            <Button mode="contained" style={styles.mt20} onPress={handleLogin}>
                Entrar
            </Button>
        </View>
    )
}