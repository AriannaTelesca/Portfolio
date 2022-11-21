import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import data from './data.js';

export default function MediaCard() {
   
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = data.length;
  
    const next = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const back = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

  return (
    <ThemeProvider theme={theme}>
    <Box className='Box' sx={{ maxWidth: 900, flexGrow: 1}}>
    <Paper
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          backgroundColor: 'primary',
        }}
      >
        <Typography>{data[activeStep].title}</Typography>
      </Paper>
      <Card >
         <CardMedia
          component="img"
          height="auto"
          width="100%"
          image={data[activeStep].img}
         />
      <CardContent>
        <Typography variant="body1" color="primary">
          {data[activeStep].text}
        </Typography>
      </CardContent>
      <CardActions >
      <a href={data[activeStep].link} target="_blank" rel="noreferrer">
        <IconButton className="icon" aria-label="link" color="primary">
          <LaunchIcon /> 
        </IconButton>
      </a>
      <a href={data[activeStep].github} target="_blank" rel="noreferrer">
        <IconButton aria-label="github" className="icon" color="primary">
          <GitHubIcon />
        </IconButton>
      </a>  
      </CardActions>
      </Card>

      <MobileStepper 
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={next}
            disabled={activeStep === maxSteps - 1}
          >
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
            ) : (
             <KeyboardArrowRight />
          )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={back} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
               ) : (
              <KeyboardArrowLeft />
               )}
              Back
          </Button>
        }
      />
  </Box>
  </ThemeProvider>
  );
}