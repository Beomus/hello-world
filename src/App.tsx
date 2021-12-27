import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { SideBar } from './components/SideBar'
import { Grid, Box } from '@material-ui/core';
import FullWidthTabs from './components/AppBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    content: {
      top: 300,
      padding: theme.spacing(3),
      margin: 'auto',
    },
  }),
);

const App = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        className={classes.root}
      >
        
        <Grid 
          item 
          xs
          spacing={2}
          style={{ 
            padding: '8px',
            maxWidth: '300px',
            minWidth: '300px',
          }}
        >
          <SideBar />
        </Grid>
        
        <Grid item xs className={classes.root}>
          <FullWidthTabs />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;