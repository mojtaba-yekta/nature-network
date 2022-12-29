import { createSlice } from "@reduxjs/toolkit";

const getRandomInt = (max) => Math.floor(Math.random() * max);

const 

const rectangleSlice = createSlice({
  name: "rectangle",
  initialState: {
    cells: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    corner1: [0, 0, 0],
    corner2: [0, 0, 0],
    corner3: [0, 0, 0],
    corner4: [0, 0, 0],
  },
  reducers: {
    receiveInputs: (state) => {
      //corner 1
      const c1Index = getRandomInt(3);
      switch (c1Index) {
        case 0:
          if (state.cells[1][0] === 0) {
            state.cells[1][0] += state.corner1[c1Index];
          } else {
          }

          break;
        case 1:
          state.cells[0][1] += state.corner1[c1Index];
          break;
        case 2:
          state.cells[1][1] += state.corner1[c1Index];
          break;
      }

      state.value = 1;
    },
  },
});
