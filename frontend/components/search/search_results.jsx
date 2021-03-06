import React from 'react';
import { Link } from 'react-router-dom';
import SneakerIndexItem from '../sneaker/sneaker_index_item';

const SearchResults = ({ sneakers, search, searchResults }) => {
  if (sneakers.length) {
    return (
      <div>
        <p className="search-results-header">
          Showing Results 1-{`${sneakers.length}`} of {`${searchResults}`}
        </p>
        <div className="sneaker-index-container">
          <ul className="sneaker-items-container">
            {
              Object.values(sneakers).map((sneaker, idx) => {
                return (
                  <Link to={`/sneakers/${sneaker.id}`} key={idx} >
                    <SneakerIndexItem sneaker={sneaker} key={idx} />
                  </Link>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  } else if (!sneakers.length && search.length) {
    return (
      <p className="search-results-header">Showing 0 Results</p>
    )
  } else {
    return (
      <div></div>
    )
  }
};

export default SearchResults;