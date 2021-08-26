import React,{useEffect,useState,useRef} from 'react'
import { StyleSheet, Text, View,ActivityIndicator,ScrollView} from 'react-native'
import YoutubePlayer from "react-native-youtube-iframe";

import {getTrailer} from '../api/getTrailer'

const DetailsScreen = ({route}) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const playerRef = useRef();

    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true)
            const details = await getTrailer(route.params.program.id)
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
            <View style={styles.video}>
                <YoutubePlayer
                    ref={playerRef}
                    height={250}
                    width={400}
                    videoId={data.videoId}
                />
            </View>
            <ScrollView style={styles.textWraper}>
                {route.params.program.parent == "regular" ?
                <>
                    <Text style={styles.title}>{route.params.program.title}</Text>
                    <View style={styles.topline}>
                        <Text style={styles.year}>{route.params.program.year}</Text>
                        <Text style={styles.rate}>{route.params.program.rate}</Text>
                    </View>
                    <View style={styles.lowerline}>
                        <Text style={styles.crew}>Crew : {route.params.program.crew}</Text>
                    </View>
                </>
                :
                <>
                    <Text style={styles.title}>{route.params.program.title}</Text>
                    <View style={styles.topline}>
                        <Text style={styles.year}>Weeks : {route.params.program.weeks}</Text>
                        <Text style={styles.rate}>{route.params.program.weekend}</Text>
                        <Text style={styles.crew}>{route.params.program.gross}</Text>
                    </View>
                </>
                }
            </ScrollView>
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
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
    textWraper:{
        paddingHorizontal:10
    },

    topline :{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#1d1d1d',
        borderRadius:5,
        marginBottom:5,
        padding: 10
    },
    lowerline:{
        alignItems:'flex-start',
        backgroundColor:'#1d1d1d',
        borderRadius:5,
        marginBottom:5,
        padding: 10,
        flex:1,
    },

    title:{
        color:'#808080',
        fontSize:17,
        marginBottom:5
    },
    year:{
        color:'#808080'

    },
    crew:{
        color:'#808080'

    },
    rate:{
        color:'#1ebea5'
    },
    video: {
        alignItems:'center',
        borderRadius:5,
        backgroundColor: '#121212',
    }
})
