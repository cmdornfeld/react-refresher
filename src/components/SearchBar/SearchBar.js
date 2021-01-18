import React from "react";
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
    renderSortOptionsBy(){
        return Object.keys(sortByOptions).map(sortByOpiton => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOpiton}</li>
        });
    }

    render(){
        return
    }
}