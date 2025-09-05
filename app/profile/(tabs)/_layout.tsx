import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from 'expo-router'

export default function Layout() {
    return (
        <Tabs screenOptions={{tabBarActiveTintColor: 'blue'}}>
            <Tabs.Screen 
                name='index'
                options={{
                    title: 'Início',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name='home' color={color} />
                }}
            />
            <Tabs.Screen
                name='properties'
                options={{
                    title: 'Imóveis',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name='cog' color={color} />
                }} 
            />
            <Tabs.Screen
                name='about'
                options={{
                    title: 'Sobre',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name='cog' color={color} />
                }} 
            />
            <Tabs.Screen
                name='contact'
                options={{
                    title: 'Contato',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name='phone' color={color} />
                }}
            />
        </Tabs>
    )
}