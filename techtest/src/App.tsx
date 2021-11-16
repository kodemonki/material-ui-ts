import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Insights from './components/Insights';
import { makeStyles } from '@material-ui/core/styles';
import axios, { AxiosResponse } from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';

import DrawerContent from './components/DrawerContent';

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('xl')]: {
      marginBottom: '24px !important'
    },
    [theme.breakpoints.down('lg')]: {
      marginBottom: '16px !important'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '16px !important'
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '9px !important'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '9px !important'
    },
  },
}));

export default function App() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<AxiosResponse>();
  const [showDrawer, setShowDrawer] = useState(false);

  const loadJson = () => {
    axios.get('https://api.jsonbin.io/b/6107fbe9f14b8b153e05e714')
      .then(function (response) {
        setResponse(response)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  const openDrawer = () => {
    setShowDrawer(true);
  }

  useEffect(() => {
    if (isLoading === false) {
      setIsLoading(true);
      loadJson();
    }
  }, [isLoading]);

  return (
    <Container>
      <Typography variant="h4" component="h1" align="left" className={classes.title}>
        Insights
      </Typography>
      {!response && (<Grid container justifyContent="center">
        <CircularProgress />
      </Grid>)}
      {response && (<Insights jsonData={response} openDrawer={openDrawer} />)}
      {response && (<Drawer
        anchor="right"
        open={showDrawer}
        onClose={() => { setShowDrawer(false) }}
      >
        <DrawerContent jsonData={response} closeDrawer={() => { setShowDrawer(false) }} />
      </Drawer>)}
    </Container>
  );
}
