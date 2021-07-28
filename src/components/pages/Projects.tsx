import React from 'react';
import { 
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  makeStyles
} from '@material-ui/core';
import styled from 'styled-components';

import { 
  SiPytorch,
  SiGithub,
  SiPython, 
  SiGit, 
  SiTensorflow, 
  SiCircleci, 
  SiReact, 
  SiTypescript, 
  SiMaterialUi, 
  SiStyledComponents,
  SiPostgresql,
  SiJupyter,

} from 'react-icons/si';
import { AiOutlineExperiment } from 'react-icons/ai'

import neuralnet from '../../imgs/neuralnet.png';
import binarytree from '../../imgs/binarytree.png';
import personalsite from '../../imgs/personalsite.png';
import stockdb from '../../imgs/stockdb.jpg';
import seaborn from '../../imgs/seaborn.png';
import pandas from '../../imgs/pandas.png';
import numpy from '../../imgs/numpy.png';


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    minWidth: 320,
    minHeight: 300,
  },
  media: {
    height: 140,
  },
});


export default function Projects() {
  
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Card 
          className={classes.root} 
          raised={true}
          onClick={() => window.open('https://github.com/Beomus/AIML-Review', '_blank')}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={neuralnet}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Machine Learning concepts
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Simple summarization and implementation of Deep Learning in Computer Vision, including PyTorch and TensorFlow.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{flexWrap: 'wrap'}}>
            <Icon icon={<SiTensorflow size={20} color={'#ffffff'} />} label='TensorFlow'/>
            <Icon icon={<SiPytorch size={20} color={'#ffffff'} />} label='PyTorch'/>
            <Icon icon={<SiGit size={20} color={'#ffffff'} />} label='Git'/>
            <Icon icon={<SiGithub size={20} color={'#ffffff'} />} label='GitHub'/>
            <Icon icon={<SiPython size={20} color={'#ffffff'} />} label='Python'/>
          </CardActions>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6}>
        <Card 
          className={classes.root} 
          raised={true}
          onClick={() => window.open('https://github.com/Beomus/py-dsa', '_blank')}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={binarytree}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Data Structures and Algorithms
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Some useful and popular Data Structures and Algorithms implemented in Python.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{flexWrap: 'wrap'}}>
          <Icon icon={<SiPython size={20} color={'#ffffff'} />} label='Python'/>
            <Icon icon={<AiOutlineExperiment size={20} color={'#ffffff'} />} label='UnitTest'/>
            <Icon icon={<SiGit size={20} color={'#ffffff'} />} label='Git'/>
            <Icon icon={<SiGithub size={20} color={'#ffffff'} />} label='GitHub'/>
            <Icon icon={<SiCircleci size={20} color={'#ffffff'} />} label='CircleCI'/>
          </CardActions>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6}>
        <Card 
          className={classes.root} 
          raised={true}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={personalsite}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Personal Website
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                This personal page that you are currently on!
                <br />
                My 2nd attempt at trying to do front-end development.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{flexWrap: 'wrap'}}>
            <Icon icon={<SiTypescript size={20} color={'#ffffff'} />} label='TypeScript'/>
            <Icon icon={<SiMaterialUi size={20} color={'#ffffff'} />} label='Material UI'/>
            <Icon icon={<SiReact size={20} color={'#ffffff'} />} label='React'/>
            <Icon icon={<SiStyledComponents size={20} color={'#ffffff'} />} label='Styled Components'/>
          </CardActions>
        </Card>
      </Grid>
      
      
      <Grid item xs={12} sm={6}>
        <Card 
          className={classes.root} 
          raised={true}
          onClick={() => window.open('https://github.com/Beomus/Database-Design', '_blank')}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={stockdb}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Relational Database Practice
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Design and implementation as well as data analytics of a simple mock database.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{flexWrap: 'wrap'}}>
            <Icon icon={<SiJupyter size={20} color={'#ffffff'} />} label='Jupyter'/>
            <Icon icon={<CustomIcon src={numpy}/>} label='Numpy'/>
            <Icon icon={<CustomIcon src={pandas}/>} label='Pandas'/>
            <Icon icon={<CustomIcon src={seaborn}/>} label='Seaborn'/>
            <Icon icon={<SiPostgresql size={20} color={'#ffffff'} />} label='PostgreSQL'/>
          </CardActions>
        </Card>
      </Grid>
      
    </Grid>
  )
}

const Icon = styled(Chip)`
  margin: 4px;
  color: #ffffff;
  background-color: #52A3D9;
`

const CustomIcon = styled.img`
  width: 100%;
  max-width: 20px;
  color: #ffffff;
`