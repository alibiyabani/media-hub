
import axios from 'axios'


export const getTrailer = async (id) => {

    url = "https://imdb-api.com/en/API"
    key = "k_3hgvxhy7"

    try {

        const response =  await axios.get(`${url}/YouTubeTrailer/${key}/${id}`);
        return response.data
    }
    catch(e)
    {
        console.log(e)
    }
    
}