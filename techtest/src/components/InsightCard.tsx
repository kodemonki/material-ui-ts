import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    border: 1,
    borderRadius: '8px',
    boxShadow: '0 0.5rem 0.75rem rgba(0,0,0,0.16)',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
    },
    height: '100%',
  },
  wrapper: {
    padding: theme.spacing(0.5),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1),
    },
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
  impactTopBox: {
    background: "#f1f2f4",
    borderRadius: '4px',
    display: 'inline-block',
    padding: '4px 8px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  impactTopText: {
    color: 'rgb(79,51,25)',
    fontSize: '12px',
    fontWeight: 'normal',
    minHeight: '16px',
    letterSpacing: '0.4px',
    lineHeight: "16px",
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  impactBottomBox: {
    background: "#f1f2f4",
    borderRadius: '4px',
    padding: '4px 8px',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
    marginTop: `${theme.spacing(1)}px !important`
  },
  impactBottomText: {
    color: 'rgb(79,51,25)',
    fontSize: '12px',
    fontWeight: 'normal',
    minHeight: '16px',
    letterSpacing: '0.4px',
    lineHeight: "16px",
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  title: {
    color: 'rgb(38,54,72)',
    fontSize: '16px',
    fontWeight: 'bold',
    minHeight: '20px',
    lineHeight: "20px",
    textAlign: 'left',
    marginTop: `${theme.spacing(3)}px !important`
  },
  description: {
    color: 'rgb(116,127,138)',
    fontSize: '14px',
    fontWeight: 'normal',
    minHeight: '20px',
    lineHeight: "20px",
    textAlign: 'left',
    marginTop: `${theme.spacing(1)}px !important`
  },
  link: {
    color: theme.palette.primary.main,
    fontSize: '14px',
    fontWeight: 'normal',
    minHeight: '20px',
    lineHeight: "20px",
    textAlign: 'left',
  },
}));

export interface InsightCardProps {
  onTrack: boolean;
  title: string;
  description: string;
  impact: string;
  onClick?: () => void;
}

export const InsightCard = ({ onTrack, title, description, impact, onClick }: InsightCardProps): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid item className={classes.wrapper} xs={4} sm={4} md={4} lg={6} xl={4} onClick={onClick}>
      <Grid item className={classes.card} direction="column" container justifyContent="space-between">
        <Grid item container direction="row" wrap="nowrap" spacing={1}>
          <Grid item>
            {onTrack && (
              <Box className={classes.onTrackBox}>
                <Typography className={classes.onTrackText}>
                  ON TRACK
                </Typography>
              </Box>
            )}
            {!onTrack && (
              <Box className={classes.offTrackBox}>
                <Typography className={classes.offTrackText}>
                  OFF TRACK
                </Typography>
              </Box>
            )}
          </Grid>
          <Grid item>
            <Box className={classes.impactTopBox}>
              <Typography className={classes.impactTopText}>
                {impact}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item>
          <Typography className={classes.title}>
            <strong>{title}</strong>
          </Typography>
        </Grid>
        <Grid item style={{ flexGrow: 4 }}>
          <Typography className={classes.description}>
            {description}
          </Typography>
        </Grid>
        {onClick && (
          <Typography className={classes.link}>
            Learn More
          </Typography>
        )}
        <Grid item>
          <Box className={classes.impactBottomBox}>
            <Typography className={classes.impactBottomText}>
              {impact}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default InsightCard