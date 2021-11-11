import React from 'react'
import galaxy from '../assets/galaxy.jpg'
import { useHistory } from 'react-router'
import { makeStyles } from '@material-ui/core';
import Navigation from './Navigation';

const useStyles = makeStyles({
    root:{
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
    }
})

export default function Test() {
    const history = useHistory();
    const classes = useStyles()

    return (
        <div className={`${classes.root} transition-item`}>
            {/* <Navigation /> */}
            {/* <br /> */}
            <img src={galaxy} onClick={e => history.push('/')} />
        </div>
    )
}
