import React from 'react';
import "../components/css/Food.css"
import ListFood from "../components/MenuList/ListFood"

const MenuCard = () => {
  const menuData = [
    { id: 1, nama: 'Beef Aglio', key: "beefAglio" },
    { id: 2, nama: 'Beef Creamy', key: "beefCreamy" },
    { id: 3, nama: 'Chicken Sroom', key: "chickenSroom" },
    { id: 4, nama: 'Chicken Katsu with Rice', key: "chickenKatsu" },
    { id: 5, nama: 'Chicken Tartar', key: "chickenTartar" },
    { id: 6, nama: 'Cireng', key: "cireng" },
    { id: 7, nama: 'Dimsum', key: "dimsum" },
    { id: 8, nama: 'Dotiles', key: "dotiles" },
    { id: 9, nama: 'Fish N Chips', key: "fishNChips" },
    { id: 10, nama: 'Grilled Dory', key: "grilledDory" },
    { id: 11, nama: 'Mie Nyemek', key: "mieNyemek" },
    { id: 12, nama: 'Nasi Sapi', key: "nasiSapi" },
    { id: 13, nama: 'Sphagetti', key: "sphagetti" },
    { id: 14, nama: 'Spicy Butter', key: "spicyButter" },




    // Tambahkan menu lainnya sesuai kebutuhan
  ];

  return (
    <div className='menu-food'>
        <div className="menu-container">
        {menuData.map((menu) => (
            <div key={menu.id} className="menu-card">
            <img src={ListFood[menu.key]} alt={menu.nama} />
            <h3>{menu.nama}</h3>
            </div>
        ))}
        </div>
    </div>
  );
};

export default MenuCard;