import React from 'react';

import {
    View,
    FlatList,
    TouchableOpacity,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    ScrollView
} from 'react-native';

import SearchForContainer from './../containers/searchForContainer';
import ContentSplitter from './../utilities/components/contentSplitter';
import TextDivider from './../utilities/components/textDivider';
import SeparatorList from './../utilities/components/separatorList';
import SeparatorLine from './../utilities/components/separatorLine';

const OrdinaryBusOptionsList = (props) => {

    const { data, navigateToOrdinaryDetail } = props;

    return(
        <SafeAreaView  style = {styles.fondo}>

            <View >

                <ScrollView>

                    <FlatList 

                        ListHeaderComponent={
                            <SearchForContainer/>
                        }
                        
                        data = { data }
                        ListEmptyComponent = {() => <Text>Componente de texto</Text>}
                        renderItem = {
                            ({item}) => <Element item = {item}  onPress = {navigateToOrdinaryDetail}/>
                        }
                        ItemSeparatorComponent = {() => <SeparatorList/>}
                    />

                </ScrollView>

            </View>

        </SafeAreaView>
    );

}

const Element = (props) => {

    const { item , onPress} = props;

    return(
        <TouchableOpacity
            onPress = {onPress}
        >

            <View style = {styles.container}>

                <View style = {styles.containerAddress}>

                    <Image
                        source = {item.image}
                        style = {styles.images}
                    />

                    <View style = {styles.containerText}>

                        <Text style = {styles.title}>
                            {item.title}
                        </Text>

                        <Text style = {styles.line}>
                            {item.line}
                        </Text>

                    </View>

                </View>

                <ContentSplitter/>

                <View style = {styles.containerAddress}>

                    <Text style = {styles.staticText}>
                        Precio: 
                    </Text>

                    <Text style = {styles.textDetail}>
                        {item.price}
                    </Text>
                    
                </View>

                <TextDivider/>

                <View style = {styles.containerAddress}>

                    <Text style = {styles.staticText}>
                        Pasajeros: 
                    </Text>

                    <Text style = {styles.textDetail}>
                        {item.passengers}
                    </Text>
                    
                </View>

                <SeparatorLine/>

                <Text style = {styles.schedule}>
                    Detalle de Horarios
                </Text>

                <View style = {styles.containerAddressRow}>

                    <View style = {styles.containerAddress}>

                        <Text style = {styles.staticText}>
                            Hora salida: 
                        </Text>

                        <Text style = {styles.textDetail}>
                            {item.departureTime}
                        </Text>

                    </View>

                    <TextDivider/>

                    <View style = {styles.containerAddress}>

                        <Text style = {styles.staticText}>
                            Hora llegada: 
                        </Text>

                        <Text style = {styles.textDetail}>
                            {item.arrivalTime}
                        </Text>

                    </View>

                </View>

                <Text>Detalles de horario y tiempo</Text>

            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    fondo: {
        backgroundColor: '#f4f6f9'
    },

    container:{
        flexDirection: 'column',
        borderRadius: 8,
        marginHorizontal: 5,
        color: 'blue',
        backgroundColor: '#FFFFFF',
        padding: 10
    },

    containerAddress:{
        flexDirection: 'row',
    },

    containerAddressRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },

    images:{
        width: 80,
        height: 80
    },

    containerText: {
        flexDirection: 'column',
        marginHorizontal: 10,
        justifyContent: 'center'
    },

    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },

    line:{
        fontSize: 15,
        color: 'black'
    },

    staticText:{
        fontSize: 14,
    },

    textDetail:{
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal: 5 
    },

    schedule:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 5
    },
})

export default OrdinaryBusOptionsList;