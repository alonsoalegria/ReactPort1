import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import Footer from './components/Footer';
import './App.css';

//custom components from @material-ui
/*import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';
*/

import DescriptionIcon from '@material-ui/icons/Description';
import PersonIcon from '@material-ui/icons/Person';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles();
  return (
    <div className="App">
     <ThemeProvider theme={theme}>
     <NavBar/>
     <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
            Hi! Thanks for checking out my site :)
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            I am a software developer from Temecula, CA. I graduted from California State University San Marcos with a Bachelors Degree in Computer Science in hopes of persuing my dream of creating innovative applications.
          </Typography>
          </div>
     <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<DescriptionIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Resume" btnTitle="Show me More" />
          <Grid icon={<PersonIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="About" btnTitle="Show me More"/>
          <Grid icon={<ImportantDevicesIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Projects" btnTitle="Show me More"/>
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
        </ThemeProvider>
    </div>
  );
}

export default App;
