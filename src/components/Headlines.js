import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CosmicCard from './CosmicCard';
import mercury from '../assets/mercury.jpg'
import jupiter from '../assets/jupiter.jpg'
import earth from '../assets/earth.jpg'
import venus from '../assets/venus.jpg'

import { Container, Row, Col } from 'react-bootstrap'
import useWindowPosition from '../hooks/useWindowPosition';
import { useHistory, Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        minHeight: '100vh',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
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
    row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    col: {
        // margin: '5px'
    }
})



export default function Headlines() {
    const classes = useStyles()
    const isToAnimate = useWindowPosition('header');


    return (
        <Container className={`${classes.root} transition-item col`}>
            <Row className={classes.row}>
                <Col xs={6} md={4} className={classes.col}>
                    <CosmicCard
                        img={mercury}
                        name='Mercury'
                        checked={isToAnimate}
                        route='/test'
                    />
                </Col>
                <Col xs={6} md={4} >
                    <CosmicCard
                        img={jupiter}
                        name='Jupiter'
                        checked={isToAnimate}
                        route='/test'
                    />
                </Col>
                <Col xs={6} md={4} >
                    <CosmicCard
                        img={venus}
                        name='Venus'
                        checked={isToAnimate}
                    />
                </Col>
                <Link to='/test'>
                    <Col xs={6} md={4} >
                        <CosmicCard
                            img={earth}
                            name='Earth'
                            checked={isToAnimate}
                        />
                    </Col>
                </Link>
            </Row>
        </Container>
    )
}
