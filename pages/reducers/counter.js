// 1 importer creatSlice pour créer un ensemble d'actions

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};

//const = [counter, setCounter] = useState(0)

export const counterSlice = createSlice({
  name: "counter",
  //correspond à la valeur initiale de l'etat
  initialState,
  //correspond au setter dans unn useState
  reducers: {},
});
