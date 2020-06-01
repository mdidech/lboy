import React from "react";
import { FaAppleAlt, FaFish, FaBaby, FaCoffee } from "react-icons/fa";
import { GiVacuumCleaner, GiCookingPot } from "react-icons/gi";
export const linkData = [
  {
    id: 1,
    text: "Boissons",
    path: "/products/boissons",
    icon: <FaCoffee className='icon' />,
  },
  {
    id: 2,
    text: "Fruits & Légumes",
    path: "/products/fruits_legumes",
    icon: <FaAppleAlt className='icon' />,
  },
  {
    id: 3,
    text: "Poissons et Viandes",
    path: "/products/poissons_viandes",
    icon: <FaFish className='icon' />,
  },
  {
    id: 4,
    text: "Entretien",
    path: "/products/entretien",
    icon: <GiVacuumCleaner className='icon' />,
  },
  {
    id: 5,
    text: "Cuisine",
    path: "/products/cuisine",
    icon: <GiCookingPot className='icon' />,
  },
  {
    id: 6,
    text: "Bébé",
    path: "/products/bebe",
    icon: <FaBaby className='icon' />,
  },
];
