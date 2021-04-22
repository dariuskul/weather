import React from 'react'
import {LOGO} from '../../imageUrls'
import './header.scss'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

     const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
     };

    const handleClose = () => {
     setAnchorEl(null);
     };

    return(
        <header>
            <div className="header__wrapper">
                <div className="representation">
                    <img src={LOGO} alt="logo"/>
                    <h1>Weather<span>ON</span></h1>
                </div>

                <div className="mobile__menu">
                <MenuRoundedIcon aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} style={{fontSize: '3em', color: 'white'}}/>
                <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                <MenuItem onClick={handleClose}>Statistics</MenuItem>
                <MenuItem onClick={handleClose}>Map</MenuItem>
                </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header;