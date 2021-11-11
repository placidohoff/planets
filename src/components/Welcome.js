import React, { useEffect, useState } from 'react'
import Navigation from './Navigation';
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, IconButton, Collapse } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import { Toolbar } from '@material-ui/core';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Container, Row, Col } from 'react-bootstrap';

const sample = {
    alignItems: 'center'
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        transition: 'transform 0.5s, opacity 0.5s',


        "&transition-appear": {
            opacity: 0,
            transform: 'translate3d(100%, 0, 0)'
        },

        "&transition-appear.transition-appear-active": {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
        },
        "&transition-leave": {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
        },

        "&transition-leave.transition-leave-active": {
            opacity: 0,
            transform: 'translate3d(100%, 0, 0)'
        },

    },
    appbar: {
        // background: 'none',
        color: 'red',
        backgroundColor: 'transparent',
        fontFamily: 'Nunito'
        // fontSize: '55px',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    appbarTitle: {
        flexGrow: '1'
    },
    appbarWrap: {
        width: '80%',
        margin: '0 auto'
    },
    welcome: {
        color: '#fff',
        fontFamily: 'Nunito',
        textAlign: 'center',
        fontSize: '2rem'
    },
    goDown: {
        color: '#fff',
        fontSize: '3rem'
    },
    list: {
        color: '#fff'
    },
    menu: {
        marginTop: '5px',
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menuItem: {
        padding: '20px 40px 20px 40px',
        "&:hover": {
            cursor: 'pointer',
            backgroundColor: 'purple',
            // transform: "scale(1.05)",
            // marginBottom: '20px'
        }
    }
})

export default function Welcome() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false)
    const [isShowMenu, setIsShowMenu] = useState(false)
    useEffect(() => {
        setChecked(true)
    }, [])
    return (
        <div
            // className=
            className={`${classes.root} transition-item animation col`}
            id='header'
        >
            {/* <AppBar className={classes.appbar} elevation={0} style={{ backgroundColor: 'transparent' }}>
                <Toolbar className={classes.appbarWrap}>
                    <h1 className={classes.appbarTitle}>The Cosmos</h1>
                    <IconButton onClick={e => setIsShowMenu(!isShowMenu)}>
                        <SortIcon

                            className={classes.icon}
                        />
                    </IconButton>

                </Toolbar>
                <Collapse in={isShowMenu} {... (true ? { timeout: 1000 } : {})}>
                    <div>
                        <ul className={classes.menu}>
                            <li className={classes.menuItem}>Test</li>
                            <li className={classes.menuItem}>Test</li>
                            <li className={classes.menuItem}>Test</li>
                            <li className={classes.menuItem}>Test</li>
                        </ul>
                    </div>

                </Collapse>
            </AppBar> */}

            {/* <Navigation /> */}

            <Collapse in={checked} {... (true ? { timeout: 1000 } : {})}>
                <div className={classes.welcome}>
                    <h1>
                        Welcome to <br /> Outter Space
                    </h1>
                    <IconButton>
                        <KeyboardArrowDownIcon className={classes.goDown} />
                    </IconButton>
                </div>
            </Collapse>
        </div>

    )
}
