import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import { Card } from 'react-bootstrap'

import { Collapse } from '@material-ui/core';

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
    card: {
        cursor: 'pointer',
        transition: "transform .2s ease-in-out;",
        "&:hover": {
            transform: "scale(1.05)",
            opacity: '0.9'
            // marginBottom: '20px'
        }
    }


})





export default function Planets(props) {
    const classes = useStyles()
    // const isToAnimate = useWindowPosition('header');

    // const isToAnimate = true
    const isToAnimate = useWindowPosition('header');

    const history = useHistory();



    const arrangePlanets = () => {
        let arr = []
        for (const planet in props.planets) {

            // arr.push({ [planet]: props.planets[planet] })
            arr.push(props.planets[planet])
            //TODO: Sort planets
        }

        return arr
    }





    let arrangedPlanets = arrangePlanets()

    const showPlanets = arrangedPlanets.map(planet => {
        return (
            <div className="col align-self-center ">
                {/* <CosmicCard
                    img={planet.image}
                    name={planet.name}
                    checked={isToAnimate}
                    id={planet.id}
                /> */}
                {/* {console.log(planet)} */}

            </div>
        )
    })

    function ShowPlanets() {
        return (
            arrangedPlanets.map(planet => {
                return (
                    <div className="col align-self-center ">

                        {/* TODO: ADD THE COLLAPSE IN EFFECT: */}
                        <Collapse in={isToAnimate} {... (true ? { timeout: 500 } : {})} >
                            <Card
                                className={classes.card}
                                onClick={e => history.push(`/${planet.data.englishName}`.toLocaleLowerCase())}
                            >
                                <Card.Img variant="top" src={`${planet.data.image}`} />
                                <Card.Body>
                                    <Card.Title>{planet.data.englishName}</Card.Title>
                                    <Card.Text>{planet.data.englishName}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Collapse>
                        {/* <Collapse in={isToAnimate} {... (true ? { timeout: 500 } : {})} >

                            <Card className={`${classes.root}`} onClick={e => history.push(`/planets/${props.name}`)}>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={`${planet.data.image}`}
                                    alt="mercury "
                                    className={classes.media}
                                />
                                <CardContent className={classes.cardBody}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {planet.data.englishName}
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Collapse> */}
                        {/* {console.log(planet, "WHAT IS IT...?")}
                        <PlanetCard planet={planet} /> */}

                    </div>
                )
            })
        )
    }

    function PlanetCard({ planet }) {
        // console.log(planet.data, "WHAT IS IT..?")
        return (
            <Card>
                <Card.Img variant="top" src={planet.image} />
                <Card.Body>
                    <Card.Title>{planet.name}</Card.Title>
                    <Card.Text>{planet.name}</Card.Text>
                </Card.Body>
            </Card>
        )
    }

    return (
        <div className={`${classes.root} container`}>
            <div
                className="row d-flex align-items-center justify-content-center"
            >
                <ShowPlanets />
                {/* {showPlanets} */}
                {/* {console.log(props)}*/}
                {console.log(arrangedPlanets)}
                {/* {console.log(Object.keys(arrangedPlanets[2]))} */}





            </div>

        </div>

    )
}
