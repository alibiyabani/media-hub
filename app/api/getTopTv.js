import axios from 'axios'


export const getTopTv = async () => {

    url = "https://imdb-api.com/en/API"
    key = "k_3hgvxhy7"

    try {

        const response =  await axios.get(`${url}/Top250TVs/${key}`);
        return response.data
    }
    catch(e)
    {
        console.log(e)
    }
    
}