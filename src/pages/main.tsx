import React, { useState } from "react";
import LayoutComponent from "../Components/Layout";
import HomePageComponent from "../Components/Main/home";

export default function HomePage() {
  const [modalIsOpen, setmodalIsOpen] = useState(true);
  const [animation, setAnimation] = useState(true);

  function handleCloseModal() {
    setmodalIsOpen(() => false);
  }
  return (
    <LayoutComponent>

      <HomePageComponent />
    </LayoutComponent>
  );
}
