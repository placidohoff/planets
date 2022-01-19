
// import logo from './logo.svg';
import React from 'react'

//Components:
import Navigation from './Navigation';
import Welcome from './Welcome';
import Planets from './Planets';
import PlanetInfo from './PlanetInfo'
import Test from './Test.js';

//Other Dependencies:
import { Switch, Route, withRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { PLANETS } from '../data/planets';
import { PLANETSLIST } from '../data/planetslist';
import '../App.css'

//Redux:
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        planets: state
    }
}




// const planets = PLANETS;
const planetsList = PLANETSLIST









class Main extends React.Component {
    constructor(props) {
        super(props)

        // 
        this.getPlanets = this.getPlanets.bind(this)
        this.getImage = this.getImage.bind(this)
        this.arrangePlanets = this.arrangePlanets.bind(this)
    }


    componentDidMount() {
        this.getPlanets()
        console.log('START', this.props.planets)
    }

    getPlanets() {
        planetsList.forEach(planet => {
            this.props.dispatch({
                type: `LOADING_${planet}`
            })
            fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`)
                .then(response => {
                    if (response.ok) {
                        return response
                    } else {
                        const error = new Error(`Error ${response.status}: ${response.statusText}`)
                        error.response = response
                        throw error
                    }
                },
                    error => {
                        const errMess = new Error(error.message)
                        throw errMess
                    }
                )
                .then(response => response.json())
                .then(data => {
                    const planetUri = this.getImage(data.englishName)
                    data = { ...data, image: planetUri }
                    this.props.dispatch(
                        {
                            type: `ADD_${planet.toUpperCase()}`,
                            payload: data
                        })
                    //TODO: dispatch ADD_PLANET_IMAGE, the payload must be the image url
                    //for that planet. Will get this returned from a function then dispatch
                    // const planetUri = this.getImage(data.englishName)
                    // this.props.dispatch({
                    //     type: `ADD_${planet.toUpperCase()}_IMG`,
                    //     payload: { image: planetUri }
                    // })
                    // console.log(`ADD_${planet.toUpperCase()}_IMG`)
                })

                .catch(error => this.props.dispatch({ type: `FAILED_${planet}` }))
        })
    }

    getImage(name) {
        switch (name) {
            case 'Mercury':
                return 'https://scx2.b-cdn.net/gfx/news/hires/2015/whatsimporta.jpg'
            case 'Venus':
                return 'http://cen.acs.org/content/dam/cen/99/11/WEB/09911-feature3-venus.jpg'
            case 'Earth':
                return 'https://s1.reutersmedia.net/resources/r/?m=02&d=20130422&t=2&i=724849096&w=780&fh=&fw=&ll=&pl=&sq=&r=2013-04-22T182525Z_02_GM1E81Q00WU01_RTRRPP_0_NASA'
            case 'Mars':
                return 'https://solarsystem.nasa.gov/system/stellar_items/image_files/6_mars.jpg'
            case 'Jupiter':
                return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbZH-sqbgUWu-UOYZ8_9oEjPKvB5Brt8Q-HVMdLguYYLW3Iirp-VB3AvO98p_iCXKV-s&usqp=CAU'
            case 'Saturn':
                return 'https://trustmyscience.com/wp-content/uploads/2018/12/planete-saturne-anneaux.jpeg'
            case 'Uranaus':
                return 'https://m.media-amazon.com/images/I/71aUHserTCL._AC_SL1500_.jpg'
            case 'Neptune':
                return 'https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg'
            case 'Pluto':
                return 'https://www.nasa.gov/sites/default/files/thumbnails/image/nh-charon-neutral-bright-release_0.jpg'


            default:
                return '';
        }
    }

    arrangePlanets() {
        let arr = []
        for (const planet in this.props.planets) {


            arr.push(this.props.planets[planet])

        }

        return arr
    }





    render() {

        const Home = () => {
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
                        {/* {console.log(this.props.planets)} */}
                    </div>
                </div>
            )
        }

        const SolarSystem = () => {

            return (
                <div className="container">
                    <div className="row mb-5">
                        <Navigation />

                    </div>
                    <div className="row d-flex align-items-center">
                        <Planets

                            planetsList={PLANETS}
                            planets={this.props.planets}
                        />

                    </div>

                </div>
            )
        }

        const PlanetDetails = ({ match }) => {

            const arrPlanets = this.arrangePlanets()
            //^^Make the props.planets an array since right now it is an object of objects

            const matchedPlanet = arrPlanets.filter(planet => {

                return match.params.planet === planet.data.englishName.toLowerCase()

            })[0]

            console.log(matchedPlanet, "I found the planet")


            return (
                <div className="container">
                    <div className="row">
                        <Navigation />
                    </div>
                    <div style={{ height: '120vh', }} className="row d-flex align-items-center">
                        <PlanetInfo
                            planet={matchedPlanet}
                        />
                    </div>
                </div>
            )

        }

        return (
            <div className='root'>
                <Route render={({ location }) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            timeout={200}
                            classNames="fade"
                        >
                            <Switch location={location}>


                                <Route path="/solarsystem" component={SolarSystem} />


                                <Route path="/planets/:planetEnglishName" component={PlanetDetails} />

                                <Route path="/:planet" component={PlanetDetails} />

                                <Route path="/" component={Home} />




                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )} />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Main))