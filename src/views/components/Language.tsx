import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useDispatch } from 'react-redux';
import { locale } from './redux/user/userSlice';
export default function Language() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch()
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

const handleChangeLanguage = (e:any) => {
    dispatch(locale( e.currentTarget.value))
    handleClose()
}



  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{mt:2,ml:-27}}
      >
        <LanguageIcon fontSize='large' />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem ><option value={"en"}  onClick={(e)=>handleChangeLanguage(e)} >English</option></MenuItem>
        <MenuItem><option value={"fr"}  onClick={(e)=>handleChangeLanguage(e)}  >French</option></MenuItem>
      </Menu>
    </div>
  );
}

