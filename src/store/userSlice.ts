// portfolioSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  BasicDetails,
  ContactDetails,
  Skills,
  initialState,
} from "@/interfaces/index";

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setBasicDetails(state, action: PayloadAction<BasicDetails>) {
      console.log("state: ", state);
      state.basicDetails = action.payload;
    },
    setContactDetails(state, action: PayloadAction<ContactDetails>) {
      state.contactDetails = action.payload;
    },
    setSkills(state, action: PayloadAction<Skills>) {
      state.skills = action.payload;
    },
  },
});

export const { setContactDetails, setSkills, setBasicDetails } =
  portfolioSlice.actions;
export default portfolioSlice.reducer;
