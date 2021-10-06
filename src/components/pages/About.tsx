import React from 'react'
import { Typography, Grid, withStyles, makeStyles, Theme, Tabs, Tab } from '@material-ui/core'
import styled from 'styled-components'
import wfh from '../../imgs/wfh.JPG';
import futo from '../../imgs/ito.JPG'
import koganei from '../../imgs/koganei.jpg'
import shimoda from '../../imgs/shimoda.JPG'

const CustomTypography = withStyles({
  root: {
    marginTop: '10px',
    marginBottom: '10px'
  }
})(Typography);

const CustomTabs = withStyles({
  indicator: {
    backgroundColor: '#0010EB',
  }
})(Tabs);

const CustomTab = withStyles({
  wrapper: {
    textTransform: 'none'
  }
})(Tab);


interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid container justify='center' style={{paddingTop: '10px'}}>
          {children}
        </Grid>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: '10px',
    flexGrow: 1,
  },
  tabs: {
    borderRight: `2px solid ${theme.palette.divider}`,
  },
}));

const Image = styled.img`
  max-height: 500px;
  width: 100%;
  object-fit: cover;
`


export default function About() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  
  return (
    <Grid container direction={'row'}>
      <Grid item xs>
        <Grid container>
          <CustomTypography variant="h3">Hello there 👋</CustomTypography>
          <CustomTypography variant="body1" align='left'>
            My name is Hau, a recent graduate at Tokyo International University with a Bachelor in Business Economics.
            I have a strong interest in technology, mainly in software development and data science.
          </CustomTypography>
          <CustomTypography variant="body1" align='left'>
            I brew coffee and cook daily, play guitar every other day, and take pictures very occasionally.
          </CustomTypography>
          <CustomTypography variant="body1" align='left'>
            Currently, I am a AI Engineer Intern at Incubit and I am also looking for full-time opportunities.
            Please feel free to contact me via LinkedIn or email if you have a fitting position!
          </CustomTypography>
        </Grid>
      </Grid>
      
      <Grid item xs={12}>
        <Grid container style={{justifyContent: "center"}} spacing={1}>
          <div className={classes.root}>
            <CustomTabs
              centered
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="on"
            >
              <CustomTab label={<LabelText>Futo (富戸)</LabelText>} {...a11yProps(0)} />
              <CustomTab label={<LabelText>WFH</LabelText>} {...a11yProps(1)} />
              <CustomTab label={<LabelText>Koganei (小金井公園)</LabelText>} {...a11yProps(2)} />
              <CustomTab label={<LabelText>Shimoda (下田)</LabelText>} {...a11yProps(3)} />
            </CustomTabs>
            <TabPanel value={value} index={0}>
              <Image src={futo} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Image src={wfh} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Image src={koganei} />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Image src={shimoda} />
            </TabPanel>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}


const LabelText = styled(({className, color, ...props}) => (
  <Typography variant='subtitle1' {...props}/>
))`
  align-self: auto;
`