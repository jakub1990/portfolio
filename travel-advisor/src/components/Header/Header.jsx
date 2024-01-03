import {React, useState} from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import useStyles from './styles';


const Header = ({setCoordinates}) => {
    const classes = useStyles();
    const [autocomplete, setAutoComplete] = useState(null);

    const onLoad = (autoC) => setAutoComplete(autoC);

    const onPlaceChanged = () => {
      const lat = autocomplete.getPlace().geometry.location.lat();
      const lng = autocomplete.getPlace().geometry.location.lng();
      setCoordinates({lat, lng});
    } 

    return(
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore new places
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={classes.search} style={{display: 'flex', alignItems: 'center'}}>
                            <Search style={{marginRight: '10px'}} />
                            <InputBase style={{color: 'white'}} placeholder="Search..." className={{root: classes.inputRoot, input: classes.inputInput}} />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;