import algoliasearch from 'algoliasearch/lite';
import React,{Component} from 'react';
import {connectSearchBox,Hits,InstantSearch} from 'react-instantsearch-dom';
import Autocomplete from './autocomplete';

const VirtualSearchBox = connectSearchBox(() => null);

const searchClient = algoliasearch(
  'AQDO18OGM9',
  'cac2170e37f189e7c48fc966311be8b5'
);

const nonDisplayerStyle = {
    display: 'none'
}

class Search extends Component {
    state = {
        query: '',
    };

    onSuggestionSelected = (_, { suggestion }) => {
        this.setState({
            query: suggestion.value
        });
    };

    onSuggestionCleared = () => {
        this.setState({
            query: '',
        });
    };


    render () {
        const { query } = this.state;
        
        return (
            <div>
             <InstantSearch indexName="wineries" searchClient={searchClient}>
                <Autocomplete
                    onSuggestionSelected={this.onSuggestionSelected}
                    onSuggestionCleared={this.onSuggestionCleared}
                />
             </InstantSearch>

             <InstantSearch indexName="wineries" searchClient={searchClient} 
            root={{
                Root: 'div',
                props: {
                    style: {
                        display: 'none',
                    },
                },
            }}>
                <VirtualSearchBox defaultRefinement={query} />
                <Hits />
             </InstantSearch>
            </div>
        );
    }
}  

export default Search;