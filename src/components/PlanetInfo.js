import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { Collapse } from '@material-ui/core';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
        // maxWidth: '30rem'
        maxWidth: '500px'
    }
})
export default function PlanetInfo({planet}){
    
    const styles = useStyles()
    const history = useHistory()

    return(
        <div className="col d-flex justify-content-center">
            <Collapse in={true} {... (true ? { timeout: 1000 } : {})}>
            <Card 
                className="d-flex align-self-center"
                onClick={() => history.push('/solarsystem')}>
                <CardImg className={`img fluid ${styles.root}`} top src={planet.image} alt={planet.name} />
                <CardBody>
                    <CardTitle>{planet.name}</CardTitle>
                    <CardText>{planet.description}</CardText>
                </CardBody>
            </Card>
            </Collapse>

        </div>
    )
}