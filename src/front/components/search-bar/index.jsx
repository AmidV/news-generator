import { useState } from 'react';
import styles from "./styles.module.css";

// This Search Bar allows a user to request some news with particular word(-s) in title and description.

 const SearchBar = ({ newRequest }) => {
    const [newSearch, setNewSearch] = useState("");

// This search handler is setting and sending (line 6) a requested words(-s) up to the DOM tree to the custom hook alocated in the App component. Also, it reset a search bar after a click event of a button (line 33) or Enter key (line 23).
    const startSearchHandler = () => {
        newRequest(newSearch);
        setNewSearch("");
    }

    return (
        <div className={styles.searchBar}>
            <input
                type="search"
                placeholder="Search for news"
                className={styles.searchBarInput}
                value={newSearch}
                onChange={(e) => setNewSearch(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === "Enter") {
                        startSearchHandler()
                    }
                }}
            />

            <button
                className={styles.newSearchButton}
                aria-label="Add Button"
                onClick={startSearchHandler}
            />
        </div>
    )
}

export default SearchBar;