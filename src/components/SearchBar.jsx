import { SearchRounded } from "@mui/icons-material"
import { IconButton, Paper } from "@mui/material"

import './css/index.css'

const SearchBar = () => {
  return (
    <div
        onSubmit={() => {}}
    >
        <input 
            placeholder="Search..."
            className="Search_Bar"
            // value=''
            onChange={ () => {} }
        />
        <IconButton type="submit" className="search-bar-submit-btn">
            <SearchRounded />
        </IconButton>
    </div>
  )
}

export default SearchBar