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

import { SiPytorch, SiGithub, SiPython, SiGit, SiUbuntu, SiAzuredevops, SiMicrosoftazure, SiDocker } from 'react-icons/si';

import incubit_logo from '../../imgs/logo_large.png';
import kpmg_logo from '../../imgs/KPMG_logo.png';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
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

const StyledAccordion = styled(Accordion)`
  .MuiAccordion-root {
    &.Mui-expanded {
      margin: 0 0 0 0;
    }
    margin: 0;
  }
`

export default function Experience() {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
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
          <StyledAccordion>
            <StyledAccordionSummary 
              expandIcon={<ExpandMoreIcon />}
              style={{paddingLeft: '30px'}}
            >
              <Typography variant='body1'>Details</Typography>
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
                  Maintain and update the main codebase, enabling faster setups and launches for experiments and hyperparameters tuning.
                </Typography>
              </ListItem>
            </ul>
            </AccordionDetails>
          </StyledAccordion>
        </Card>
      </Grid>


      <Grid item xs={12}>
        <Card className={classes.root} raised={true}>
          <CardHeader
            avatar={
              <Logo src={kpmg_logo}/>
            }
            style={{paddingBottom: '20px'}}
            title={<Header variant='h4'>Business Analyst Intern</Header>}
            subheader={<Header variant='body2'>September 2021 - February 2021</Header>}
          />
          <CardContent style={{paddingLeft: '24px'}}>
              <Typography variant="body1" color="textSecondary">
              TLDR: worked directly with Product Owner using Agile.
              </Typography>
              <Icon icon={<SiPython size={20} color={'#ffffff'} />} label='Python'/>
              <Icon icon={<SiPytorch size={20} color={'#ffffff'} />} label='PyTorch'/>
              <Icon icon={<SiAzuredevops size={20} color={'#ffffff'} />} label='Azure DevOps'/>
              <Icon icon={<SiGit size={20} color={'#ffffff'} />} label='Git'/>
              <Icon icon={<SiMicrosoftazure size={20} color={'#ffffff'} />} label='Azure ML'/>
              <Icon icon={<SiDocker size={20} color={'#ffffff'} />} label='Docker'/>
              <Icon icon={<SiGithub size={20} color={'#ffffff'} />} label='Docker'/>
          </CardContent>
          <Accordion>
            <StyledAccordionSummary 
              expandIcon={<ExpandMoreIcon />}
              style={{paddingLeft: '30px', margin: 0}}
            >
              <Typography variant='body1'>Details</Typography>
            </StyledAccordionSummary>
            <AccordionDetails>
            <ul>
              <ListItem>
                <Typography variant="body1">
                  Participated and lead Agile workflow meetings including sprint planning, retrospective, estimation planning, and daily.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                Describe and illustrate business goal, current business flow and issues clearly in Epics, Features, and User Stories.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                Create business requirements documents, system configuration documents, detailed functional design documents, test plans and test cases, user training documents and implementation documents.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                Validate new features from the user’s point of view, describe requirements for development team members to implement, and report the progress to the Product Owner regularly.
                </Typography>
              </ListItem>
            </ul>
            </AccordionDetails>
            </Accordion>

          <StyledAccordion>
            <StyledAccordionSummary 
              expandIcon={<ExpandMoreIcon />}
              style={{paddingLeft: '30px'}}
            >
              <Typography variant='body1'>Additional Project: Document Understanding</Typography>
            </StyledAccordionSummary>
            <AccordionDetails>
            <ul>

              <ListItem>
                <Typography variant="body1" >
                  Worked and finetune on Document Layout Segmentation models: LayoutLM, LayoutXLM, LayoutLMv2, LayoutParser, etc.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">
                  Develop service for document processing with Python, Docker, and Azure Machine Learning.
                </Typography>
              </ListItem>

              <ListItem>
                <Typography variant="body1">
                  Find it on <a href='https://huggingface.co/beomus/layoutxlm'>HuggingFace🤗</a>
                </Typography>
              </ListItem>

            </ul>
            </AccordionDetails>
          </StyledAccordion>
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