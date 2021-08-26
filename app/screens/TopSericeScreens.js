import React from 'react'
import { StyleSheet,View,FlatList} from 'react-native'


import {SAMPLE_DATA_TV} from '../data/sampleSericeData'
import TvItem from '../components/lists/Item'

const TopSericeScreens = () => {
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor = {(item)=> item.id}
                data = {SAMPLE_DATA_TV.items}
                renderItem={({item}) => (<TvItem
                    id={item.id}
                    title={item.title}
                    crew={item.crew}
                    rate={item.imDbRating}
                    year={item.year}
                    image={item.image}/>              
                )}
            />
        </View>
    )
}

export default TopSericeScreens

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        paddingTop:5        
     },
})
