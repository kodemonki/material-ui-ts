import React, { useState, useEffect, useMemo } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios, { AxiosResponse } from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

interface DetailType {
  title: string;
  description: string;
}

interface electoralRollType {
  current: boolean;
}

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: theme.spacing(2),
  },
  onTrackBox: {
    background: '#e3f9ed',
    borderRadius: '4px',
    display: 'inline-block',
    padding: '4px 8px'
  },
  onTrackText: {
    color: theme.palette.success.main,
    fontSize: '12px',
    fontWeight: 'normal',
    minHeight: '16px',
    letterSpacing: '0.4px',
    lineHeight: "16px",
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  offTrackBox: {
    background: "#fdf2e8",
    borderRadius: '4px',
    display: 'inline-block',
    padding: '4px 8px'
  },
  offTrackText: {
    color: theme.palette.error.main,
    fontSize: '12px',
    fontWeight: 'normal',
    minHeight: '16px',
    letterSpacing: '0.4px',
    lineHeight: "16px",
    textAlign: 'center',
    textTransform: 'uppercase'
  },
}));

interface DrawerContentProps {
  closeDrawer: () => void;
  jsonData: AxiosResponse;
}

export const DrawerContent = (props: DrawerContentProps): JSX.Element => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<AxiosResponse>();

  const loadJson = () => {
    axios.get('https://api.jsonbin.io/b/6128c389c5159b35ae04d4ed/1')
      .then(function (response) {
        setResponse(response)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  //filter the array check the length
  const ElectoralRollOnTrack = useMemo(() => {
    return (props.jsonData.data.personal.electoralRoll.filter((item: electoralRollType) => {
      return item.current;
    }).length > 0)
  }, [props.jsonData]);

  useEffect(() => {
    if (!response && isLoading === false) {
      setIsLoading(true);
      loadJson();
    }
  }, [isLoading, response]);

  return (
    <Grid container direction='column' className={classes.wrapper} wrap="nowrap" spacing={2}>
      {!response && (<Grid container item justifyContent="center">
        <CircularProgress />
      </Grid>)}
      {response && (<>
        {ElectoralRollOnTrack && (
          <Grid item >
            <Box className={classes.onTrackBox}>
              <Typography className={classes.onTrackText}>
                ON TRACK
              </Typography>
            </Box>
          </Grid>
        )}
        {!ElectoralRollOnTrack && (
          <Grid item>
            <Box className={classes.offTrackBox}>
              <Typography className={classes.offTrackText}>
                OFF TRACK
              </Typography>
            </Box>
          </Grid>
        )}
        <Grid item>
          <Typography>
            <strong>{response.data.title}</strong>
          </Typography>
        </Grid>
        {ElectoralRollOnTrack && (
          <Grid item >
            <Typography>
              {response.data.onTrackDescription}
            </Typography>
          </Grid>
        )}
        {!ElectoralRollOnTrack && (
          <Grid item >
            <Typography>
              {response.data.offTrackDescription}
            </Typography>
          </Grid>
        )}
        {response.data.details.map((item: DetailType, index: number) => (
          <Grid item key={`detail${index}`} >
            <Typography>
              <strong>{item.title}</strong>
            </Typography>
            <Typography>
              {item.description}
            </Typography>
          </Grid>
        ))}
        <Grid item>
          <Button variant="contained" onClick={() => { props.closeDrawer() }}>Close</Button>
        </Grid>
      </>)
      }
    </Grid >
  )
}

export default DrawerContent