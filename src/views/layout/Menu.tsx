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
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userLogout } from "../components/redux/user/userSlice";
import Account from "../components/Account";
import { Stack } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

/**
 * A component to show on the navbar for giving more features . Markdown is Menu*.
 */
export default function AccountMenu() {
  const user = useSelector((state: any) => state.userReducer.user);
  console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await localStorage.clear();
    dispatch(userLogout());
    navigate("/");
  };
  const openProfile = () => {
    if (user?.role === "member") {
      navigate("/member/profile");
    } else {
      navigate("/superAdmin/profile");
    }
  };
  return (
    <>
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
            src={require(`./user.png`)}
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
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
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
        <MenuItem>
          <Avatar>{user?.name?.[0]}</Avatar>
          {/* <Link
            to="/member/profile"
            style={{ textDecoration: "none", color: "black", marginTop: 3 }}
          >
            Hello,{user?.name}
          </Link> */}
          Hello,{user?.name}
        </MenuItem>
        <Divider />
        <MenuItem onClick={openProfile}>
          <ListItemIcon>
            <AccountBoxIcon fontSize="small" />
          </ListItemIcon>
          My Account
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
