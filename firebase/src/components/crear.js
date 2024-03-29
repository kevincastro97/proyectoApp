import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const Crear = (props) => {
    
    const {
        title,
        miEventoCambiarTitulo,
        url,
        miEventoCambiarURL,
        miEventoPressGuardar,
        estadoEnGuardado,
    } = props
    return (
        <View style = {styles.container}>
            <View>
                <Text>Título</Text>
                <TextInput
                    value={title}
                    onChangeText={miEventoCambiarTitulo}
                    editable={ estadoEnGuardado === 'cargando' ? false : true }
                    style = {styles.title}
                />
            </View>

            <View style = {styles.div}/>

            <View>
                <Text>URL de Imagen</Text>
                <TextInput
                    value={url}
                    onChangeText={miEventoCambiarURL}
                    editable={ estadoEnGuardado === 'cargando' ? false : true }
                    style = {styles.title}
                />
            </View>
            <View>
                <TouchableOpacity
                    onPress={miEventoPressGuardar}
                    disabled={ estadoEnGuardado === 'cargando' ? true : false }
                    style = {styles.button}
                >
                    <Text 
                        style = {styles.text}
                    >
                        Guardar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10
    },
    title: {
        borderColor: '#000000',
        borderWidth: 0.5,
        padding: 5,
        borderRadius: 30,
        height: 30,
        marginHorizontal: 5
    },
    button:{
        borderWidth: 0.5,
        padding: 5,
        borderRadius: 30,
        height: 30,
        marginHorizontal: 5,
        marginTop: 20,
        backgroundColor: 'blue',
        alignItems: 'center'
    },

    text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
    div:{
        height: 20
    }
})

export default Crear;