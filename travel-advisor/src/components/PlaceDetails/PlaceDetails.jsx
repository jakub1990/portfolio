import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardActions, Chip, CardContent } from '@material-ui/core';
import { LocationOnOutlined } from '@material-ui/icons';
import { PhoneOutlined } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import useStyles from './styles.js';

const PlaceDetails = ({ place, selected, refProp }) => {
    const classes = useStyles();
    if(selected) refProp?.current?.scrollIntoView({behavior: "smooth", block:"start"})

    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 400 }}
                image={place.photo ? place.photo.images.large.url : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'}
                title={place.name} />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Rating value={Number(place.rating)} readOnly />
                    <Typography gutterBottom variant="subtible1">out of {place.num_reviews} reviews</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>
                {place?.awards?.map((award) => (
                    <Box my={1} display="flex" justify-content="space-between" align-items="center">
                        <img src={award.images.small} alt={award.display_name} />
                        <Typography variant="subtitle2" color="text-secondary">{award.display_name}</Typography>
                    </Box>
                ))}
                {
                    place?.cuisine?.map(({ name }) => (
                        <Chip key={name} size="small" label={name} className={classes.chip} />
                    ))
                }
                {
                    place?.address && (
                        <Typography gutterBottom variant="subtitle2" color="text-secondary" className={classes.subtitle}>
                            <LocationOnOutlined />{place.address}
                        </Typography>
                    )
                }
                {
                    place?.phone && (
                        <Typography gutterBottom variant="subtitle2" color="text-secondary" className={classes.spacing}>
                            <PhoneOutlined />{place.phone}
                        </Typography>
                    )
                }
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                        TripAdvisor
                    </Button>
                </CardActions>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}

export default PlaceDetails;