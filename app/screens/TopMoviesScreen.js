import React,{useState} from 'react'
import { StyleSheet,View,FlatList} from 'react-native'
// import { Searchbar } from 'react-native-paper';



import {SAMPLE_DATA} from '../data/sampleData'
import MovieItem from '../components/lists/Item'


const TopMoviesScreen = () => {
    // const [searchQuery, setSearchQuery] = useState('');

    // const onChangeSearch = query => setSearchQuery(query);



    return (
        <View style={styles.container}>
            {/* <Searchbar styles placeholder="Search" onChangeText={onChangeSearch} value={searchQuery}/> */}
            <FlatList
                keyExtractor = {(item)=> item.id}
                data = {SAMPLE_DATA.items}
                renderItem={({item}) => (<MovieItem
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

export default TopMoviesScreen

const styles = StyleSheet.create({
    container: {
         backgroundColor: '#121212',
         paddingTop:5
      },
})
