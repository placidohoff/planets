import React, { useEffect } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Collapse } from '@material-ui/core';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        // maxWidth: '30rem'
        maxWidth: '500px'
    }
})



export default function PlanetInfo({ planet }) {



    const styles = useStyles()
    const history = useHistory()


    const findImage = (name) => {
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

    let image;
    if (planet) {
        image = findImage(planet.englishName);
    }
    // console.log(image)


    return (
        <div className="col d-flex justify-content-center">
            <Collapse in={true} {... (true ? { timeout: 1000 } : {})}>
                <Card
                    className="d-flex align-self-center"
                    onClick={() => history.push('/solarsystem')}>
                    <CardImg className={`img fluid ${styles.root}`} top src={image} alt={planet.name} />
                    <CardBody>
                        <CardTitle>{planet.englishName}</CardTitle>
                        <CardText>{planet.description}</CardText>
                    </CardBody>
                </Card>
            </Collapse>

        </div>
    )
}