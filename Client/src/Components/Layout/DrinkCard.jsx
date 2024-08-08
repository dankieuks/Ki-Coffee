// src/components/DrinkCard.js
import React from 'react';

const DrinkCard = ({ drink }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg m-4">
      <div className="p-4">
        <div className="text-xs bg-red-500 text-white rounded-full px-2 py-1 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">Giảm {drink.discount}%</div>
        <img src={drink.image} alt={drink.name} className="w-full h-48 object-cover" />
        <div className="mt-4">
          <h2 className="text-xl font-bold">{drink.name}</h2>
          <p className="text-gray-600">{drink.description}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-red-500 font-bold text-lg">{drink.salePrice}đ</span>
            <span className="text-gray-500 line-through">{drink.originalPrice}đ</span>
          </div>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-600">Yêu thích</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
