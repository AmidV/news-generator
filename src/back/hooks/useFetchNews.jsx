
import axios from "axios";

// This custom hook is fetching news by search request only. So it not affecting the rendering speed of the code.

const useFetchNews = ( setGnews, setIsLoading, setError, KEY_API ) => {

    const newNewsSearch = async (newSearch) => {
        setIsLoading(true);
        try {
            const response = await axios.get(`https://gnews.io/api/v4/search?q=${newSearch}&apikey=${KEY_API}&lang=en`);
            console.log(response)
            const reqNews = response.data.articles;
            setIsLoading(false);
            if(reqNews) return setGnews(reqNews);
        } catch( err ) {
            setError(err);
        }
        ;
    }
        
    return { newNewsSearch };
    
}

export default useFetchNews;