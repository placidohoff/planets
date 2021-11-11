
// import logo from './logo.svg';
import React from 'react'

//Components:
import Navigation from './Navigation';
import Welcome from './Welcome';
import Planets from './Planets';
import PlanetInfo from './PlanetInfo'
import Test from './Test.js';

//Other Dependencies:
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { PLANETS } from '../data/planets';
import bg from '../assets/background.jpg'
import '../App.css'

const planets = PLANETS;

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${bg})`,
        // backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // background: 'none'
        // backgroundImage: `url(http://localhost:3000/assets/background.jpg)`,
    }
    // }
}))

function Home() {
    return (
        <div className="container">
            <div className="row">
                <Navigation />
            </div>
            <div className="row">
                <Welcome />
            </div>
            <div className="row">
                <SolarSystem />
            </div>

        </div>
    )
}

function SolarSystem() {

    return (
        <div className="container">
            <div className="row mb-5">
                <Navigation />

            </div>
            <div className="row d-flex align-items-center">
                <Planets planets={planets} />

            </div>

        </div>
    )
}

function PlanetDetails({ match }) {
    const planet = planets.filter(p => (
        p.id === +match.params.planetId

    ))
    if (planet) {
        return (
            <div className="container">
                <div className="row">
                    <Navigation />
                </div>
                <div style={{ height: '120vh', }} className="row d-flex align-items-center">
                    <PlanetInfo
                        planet={planet[0]}
                    />
                </div>
            </div>
        )
    }
    else {
        return <div />
    }
}

export default function Main() {
    const classes = useStyles();
    return (
        <Router>
            <div className={classes.root}>
                <Route render={({ location }) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            timeout={200}
                            classNames="fade"
                        >
                            <Switch location={location}>
                                <Route path="/test">

                                    <Test />

                                </Route>

                                <Route path="/solarsystem">
                                    {SolarSystem}
                                </Route>

                                <Route path="/planets/:planetId">
                                    {PlanetDetails}
                                </Route>

                                <Route path="/">
                                    {Home}
                                </Route>


                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )} />
            </div>
        </Router>
    )
}

