import React from 'react';

export interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  topBgColor: string;
  bottomBgColor: string;
  buttonTextColor: string;
  quantity: number;
  onAddToCart: () => void;
  onUpdateQuantity: (delta: number) => void;
}

export function ProductCard({
  name,
  description,
  price,
  imageSrc,
  imageAlt,
  topBgColor,
  bottomBgColor,
  buttonTextColor,
  quantity,
  onAddToCart,
  onUpdateQuantity,
}: ProductCardProps) {
  return (
    <div className="group flex flex-col rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-2xl bg-white font-poppins">
      <div className={`${topBgColor} relative h-72 p-6 flex justify-center items-center`}>
        <img 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-xl" 
          data-alt={imageAlt} 
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
      <div className={`${bottomBgColor} p-6 flex flex-col justify-between text-white grow`}>
        <div>
          <h3 className="text-2xl font-black italic uppercase mb-2 tracking-widest">{name}</h3>
          <p className="text-xs text-white/90 leading-tight">{description}</p>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xl font-bold tracking-wider">{price}</span>
          {quantity > 0 ? (
            <div className={`bg-white h-10 rounded-full flex items-center shadow-md overflow-hidden ${buttonTextColor}`}>
              <button onClick={() => onUpdateQuantity(-1)} className="w-8 h-full flex items-center justify-center hover:bg-black/5 transition-colors">
                <span className="material-symbols-outlined text-[18px]" data-icon="remove">remove</span>
              </button>
              <span className="w-6 text-center font-bold text-sm">{quantity}</span>
              <button onClick={() => onUpdateQuantity(1)} className="w-8 h-full flex items-center justify-center hover:bg-black/5 transition-colors">
                <span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
              </button>
            </div>
          ) : (
            <button 
              onClick={onAddToCart} 
              className={`bg-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform active:scale-95 transform shadow-md ${buttonTextColor}`}
            >
              <span className="material-symbols-outlined text-[20px]" data-icon="shopping_cart">shopping_cart</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
