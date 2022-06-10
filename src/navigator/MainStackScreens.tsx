import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ColorPalette, Home } from "../screens";
const MainStack = createStackNavigator();

const MainStackScreens = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={Home} />
            <MainStack.Screen
                name="ColorPalette"
                component={ColorPalette}
                options={({ route }) => ({
                    title: (route.params as { paletteName: string; colors: any[] })
                        .paletteName,
                })}
            />
        </MainStack.Navigator>
    );
};

export default MainStackScreens