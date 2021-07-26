import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'
import { Button, Divider, Theme, Typography, makeStyles, Paper, createStyles, Box } from '@material-ui/core';
import profile from '../imgs/square_profile.png';
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa'

const buttonStyles = makeStyles((theme: Theme) => ({
  gh: {
    backgroundColor: '#333',
    '&:hover': {
      backgroundColor: '#525151',
    },
  },
  li: {
    backgroundColor: '#0A66C2',
    '&:hover': {
      backgroundColor: '#2580db',
    },
  },
  dl: {
    backgroundColor: '#01c001',
    '&:hover': {
      backgroundColor: '#1edf1e',
    },
  },
}));

const paperStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      background: '#D5E8F5',
      alignSelf: 'center',
      position: 'fixed',
      [theme.breakpoints.down('md')]: {
        position: 'relative',
      },
    }
}));

const SideBar = () => {
  
  const classes = buttonStyles()
  const paper = paperStyles()

  return (
    <SideBarWrapper 
      container 
      spacing={3} 
      justify='center'
      alignContent='center'
    >
      {/* Paper component to wrap all items to centered and fixed */}
      <Paper
        className={paper.root} 
        elevation={0}
      >
        {/* top grid for profile picture */}
        <Grid item>
          <Avatar 
            src={profile}
            alt='face'
          >
          </Avatar>
        </Grid>

        {/* 2nd grid for name holder */}
        <Grid item xs={12}>
          <Typography 
            align='center'
            variant='h3'
          >
            <Box fontWeight="fontWeightBold" m={1}>
              Hau Le
            </Box>
          </Typography>
          <Typography 
            align='center'
          >
            trunghau60@gmail.com
          </Typography>
        </Grid>

        {/* 3rd grid for full divider length */}
        <Grid item xs={12} style={{padding: '8px'}}>
          <Divider variant="middle" />
        </Grid>
        
        {/* IconList: custom grid to hold buttons horizontally */}
        <IconList 
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item >
            <CustomButton
              className={classes.gh}
              variant="contained"
              size="large"
              onClick={() => window.open('https://github.com/Beomus', '_blank')}
            >
              <FaGithub size={20} color={'#ffffff'}/>
            </CustomButton>
          </Grid>
        
        
          <Grid item >
            <CustomButton
              className={classes.li}
              variant="contained"
              size="large"
              onClick={() => window.open('https://www.linkedin.com/in/trunghaulelam/', '_blank')}
              >
              <FaLinkedin size={20} color={'#ffffff'}/>
            </CustomButton>
          </Grid>
        
        
          <Grid item >
            <CustomButton
              className={classes.dl}
              variant="contained"
              size="large"
              onClick={() => window.open('https://drive.google.com/file/d/1bNVjkIDsgPOqcKj79CdlYLRsXSGwgnnh/view?usp=sharing', '_blank')}
            >
              <FaFileDownload size={20} color={'#ffffff'}/>
            </CustomButton>
          </Grid>
        </IconList>
      </Paper>
    </SideBarWrapper>
  )
}

const CustomButton = styled(Button)`
  color: '#000000';
  align-items: center;
  align-content: center;
  padding: auto;
  margin: auto;
`

const SideBarWrapper = styled(Grid)`
  background: #D5E8F5;
  height: 100vh;
  padding: 8px;
`

const Avatar = styled.img`
  max-width: 250px;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
  padding-top: 12px;
  padding-bottom: 6px;
`

const IconList = styled(Grid)`
  padding: 8px;
`

export { SideBar };
