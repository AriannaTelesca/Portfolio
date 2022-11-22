import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import theme from './theme';
import { ThemeProvider } from '@emotion/react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <ThemeProvider theme={theme}>
           <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
      >
        <MenuIcon />
          </IconButton>
      <Menu 
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <a href="https://ariannatelesca.github.io/My-CV/" target="_blank" rel="noreferrer">
        <MenuItem onClick={handleClose}>Curriculum</MenuItem></a>
        <a href="https://github.com/AriannaTelesca" target="_blank" rel="noreferrer"> 
        <MenuItem onClick={handleClose}>Github</MenuItem></a>
        <a href="https://www.linkedin.com/in/arianna-telesca-700096193/" target="_blank" rel="noreferrer">   
        <MenuItem onClick={handleClose}>Linkedin</MenuItem></a>
      </Menu>
      </ThemeProvider>
    </div>
  );
}