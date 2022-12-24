import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { HeaderComponent } from "../Components/header";
import LayoutComponent from "../Components/Layout";
import { MainComponent } from "../Components/Main/kids";
import { ModalComponent } from "../Components/modal";
import { Button } from "../Components/util/Button";

export default function KidsPage() {



  return (
    <LayoutComponent>

      <MainComponent />
      
    </LayoutComponent>
  );
}
