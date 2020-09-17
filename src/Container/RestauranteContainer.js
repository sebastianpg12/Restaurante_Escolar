import React from "react";

import { NavbarIndex } from "../Components/NavbarIndex";
import { MainIndex } from "../Components/MainIndex";
import { FooterIndex } from "../Components/FooterIndex";
export default function RestauranteContainer() {
  return (
    <div className="RestauranteContainer">
      <NavbarIndex />
      <MainIndex />
      <FooterIndex />
    </div>
  );
}
