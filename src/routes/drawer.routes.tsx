import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

import TabRoutes from "./tab.routes";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name="Notificações" 
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="bell" color={color} size={size}/>, // Ícone de notificações (bell)
                    drawerLabel: "Notificações" // Rótulo no Drawer
                }}
            />
        </Drawer.Navigator>
    );
}
