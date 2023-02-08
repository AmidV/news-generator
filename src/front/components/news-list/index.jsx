import React from 'react';
import styles from "./styles.module.css";

// This is a News List component that is mapping (line 8) a fetched news data to individual cards. In case requested news exist it will be shown (line 35) in a browser eather sugest to repeat search request.

const NewsList = ({ fetchedNews, isLoading, error }) => {

  const cards = fetchedNews.map(( news, index ) => {
// There are two active links for switch to arcticle's webs (line 15) and a full article (line 21).
    return(
        <div key={index} className={styles.listBoardCard}>
            <div className={styles.listBoardCardLeft}>
                <img className={styles.listBoardCardImage} src={news.image} alt="News"/>
                <p><a className={styles.listBoardCardImageAuthor}
                href={news.source.url} target="_blank" rel="noreferrer">By <strong>{news.source.name}</strong></a></p>
            </div>

            <div className={styles.listBoardCardRight}>
                <h2 className={styles.listBoardCardTitle}>{news.title}</h2>  
                <p className={styles.listBoardCardDescription}>{news.description}</p>
                <p><a className={styles.listBoardCardArticleLink} href={news.url} target="_blank" rel="noreferrer"><strong>Read more...</strong></a></p>
            </div>
        </div>
    )
  })

  return (
    <div className={styles.listBoard}>
        <h1 className={styles.topTitle}>LATEST NEWS</h1>

        {isLoading && <h2 className={styles.topTitle}>Loading...</h2>}

        {error && <h2 className={styles.topTitle}>Error: $error</h2>}

        {fetchedNews.length !== 0 ? cards : <h3 className={styles.topTitle}>Sorry, no news.</h3>}
    </div>
    
    )
}

export default NewsList;