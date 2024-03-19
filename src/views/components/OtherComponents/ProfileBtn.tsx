import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/user/userSlice";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export default function AccountMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const user = useSelector((state: any) => state.userReducer.user);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    dispatch(userLogout());
    navigate("/");

    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Tooltip title="Account settings">
        <Stack
          onClick={handleClick}
          direction={"row"}
          sx={{
            border: "1px solid lightgray",
            "&:hover": {
              backgroundColor: "lightgray",
              // border:'1px solid'
            },
          }}
          alignItems={"center"}
          padding={0.5}
          borderRadius={10}
        >
          <Avatar
            src={require(`../../layout/user.png`)}
            sx={{ width: 32, height: 32, mr: 1 }}
          ></Avatar>
          <SettingsOutlinedIcon sx={{ color: "gray" }} />
        </Stack>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 20,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {" "}
        <MenuItem
          onClick={handleClose}
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <PersonIcon />
          <Link
            to="/profile/accountSetting"
            style={{ textDecoration: "none", color: "black", marginTop: 3 }}
          >
            <FormattedMessage defaultMessage="Profile"/>   
          </Link>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <PersonIcon />
          <Link
            to="/profile/myBookings"
            style={{ textDecoration: "none", color: "black", marginTop: 3 }}
          >
           <FormattedMessage defaultMessage="My Bookings"/>      
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <FormattedMessage defaultMessage="Logout"/>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
