import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageIcon from "@mui/icons-material/Language";
import CircleIcon from "@mui/icons-material/Circle";
import { locale } from "../redux/user/userSlice";
function SelectLang() {
  const dispatch = useDispatch();

  const handleChangeLanguage = (e: any) => {
    dispatch(locale(e));
  };

  return (
    <>
      <Accordion
        style={{
          boxShadow: "none",
          textAlign: "left",
          margin: 0,
          padding: 0,
          border: "none",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Stack spacing={2} direction={"row"}>
            {" "}
            <LanguageIcon fontSize="small" />
            <Typography>Language</Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails style={{ marginTop: -20, marginBottom: -20 }}>
          <Stack direction={"column"} textAlign={"left"}>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <CircleIcon sx={{ fontSize: 10 }} />
              <Button
                onClick={(e) => handleChangeLanguage("en")}
                sx={{ color: "black", textTransform: "capitalize" }}
                value={"en"}
              >
                English
              </Button>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <CircleIcon sx={{ fontSize: 10 }} />
              <Button
                onClick={(e) => handleChangeLanguage("fr")}
                sx={{ color: "black", textTransform: "capitalize" }}
                value={"fr"}
              >
                French
              </Button>
            </Stack>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default SelectLang;
