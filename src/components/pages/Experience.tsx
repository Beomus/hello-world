import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Typography
} from '@material-ui/core';

import { SiPytorch, SiGithub, SiPython, SiGit, SiUbuntu } from 'react-icons/si';

import incubit_logo from '../../imgs/logo_large.png';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: '100%',
    },
  }),
);

const StyledAccordionSummary = styled(AccordionSummary)`
  .MuiAccordionSummary-root {
    &.Mui-expanded {
      min-height: 48;
      margin: 0;
    }
  }
`

export default function Experience() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item>
        <Card className={classes.root} raised={true}>
          <CardHeader
            avatar={
              <Logo src={incubit_logo}/>
            }
            style={{paddingBottom: '0px'}}
            title={<Header variant='h4'>AI Engineer Intern</Header>}
            subheader={<Header variant='body2'>March 2021 - September 2021</Header>}
          />
          <CardContent style={{paddingLeft: '24px'}}>
              <Typography variant="body1" color="textSecondary">
              TLDR: worked mainly image recognition and image segmentation.
              </Typography>
              <Icon icon={<SiPython size={20} color={'#ffffff'} />} label='Python'/>
              <Icon icon={<SiPytorch size={20} color={'#ffffff'} />} label='PyTorch'/>
              <Icon icon={<SiGithub size={20} color={'#ffffff'} />} label='GitHub'/>
              <Icon icon={<SiGit size={20} color={'#ffffff'} />} label='Git'/>
              <Icon icon={<SiUbuntu size={20} color={'#ffffff'} />} label='Ubuntu'/>
          </CardContent>
          <Accordion>
            <StyledAccordionSummary 
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography variant='body1'>More details</Typography>
            </StyledAccordionSummary>
            <AccordionDetails>
            <ul>
              <ListItem>
                <Typography variant="body1">
                  Research, implement, and carry out experiments with novel approaches and architectures 
                  such as ResNet, EfficientNet, Squeeze and Excitation, Transformer, Vision Transformer, UNet, etc.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  Ensure final products to meet special requirements which differ from client to client.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  Maintain and update the main codebase, enabling faster setups and launches for experiments and hyperparameters tuning
                </Typography>
              </ListItem>
            </ul>
            </AccordionDetails>
          </Accordion>
        </Card>
      </Grid>
      
    </Grid>
  );
}
const Header = styled(Typography)`
  padding: 2px;
`

const Logo = styled.img`
  width: 100%;
  max-width: 100px;
  align-self: right;
`

const Icon = styled(Chip)`
  margin: 4px;
  color: #ffffff;
  background-color: #5cb8be;
`

const ListItem = styled.li`
  padding: 4px;
`