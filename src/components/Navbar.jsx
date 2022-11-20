import { Link } from 'react-router-dom'

import { logo } from '../utils/Constants'
import SearchBar from "./SearchBar"

import Feed from './Feed'

import { fetchFromAPI } from '../utils/fetchfromapi'


import './css/index.css'
import { YoutubeLogo } from 'phosphor-react'
import Sidebar from './Sidebar'
import { useEffect, useState } from 'react'
import SearchBarResponsive from './SearchBarResponsive'

const Navbar = () => {
    return(

    <div className="Navbar">
        {/* <div className="navbar-left">
            <Sidebar
                selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
            />
        </div> */}
        <Link to='/' className='youtube-logo'>
            <YoutubeLogo 
                color="#fff"
                weight="fill"
                width={60}
                height={47}
                style={{marginTop:'3px'}}
            />
            <p className='youtube-logo-text'>YOUTUBE</p>
        </Link>
        <div className="search-bar">
            <SearchBar />
        </div>
        <div className="search-bar-responsive">
            <SearchBarResponsive />
        </div>
        </div>
    )
}

export default Navbar

// sx={{ position: 'sticky', background:'#111', top:'0', justifyContent:'space-between' }}