import React from 'react';
import "../components/css/Food.css"
import ListBeverages from "../components/MenuList/ListBeverages"

const MenuCard = () => {
  const menuData = [
    { id: 1, nama: 'Affogato', key: "affogato" },
    { id: 2, nama: 'Es Kopi Koti', key: "esKoti" },
    { id: 3, nama: 'Hot Latte', key: "hotLatte" },
    { id: 4, nama: 'Ice Green Tea with Vanilla Cream', key: "iceGreen" },
    { id: 5, nama: 'Milk Based', key: "milkBased" },
    { id: 6, nama: 'Purple Paredise', key: "purple" },
    { id: 7, nama: 'Rock Gummy', key: "rock" },
    { id: 8, nama: 'Vanilla Regal', key: "vanilla" },
    { id: 9, nama: 'Strawberry Rosemary', key: "strawberry" },


    // Tambahkan menu lainnya sesuai kebutuhan
  ];

  return (
    <div className='menu-food'>
        <div className="menu-container">
        {menuData.map((menu) => (
            <div key={menu.id} className="menu-card">
            <img src={ListBeverages[menu.key]} alt={menu.nama} />
            <h3>{menu.nama}</h3>
            </div>
        ))}
        </div>
    </div>
  );
};

export default MenuCard;