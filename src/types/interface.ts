import React from "react";

export interface ImenuDshboard {
  id: number;
  title: string;
  icon: JSX.Element;
  name?: string;
  arrow?: JSX.Element;
}

export interface Inotif {
  id: number;
  image: any;
  title: string;
  desc: string;
  date: string;
  icon?: JSX.Element;
}

export interface IopenMenu {
  hamburger: boolean;
  setHamburger: React.Dispatch<React.SetStateAction<boolean>>;
}
