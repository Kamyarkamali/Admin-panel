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

export interface Ichildren {
  children: JSX.Element;
}

export interface Ithem {
  icon: JSX.Element;
  text: string;
}

export interface Isetting {
  menuSetting: boolean;
  setMenuSetting: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Itheme {
  id: number;
  icon: JSX.Element;
  title: string;
}

export interface Islider {
  id: number;
  name: string;
  nerkh?: string;
  title: string;
  orderNumber?: number;
  items?: number;
  dos?: number;
  orders?: number;
  mostaghim?: number;
  zir?: string;
  khadamat?: number;
  campine?: number;
  viesitYekta?: string;
  userYekta?: string;
  viewNumbers?: string;
  nerkhtabdil?: string;
  image: string;
  sod?: string;
}
