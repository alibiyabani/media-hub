import axios from 'axios'


export const getTopMovies = async () => {

    url = "https://imdb-api.com/en/API"
    key = "k_3hgvxhy7"

    try {

        const response =  await axios.get(`${url}/Top250Movies/${key}`);
        return response.data
    }
    catch(e)
    {
        console.log(e)
    }
    
}