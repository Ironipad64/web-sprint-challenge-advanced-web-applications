import React, { useEffect, useState } from "react";
import axios from "axios";

import { axiosWithAuth } from "../helpers/axiosWithAuth"

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  const getData = () => {
    const token = JSON.parse(localStorage.getItem("token"))
    axiosWithAuth()
      .get("")
      .then()
      .catch()
  }

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
