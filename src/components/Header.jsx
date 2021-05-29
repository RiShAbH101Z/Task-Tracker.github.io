import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {
    const [flag, setFlag] = useState(true);
    const location = useLocation();
    const titleClick = (e) => {
        if(flag)
           { e.target.className = 'rainbow'; setFlag(false);}
        else
           { e.target.className = ''; setFlag(true);}
    }
    return (
        <header className='header'>
            <h1 onClick={titleClick}>{title}</h1>
            {location.pathname === '/' && <Button  onAdd={onAdd} text={showAdd ? 'Close' : 'Add' } color={showAdd ? 'red' : 'green' }/>}
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker'
}
Header.propTypes = {
    title : PropTypes.string.isRequired,
    onAdd: PropTypes.func,
    showAdd: PropTypes.bool
}
export default Header
