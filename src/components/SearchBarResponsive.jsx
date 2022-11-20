import { SearchRounded } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useState } from "react"

import './css/index.css'

const SearchBarResponsive = () => {

    const [searchBarOpenup, setSearchBarOpenup] = useState(false);

    const openSearchbar = () => {
        if (searchBarOpenup === false){
            setSearchBarOpenup(true)
        }else{
            setSearchBarOpenup(false)
        }
    }

  return (
    <div
        onSubmit={() => {}}
    >
        {searchBarOpenup === true ? 
        
        <input placeholder="Search..." className="Search_Bar_Responsive" 
            // value='' 
        onChange={ () => {} } />
         : 
        ''}
        
        <IconButton type="submit" className="search-bar-submit-btn-responsive" onClick={openSearchbar}>
            <SearchRounded />
        </IconButton>
    </div>
  )
}

export default SearchBarResponsive