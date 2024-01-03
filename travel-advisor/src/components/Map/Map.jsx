import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { LocationOnOutlined } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import useStyles from './styles';

const Map = ({ setBounds, setCoordinates, coordinates, places, setChildClicked, weatherData }) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width: 600px)');
    
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDLl12El-phFVVv6l07tvK9rfx2m6Lm75M'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={(e) => {
                  setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                  setCoordinates({lat: e.center.lat, lng: e.center.lng});
              }}
              onChildClick={(child) => setChildClicked(child)}
              >
              {
                places?.map((place, i) => (
                      <div
                      className={classes.markerContainer}
                      lat={Number(place.latitude)}
                      lng={Number(place.longitude)}
                      key={i}>
                        {
                            !isDesktop ? (
                                <LocationOnOutlined color="primary" fontSize="large" />
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                        {place.name}
                                    </Typography>
                                    <img 
                                    className={classes.pointer}
                                    src={place.photo ? place.photo.images.large.url : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'}
                                    alt={place.name}/>
                                    <Rating size="small" value={Number(place.rating)} readOnly/>
                                </Paper>
                            )
                        }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;