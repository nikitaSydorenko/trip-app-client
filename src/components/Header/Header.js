import React from 'react';
import '../../styles/Header.css'
import line from '../../assets/Line.png'

const Header = ({ title }) => {
    return (
        <div className='header'>
            <h2>{ title }</h2>
            <img src={line}/>
        </div>
    )
}

export default Header;