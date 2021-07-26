import React from 'react';
import { makeStyles, Theme, useTheme, withStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { AppBar, Grid, Tabs, Tab, Typography } from '@material-ui/core'
import { FaIdCard, FaSchool, FaLaptopCode } from 'react-icons/fa'
import styled from 'styled-components';

import About from './pages/About';
import Experience from './pages/Experience'
import Projects from './pages/Projects'


interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid container style={{margin: '24px'}}>
          {children}
        </Grid>
      )}
    </div>
  );
}

function assignIndex(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const StyledTabs = withStyles({
  indicator: {
    backgroundColor: '#0010EB',
  }
})(Tabs);

const CustomTab = styled(({classes, ...props}) => (
  <Tab {...props} classes={{
    wrapper: classes.wrapper, 
    labelIcon: classes.labelIcon,
    selected: "selected"
  }}/>
))`
  color: #064ABF;
  opacity: 0.5;
  &.selected {
    color: #0010EB;
  };
`
const LabelText = styled(({className, color, ...props}) => (
  <Typography variant='h6' {...props}/>
))`
  align-self: auto;
`

interface CustomLabelProbs {
  children?: React.ReactNode;
}

function CustomLabel(props: CustomLabelProbs) {
  const {children} = props;
  const theme = createMuiTheme();

  theme.typography.h6 = {
    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'none',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <LabelText>{children}</LabelText>
    </ThemeProvider>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
  },
  labelIcon: {
    minHeight: theme.spacing(1),
    marginBottom: '0px',
  },
  wrapper: {
    flexDirection: "row",
    textTransform: 'none',
    fontSize: 16,
  },
}));

const iconStyle = {
  marginBottom: '0px',
  paddingLeft: '8px',
  paddingRight: '8px',
}

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container className={classes.root}>
      <AppBar position="sticky" color="default" style={{background: '#52A3D9'}}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          centered
        >
          
          <CustomTab 
            label={<CustomLabel>About me</CustomLabel>}
            icon={<FaIdCard style={iconStyle} size={'20px'}/>} 
            classes={{
              wrapper: classes.wrapper,
              labelIcon: classes.labelIcon,
            }}
            selected
            {...assignIndex(0)} 
          /> 
          
          <CustomTab 
            label={<CustomLabel>Experience</CustomLabel>}
            icon={<FaSchool style={iconStyle} size={'20px'}/>} 
            classes={{
              wrapper: classes.wrapper,
              labelIcon: classes.labelIcon,
            }}
            {...assignIndex(1)} 
          /> 
          
          <CustomTab 
            label={<CustomLabel>Projects</CustomLabel>}
            icon={<FaLaptopCode style={iconStyle} size={'20px'} />} 
            classes={{
              wrapper: classes.wrapper,
              labelIcon: classes.labelIcon,
            }}
            {...assignIndex(2)} 
          /> 
          
        </StyledTabs>
      </AppBar>
      
      <TabPanel value={value} index={0} dir={theme.direction}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Experience />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Projects />
      </TabPanel>
    </Grid>
  );
}



