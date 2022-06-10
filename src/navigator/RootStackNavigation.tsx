import { createStackNavigator } from "@react-navigation/stack";
import { ColorPaletteModal } from "../screens";
import MainStackScreens from "./MainStackScreens";
import React from 'react'
const RootStack = createStackNavigator();

export const RootStackNavigation = () => {
    return (
        <RootStack.Navigator screenOptions={{
            presentation: "modal"
        }}>
            <RootStack.Screen name='Main' component={MainStackScreens} options={{
                headerShown: false
            }} />
            <RootStack.Screen name='ColorPaletteModal' component={ColorPaletteModal} />
        </RootStack.Navigator>
    )
};


export default RootStackNavigation