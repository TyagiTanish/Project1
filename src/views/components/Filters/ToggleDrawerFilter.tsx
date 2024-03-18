import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Checkbox from "@mui/joy/Checkbox";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import ModalClose from "@mui/joy/ModalClose";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Stack from "@mui/joy/Stack";
import RadioGroup from "@mui/joy/RadioGroup";
import Radio from "@mui/joy/Radio";
import Sheet from "@mui/joy/Sheet";
import Switch from "@mui/joy/Switch";
import Typography from "@mui/joy/Typography";
import TuneIcon from "@mui/icons-material/TuneRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import Done from "@mui/icons-material/Done";
import PriceRangeSlider from "./PriceRangeSlider";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { useSelector } from "react-redux";
import { FormattedMessage, useIntl } from "react-intl";

export default function DrawerFilters({
  open,
  setOpen,
  setFilteredData,
  searchTerm,
  price,
  setPrice,
  category,
  setCategory,
  applyFilter,
  setApplyFilter,
}: any) {
  //   const [open, setOpen] = React.useState(false);
  // const [price, setPrice] = React.useState<number[]>([10000, 37000]);

  const reduxCategory = useSelector((state: any) => state.userReducer.category);

  const filterCategory = reduxCategory?.map((item: any) => item?.index);
  const [amenities, setAmenities] = React.useState<any>();
const intl=useIntl();
  const totalCategories = [
    { name: intl.formatMessage({defaultMessage:"Suite"}), index: 1 },
    { name:intl.formatMessage({defaultMessage:"Deluxe"}) , index: 2 },
    { name:intl.formatMessage({defaultMessage:"Super Deluxe"}) , index: 3 },
  ];

  const setCategories = (item: any, index: any) => {
    // if(!category?.includes()){
    //   setCategory((prev:any) => [...prev, {name:item?.name,index:index}])
    // }else{
    //   setCategory(category?.filter((item:any)=> item.index !== index))
    // }
    // Check if the next value already exists in the array
    let exists = category.some((item: any) => item?.index === index);

    if (exists) {
      setCategory(category.filter((item: any) => item?.index !== index));
    } else {
      setCategory((prev: any) => [...prev, { name: item?.name, index: index }]);
    }
  };

  React?.useEffect(() => {
    setAmenities(filterCategory ? filterCategory : []);
  }, [open]);

  return (
    <React.Fragment>
      <Drawer
        size="md"
        variant="plain"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        slotProps={{
          content: {
            sx: {
              bgcolor: "transparent",
              p: { md: 3, sm: 0 },
              boxShadow: "none",
            },
          },
        }}
      >
        <Sheet
          sx={{
            borderRadius: "md",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "80%",
            mt: "10%",
          }}
        >
          <DialogTitle><FormattedMessage defaultMessage="Filters"/></DialogTitle>
          <ModalClose />
          <Divider sx={{ mt: "auto" }} />
          <DialogContent sx={{ gap: 2 }}>
            <FormLabel sx={{ typography: "title-md", fontWeight: "bold" }}>
             <FormattedMessage defaultMessage="Select price range"/> 
            </FormLabel>
            <Box ml={3}>
              <PriceRangeSlider price={price} setPrice={setPrice} />
            </Box>
            <Divider />
            {/* <FormControl>
              <FormLabel sx={{ typography: "title-md", fontWeight: "bold" }}>
                Property type
              </FormLabel>
              <RadioGroup
                value={type || ""}
                onChange={(event) => {
                  setType(event.target.value);
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(140px, 1fr))",
                    gap: 1.5,
                  }}
                >
                  {[
                    {
                      name: "House",
                      icon: <HomeRoundedIcon />,
                    },
                    {
                      name: "Apartment",
                      icon: <ApartmentRoundedIcon />,
                    },
                    {
                      name: "Guesthouse",
                      icon: <MeetingRoomRoundedIcon />,
                    },
                    {
                      name: "Hotel",
                      icon: <HotelRoundedIcon />,
                    },
                  ].map((item) => (
                    <Card
                      key={item.name}
                      sx={{
                        boxShadow: "none",
                        "&:hover": { bgcolor: "background.level1" },
                      }}
                    >
                      <CardContent>
                        {item.icon}
                        <Typography level="title-md">{item.name}</Typography>
                      </CardContent>
                      <Radio
                        disableIcon
                        overlay
                        checked={type === item.name}
                        variant="outlined"
                        color="neutral"
                        value={item.name}
                        sx={{ mt: -2 }}
                        slotProps={{
                          action: {
                            sx: {
                              ...(type === item.name && {
                                borderWidth: 2,
                                borderColor:
                                  "var(--joy-palette-primary-outlinedBorder)",
                              }),
                              "&:hover": {
                                bgcolor: "transparent",
                              },
                            },
                          },
                        }}
                      />
                    </Card>
                  ))}
                </Box>
              </RadioGroup>
            </FormControl> */}

            <Typography level="title-md" fontWeight="bold" sx={{ mt: 1 }}>
            <FormattedMessage defaultMessage="Amenities"/>  
            </Typography>
            <div role="group" aria-labelledby="rank">
              <List
                // orientation="horizontal"
                size="lg"
                sx={{
                  "--List-gap": "12px",
                  "--ListItem-radius": "20px",
                  width: "95%",
                  ml: 1,
                }}
              >
                {totalCategories.map((item: any, index: any) => {
                  const selected = amenities?.includes(index);
                  return (
                    <ListItem key={item.name}>
                      <AspectRatio
                        variant={selected ? "solid" : "outlined"}
                        color={selected ? "primary" : "neutral"}
                        ratio={1}
                        sx={{ width: 20, borderRadius: 20, ml: -0.5, mr: 0.75 }}
                      ></AspectRatio>
                      <Checkbox
                        size="sm"
                        color="neutral"
                        disableIcon
                        overlay
                        label={item.name}
                        variant="outlined"
                        checked={selected}
                        onChange={(event) => {
                          setCategories(item, index);
                          setAmenities((prev: any) => {
                            const set = new Set([...prev, index]);
                            if (!event.target.checked) {
                              set.delete(index);
                            }
                            // @ts-ignore
                            return [...set];
                          });
                        }}
                        slotProps={{
                          action: {
                            sx: {
                              "&:hover": {
                                bgcolor: "transparent",
                              },
                            },
                          },
                        }}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </div>
          </DialogContent>

          <Divider sx={{ mt: "auto" }} />
          {/* <Stack
            direction="row"
            justifyContent="space-between"
            useFlexGap
            spacing={1}
          >
            <Button
              variant="outlined"
              color="neutral"
              onClick={() => {
                setType("");
                setAmenities([]);
              }}
            >
              Clear
            </Button> */}
          <Button
            onClick={() => {
              setApplyFilter(applyFilter + 1);
              setOpen(false);
            }}
          >
           <FormattedMessage defaultMessage="Show Hotels"/>       
          </Button>
          {/* </Stack> */}
        </Sheet>
      </Drawer>
    </React.Fragment>
  );
}
