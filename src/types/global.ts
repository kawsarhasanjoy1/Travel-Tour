/* eslint-disable @typescript-eslint/no-explicit-any */
export type TPopular = {
  id: number;
  location: string;
  image: string;
  days: number;
  hotelQuality: string;
  Aed: string;
  category: string;
};

export type TSesion = {
  img: string;
  name: string;
  des: string;
  link: string;
};

export type TTitle = {
  title: string;
  link: string;
};

export type TInput = {
  place?: string;
  type?: string;
  name?: string;
  OnChange?: any;
};

export type TSelect = {
  setIsOpen: any;
  isOpen: boolean;
  selectedValue: any;
  shop: any;
  setSelectedValue: any;
};

export type TISelect = {
  value: string;
  label: string;
}[];

export type TIInput = {
  type: string;
  name: string;
  place?: string;
  className?:string,
};