import React from 'react'
import { StyleSheet, Text, View ,Image, Dimensions,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const Item = ({title,crew,rate,year,image,id}) => {

    const navigation = useNavigation();
    const program = {
        parent:'regular',
        title : title,
        crew : crew,
        rate : rate,
        year:year,
        id : id
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate("detailsScreen",{program})}>
            <View style={styles.itemWraper}>
                <View style={styles.insideWraper}>
                    <Image style={styles.image} source={{uri:image}}/>
                    <View style={styles.textWraper}>
                        <Text numberOfLines={2} style={styles.title}>{title}</Text> 
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={[styles.subtitle,{opacity:.7}]}>{year}</Text> 
                            <Text style={[styles.subtitle,{color:'#1ebea5'}]}>{rate}</Text> 
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Item

const styles = StyleSheet.create({
    itemWraper : {
        backgroundColor:'#1d1d1d',
        padding:5,
        marginHorizontal:8,
        borderRadius:8,
        marginBottom:6,
    },
    insideWraper : {
        flexDirection:'row',
    },
    textWraper : {
        flexDirection:'column',
        marginHorizontal:8,
        marginVertical:2,
        flex:1,
        justifyContent:'space-between',
    },  
    image: {
        width:51.2,
        height:70.4,
        borderRadius:8,
        borderColor:'#808080',
        borderWidth:.3
        
    },
    title : {
        color:'#808080',
        width:windowWidth-120,
        fontSize:14,
        fontWeight:'500'

    },
    subtitle : {
        color:'#808080',       
    }

})
