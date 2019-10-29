import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React,{Component} from 'react';

class SearchBar extends Component {
    render() {
        return(
        <div class="form-group has-search">
            <span class="form-control-feedback"><FontAwesomeIcon icon={faSearch}  /></span>
            <input type="text" class="form-control" placeholder="Search" />
        </div>
        )
    }
}

export default SearchBar;

