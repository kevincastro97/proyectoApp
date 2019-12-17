import React from 'react';
import {
    createAppContainer,
} from 'react-navigation';
import {
    createStackNavigator
} from 'react-navigation-stack';

import Lista from './../containers/lista-container';
import Crear from './../containers/crear-container';
import Editar from './../containers/editar-container';

const stackNavigator = createStackNavigator({
    lista: {
        screen: Lista,
    },
    crear: {
        screen: Crear,
    },
    editar: {
        screen: Editar,
    },
}, {
    defaultNavigationOptions: {
        headerTitle: 'Perfil Lupita',
        headerStyle: {
            backgroundColor: 'blue',
        },
        headerTintColor: '#ffffff',
    },
});

export default createAppContainer(stackNavigator);