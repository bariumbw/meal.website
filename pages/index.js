import React, { useState } from 'react';

export default function Home() {
  // 模擬商品資料
  const products = [
    { id: 1, name: '招牌經典牛肉堡', price: 180, description: '多汁牛肉排搭配秘製醬汁', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500' },
    { id: 2, name: '美式脆薯', price: 60, description: '現炸金黃酥脆', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500' },
    { id: 3, name: '冰美式咖啡', price: 75, description: '嚴選阿拉比卡豆', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto shadow-lg relative pb-16">
      
      {/* 頂部狀態欄 */}
      <header className="bg-white p-4 border-b border-gray-100 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          {/* 營業狀態標籤 */}
          <span className="bg-red-100 text-red-600 text-xs font-bold px-2.5 py-1 rounded">
            Closed Today
          </span>
          {/* 取貨方式 */}
          <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded">
            Pick Up
          </span>
        </div>
        
        <div className="flex items-center space-x-3 text-sm text-gray-600">
          <button className="hover:underline font-medium">Store Information</button>
          <span className="border-l h-4 border-gray-350"></span>
          {/* 語系切換 */}
          <button className="border border-gray-300 rounded px-1.5 py-0.5 text-xs font-bold">
            EN
          </button>
        </div>
      </header>

      {/* 中部主要內容區（菜單） */}
      <main className="flex-1 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-4">線上菜單</h2>
        
        {/* 商品列表 */}
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl p-3 flex shadow-sm border border-gray-100">
              {/* 商品圖片 */}
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-24 h-24 object-cover rounded-lg bg-gray-100 flex-shrink-0"
              />
              {/* 商品文字與價格 */}
              <div className="ml-3 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-semibold text-gray-800 text-base">{product.name}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mt-1">{product.description}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-emerald-600 font-bold">${product.price}</span>
                  <button className="bg-emerald-505 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-full hover:bg-gray-800 transition">
                    ＋ 加入
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 底部導覽列 */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 flex justify-around py-2 z-10">
        <button className="flex flex-col items-center text-gray-400 hover:text-gray-800">
          <span className="text-xl">🏠</span>
          <span className="text-xs mt-0.5">Home</span>
        </button>
        <button className="flex flex-col items-center text-emerald-600 font-medium">
          <span className="text-xl">📋</span>
          <span className="text-xs mt-0.5">Menu</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 hover:text-gray-800">
          <span className="text-xl">🛍️</span>
          <span className="text-xs mt-0.5">Orders</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 hover:text-gray-800">
          <span className="text-xl">👤</span>
          <span className="text-xs mt-0.5">Profile</span>
        </button>
      </nav>

    </div>
  );
}
