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
        // border: '2px solid white',
        minHeight: '100vh',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        transition: 'transform 0.5s, opacity 0.5s',


    },


})





export default function Planets({ planets }) {
    const classes = useStyles()
    // const isToAnimate = useWindowPosition('header');

    // const isToAnimate = true
    const isToAnimate = useWindowPosition('header');

    const history = useHistory();

    const showPlanets = planets.map(planet => {
        return (
            <div className="col align-self-center ">
                <CosmicCard
                    img={planet.image}
                    name={planet.name}
                    checked={isToAnimate}
                    route='/test'
                    id={planet.id}
                />
            </div>
        )
    })

    return (
        <div className={`${classes.root} container`}>
            <div
                className="row d-flex align-items-center justify-content-center"
            >
                {showPlanets}

            </div>

        </div>

    )
}
