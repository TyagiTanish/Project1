import { Box, Container, Grid, ListItem } from "@mui/material";
import { useMemo, useState } from "react";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import DroppableArea from "./DroppableArea";
import { TotalHotels } from "../DasboardComponents/TotalHotels";
import BookingPieChart from "../DasboardComponents/BookingsPieChart";
import { TotalMembers } from "../DasboardComponents/TotalMembers";
import { TotalCustomers } from "../DasboardComponents/TotalCustomers";
import { TotalEarnings } from "../../../HotelOwner/Dashboard/dashBoardComponents/TotalEarnings";
import useAllBookings from "../../../../../Hooks/useAllBookings";
import useAllHotels from "../../../../../Hooks/SuperAdmin/useAllHotels";
import useAllCustomers from "../../../../../Hooks/SuperAdmin/useAllCustomers";
import useAllMembers from "../../../../../Hooks/SuperAdmin/useAllMembers";

interface MyComponentProps {
  // Define props interface here
  item?: any;
  index?: number;
  setItems?: any;
}

export const CustomDashboard: React.FC<MyComponentProps> = ({
  item,
  setItems,
}: any) => {
  // const data = {
  //   medium: generateQuoteMap(100),
  //   large: generateQuoteMap(500),
  // };

  // const [columns, setColumns] = useState(data?.medium);

  // const [ordered, setOrdered] = useState(Object.keys(data?.medium));

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId }: any = result;
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return; // No need to update state or perform any actions
    }
    if (source.index === destination.index) {
      return; // Dropped at the same position
    }
    const newItems = [...item];
    const [removed] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, removed);

    setItems(newItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DroppableArea items={item} />
    </DragDropContext>
  );
};
