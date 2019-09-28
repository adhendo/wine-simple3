import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import algoliasearch from 'algoliasearch';
import React,{Component} from 'react';
import {InstantSearch} from 'react-instantsearch/dom';


const searchClient = algoliasearch(
    'AQDO18OGM9',
    'cac2170e37f189e7c48fc966311be8b5'
)


class Search extends Component {
    render() {
        return(
  
        <InstantSearch
            indexName="wineries"
            searchClient={searchClient}>
                <div class="form-group has-search">
                <span class="form-control-feedback"><FontAwesomeIcon icon={faSearch}  /></span>
                    <input type="text" class="form-control" placeholder="Search" />
                </div>
                
        </InstantSearch>  

        ); 
             
    }
}

export default Search;