import React, { useState } from 'react'
import { AppBar, IconButton, Collapse } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import { makeStyles } from '@material-ui/core/styles'
import { Toolbar } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap'

const useStyles = makeStyles({
    root: {
        // marginBottom: '100px'
    },
    appbar: {
        // background: 'none',
        color: 'red',
        backgroundColor: 'transparent',
        fontFamily: 'Nunito',
        // marginBottom: '50px',
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
        margin: '0 auto',
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
        // marginTop: '5px',
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'purple',
        textAlign: 'justify'
    },
    menuItem: {
        marginLeft: '-10px',
        "&:hover": {
            cursor: 'pointer',
            backgroundColor: 'green',
            // transform: "scale(1.05)",
            // marginBottom: '20px'
        }
    }
})

function Navigation() {
    const [checked, setChecked] = useState(false)
    const [isShowMenu, setIsShowMenu] = useState(false)
    const classes = useStyles()

    return (
        <div className={`col ${classes.root}`}>
            <AppBar className={`${classes.appbar} col mb-4`} style={{ backgroundColor: 'transparent' }}>
                <Toolbar className={classes.appbarWrap}>
                    <h1 className={classes.appbarTitle}>The Cosmos</h1>
                    <IconButton onClick={e => setIsShowMenu(!isShowMenu)}>
                        <SortIcon

                            className={classes.icon}
                        />
                    </IconButton>

                </Toolbar>
                <Collapse in={isShowMenu} {... (true ? { timeout: 500 } : {})}>
                    <div>
                        <ul className={`${classes.menu} row d-flex justify-content-around`}>
                            <li className={`${classes.menuItem} col p-4 justify-content-end ml-auto`}><div className="ml-4">Test</div></li>
                            <li className={`${classes.menuItem} col p-4`}><div className="ml-4">Test</div></li>
                            <li className={`${classes.menuItem} col p-4`}><div className="ml-4">Test</div></li>
                            <li className={`${classes.menuItem} col p-4`}><div className="ml-4">Test</div></li>
                        </ul>
                    </div>

                </Collapse>
            </AppBar>
        </div>

    )
}

export default Navigation