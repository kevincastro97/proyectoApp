import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    Image,
    TextInput
} from 'react-native';

import { Mapa } from './../containers/buttonMapContainer';

const Header = (props)=> {

    const { navigateToSettings } = props;

    return(

        <SafeAreaView>

            <View style = {styles.container}>
                
                <View style = {styles.fondColor}>

                    <View style = {styles.directionColumn}>

                        <View style = {styles.directionRow}>

                            <View style = {styles.nameContainer}>

                            <View style = {styles.fondImage}>
                                <Image
                                    source={require('./../../../assets/login/icon.png')}
                                    style = {styles.image}
                                />

                            </View>

                            <Text style = {styles.name}>
                                Kevin Castro
                            </Text>

                            </View>

                            <View>
                                <TouchableOpacity
                                    onPress = {navigateToSettings}
                                >
                                    <Image
                                        source = {require('./../../../assets/menu/Options.png')}
                                        style = {styles.iconButton}
                                    />
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style = {styles.textImput}>

                            <TextInput
                                style = {styles.letterImput}
                                placeholder = '¿Dónde quieres ir?'
                            />

                            <TouchableOpacity
                                style = {styles.fondIcon}
                            >
                                <Image
                                    source = {require('./../../../assets/header/lookFor.png')}
                                    style = {styles.icon}
                                />
                            </TouchableOpacity>
                        
                        </View>

                    </View>

                </View>
            </View>

        </SafeAreaView>
       
    );
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        resizeMode: 'contain'
    },

    fondColor: {
        backgroundColor: '#193555',
        width: '100%',
        height: 160,
        borderRadius: 30,
        flexDirection: 'column',
        justifyContent: 'space-between',
        resizeMode: 'contain',
        marginTop: -30
    },

    fondImage: {
        borderColor: '#FFF',
        borderWidth: 2,
        borderRadius: 35,
        resizeMode: 'cover'
    },

    image: {
        width: 55,
        height: 55,
    },

    directionColumn: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        resizeMode: 'cover',
        width: '100%',
        alignItems: 'center',
        padding: 10,
        marginTop: 20
    },

    directionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        resizeMode: 'cover',
        width: '100%',
        alignItems: 'center',
        padding: 10,
    },

    nameContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        resizeMode: 'cover',
        width: '80%',
        alignItems: 'center'
    },

    name:{
        marginHorizontal: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },

    icon:{
        width: 20,
        height: 20,
        marginHorizontal: 10
    },

    iconButton:{
        width: 25,
        height: 25,
    },

    textImput:{
        backgroundColor: 'white',
        height: 40,
        width:  '90%',
        borderRadius: 50,
        paddingLeft: 8,
        borderColor: '#000',
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 2
    },

    letterImput:{
        fontSize: 16,
        padding: 8,
    },

    fondIcon: {
        backgroundColor: '#1c5dc4',
        width: 30,
        height: 30,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center', 
        resizeMode: 'cover',
        marginHorizontal: 5
    }
})

export default Header;
