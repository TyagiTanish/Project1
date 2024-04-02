import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useDispatch, useSelector } from "react-redux";
import { locale } from "./redux/user/userSlice";
import TranslateIcon from "@mui/icons-material/Translate";
import { Box } from "@mui/system";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Language() {
  const locales = useSelector((state: any) => state?.userReducer?.locale);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [Locale, setLocale] = React.useState(
    localStorage.getItem("locale") || "en"
  );
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = (value: any) => {
    // console.log(value)
    localStorage.setItem("locale", value);
    dispatch(locale(value));
    setLocale(value);
    handleClose();
  };

  // console.log(Locale)

  return (
    <div>
      <Typography
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ p: 1, width: 200 }}
      >
        {locales === "fr" ? (
          <Stack
            direction={"row"}
            gap={1}
            alignItems={"center"}
            sx={{ cursor: "pointer" }}
          >
            <Box>Francais-CA</Box>
            <Box>
              {open === true ? (
                <KeyboardArrowUpIcon
                  sx={{
                    "&:hover": {
                      color: "blue",
                      borderRadius: 1,
                      cursor: "pointer",
                    },
                  }}
                />
              ) : (
                <ExpandMoreIcon
                  sx={{
                    "&:hover": {
                      color: "blue",
                      borderRadius: 1,
                    },
                  }}
                />
              )}
            </Box>
          </Stack>
        ) : (
          <Stack
            direction={"row"}
            gap={1}
            alignItems={"center"}
            sx={{ cursor: "pointer" }}
          >
            <Box>English-US</Box>
            <Box>
              {open === true ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}
            </Box>
          </Stack>
        )}
      </Typography>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          borderRadius: "12px",
        }}
      >
        <MenuItem
          selected={Locale === "en"}
          sx={{ padding: 1, width: 110 }}
          onClick={() => handleChangeLanguage("en")}
        >
          English-US
        </MenuItem>
        <MenuItem
          sx={{ padding: 1, width: 110 }}
          selected={Locale === "fr"}
          onClick={() => handleChangeLanguage("fr")}
        >
          Francais-CA
        </MenuItem>
      </Menu>
    </div>
  );
}
