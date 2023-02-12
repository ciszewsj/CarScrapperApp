import { createContext } from "react";


export const globalUsersSettings = {

    options: [
      {
        id: 0,
        name: "Mazda 1985-1999",
        brands: [
          "Audi",
        ],
        models: ["a4", "a5"],
        price: {
          min: 1200,
          max: 2100,
        },
        years: {
          min: 1985,
          max: 1999,
        },
      },
    ],
    cars:
      [
        {
          name: "Fiat",
          models: ["Scudo", "Punto"],
        },
        {
          name: "Audi",
          models: ["a4", "a5"],
        },
        {
          name: "Wolksvagen",
          models: ["Bora", "Passat"],
        },
        {
          name: "Porsche",
        },
        {
          name: "Ferrari",
        },
        {
          name: "Bentlay",
        },
        {
          name: "Toyota",
        },
        {
          name: "Polonez",
        },
        {
          name: "Mazda",
        },
      ],
  }
;
export const GlobalUserContext = createContext({});
