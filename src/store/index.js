import create from "zustand";

export const useStore = create((set) => ({
  points: 10,
  attributes: [
    {
      name: "Força",
      abbr: "FOR",
      value: 0,
      race: 0,
      bonus: 0,
      total: 0,
      cost: 0,
    },
    {
      name: "Destreza",
      abbr: "DES",
      value: 0,
      race: 0,
      bonus: 0,
      total: 0,
      cost: 0,
    },
    {
      name: "Constituição",
      abbr: "CON",
      value: 0,
      race: 0,
      bonus: 0,
      total: 0,
      cost: 0,
    },
    {
      name: "Inteligência",
      abbr: "INT",
      value: 0,
      race: 0,
      bonus: 0,
      total: 0,
      cost: 0,
    },
    {
      name: "Sabedoria",
      abbr: "SAB",
      value: 0,
      race: 0,
      bonus: 0,
      total: 0,
      cost: 0,
    },
    {
      name: "Carisma",
      abbr: "Car",
      value: 0,
      race: 0,
      bonus: 0,
      total: 0,
      cost: 0,
    },
  ],
  updateAttributes: (attributeName, value) =>
    set(() => ({ attributes: { [attributeName]: value } })),
}));
