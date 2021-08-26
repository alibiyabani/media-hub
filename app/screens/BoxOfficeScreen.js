import React,{useEffect,useState} from 'react'
import { StyleSheet, FlatList, View ,ActivityIndicator} from 'react-native'

import {SAMPLE_DATA_BOX} from '../data/sampleDataBoxOffice'
import BoxItem from '../components/lists/BoxOfficeItem'

import {getBoxOffice} from '../api/getBoxOffice'
 
const BoxOfficeScreen = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true)
            const details = await getBoxOffice()
            setData(details)
            setLoading(false)  
            
        }
         fetchData();
    },[])

    if(loading) {
        return <View style={styles.activityIndicator}><ActivityIndicator size={'large'} animating={true} color={'#808080'} /></View>
    }
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor = {(item)=> item.id}
                data = {data.items}
                renderItem={({item}) => (<BoxItem
                    id={item.id}
                    title={item.title}
                    weekend={item.weekend}
                    gross={item.gross}
                    weeks={item.weeks}
                    image={item.image}/>              
                )}
            />
        </View>
    )
}

export default BoxOfficeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        paddingTop:5
     },
     activityIndicator :
     {
         flex:1,
         alignItems:'center',
         justifyContent:'center',
         backgroundColor: '#121212',
     },
})
