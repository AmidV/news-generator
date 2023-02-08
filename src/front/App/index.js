import { useEffect, useState } from "react";
import './App.css';
// I used axios to fetch some data.
import axios from "axios";

import Navbar from '../components/navbar';
import NewsList from '../components/news-list';
import useFetchNews from "../../back/hooks/useFetchNews";

const App = () => {
  const [ gnews, setGnews ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const KEY_API = "39b87d7485c7b0b411c9c074498e8e0b";
  const MAIN_URL = `https://gnews.io/api/v4/top-headlines?apikey=${KEY_API}&category=general&lang=en&country=us&max=10`;

  // This is a custom hook for a news search request. Called and ready to be used.
  const { newNewsSearch }  = useFetchNews( setGnews, setIsLoading, setError, KEY_API );
  
  // This function is for passing a new news search request to a custom hook. 
  const newsSearch = (newSearch) => {
    newNewsSearch(newSearch);
  }

  // This data fetching request is getting a list of 10 latest news from a server and set an arrey of data on line 30 ( => 11).
  useEffect(() => {
    const fetchedData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(MAIN_URL);
        const news = response.data.articles;
        if(news) setGnews(news);
      } catch( err ) {
        setError(err);
      }
      setIsLoading(false);
    }
    fetchedData();
  }, [MAIN_URL])


  return (
    <div>

      <Navbar newNewsSearch={newsSearch} />
    
      <div className="App">
        <div className="board">
          <div className="newsList">

            <NewsList 
              fetchedNews={gnews} 
              isLoading={isLoading} 
              error={error} 
            />

          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
