import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import { Collapse } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    root: {
        maxWidth: 445,
        background: 'rgba(0,0,0,1)',
        opacity: '0.8',
        marginTop: '10px',
        cursor: 'pointer',
        transition: "transform .2s ease-in-out;",
        "&:hover": {
            transform: "scale(1.05)",
            opacity: '0.9'
            // marginBottom: '20px'
        }
    },

    media: {
        // height: 440,
    },
    cardBody: {
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        // opacity: '0.01'
    }
})

export default function CosmicCard(props) {
    const classes = useStyles()
    const history = useHistory()

    return (
        <Collapse in={props.checked} {... (true ? { timeout: 500 } : {})}>

            <Card className={`${classes.root}`} onClick={e => history.push(`/planets/${props.name}`)}>
                <CardMedia
                    component="img"
                    height="240"
                    image={props.img}
                    alt="mercury "
                    className={classes.media}
                />
                <CardContent className={classes.cardBody}>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>

                </CardContent>
            </Card>

        </Collapse>
    );
}