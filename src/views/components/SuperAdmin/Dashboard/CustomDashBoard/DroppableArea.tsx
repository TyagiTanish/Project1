import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Box, Grid } from "@mui/material";

const grid = 8; // Adjust grid size as needed

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  // Change background color and boxShadow if item is being dragged
  background: isDragging ? "lightgreen" : "transparent",
  boxShadow: isDragging ? "0 4px 8px 0 rgba(0, 0, 0, 0.2)" : "none",
  // Add padding and margin
  padding: grid * 1,
  // margin: `0 ${grid}px 0 0`,
  // Adjust width and height
  width: 200,
  height: 150,
  // Align items
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // Set cursor
  cursor: "pointer",
  // Transition on dragging
  transition: "background-color 0.2s ease",
  // Apply draggable style
  ...draggableStyle,
  border: "1px solid gray ",
});

const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  display: "flex",
  padding: grid,
  overflow: "auto",
});

const DroppableArea = ({ items }: any) => {
  return (
    <>
      {/* <Box bgcolor={"whitesmoke"} width={"100%"} p={2} height={"50vh"}> */}
      {/* <Grid container xs={12} spacing={2}> */}
      <Droppable droppableId="droppable">
        {(provided) => (
          <Grid
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              // display: "grid", // Set display to grid
              // gridTemplateColumns: `repeat(3, minmax(100px, 1fr))`, // Set grid columns, adjust as needed
              gap: "16px", // Set gap between items
            }}
            xs={12}
            container
          >
            {items?.map((item: any, index: any) => (
              <>
                <Draggable
                  key={String(item?.id)}
                  draggableId={String(item?.id)}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <Grid
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                      xs={12}
                      lg={item?.title === "BookingPieChart" ? 7 : 3}
                      sm={item?.title === "BookingPieChart" ? 7 : 5}
                    >
                      {item?.title}
                    </Grid>
                  )}
                </Draggable>
              </>
            ))}
          </Grid>
        )}
      </Droppable>
      {/* </Grid> */}
      {/* </Box> */}
    </>
  );
};

export default DroppableArea;
