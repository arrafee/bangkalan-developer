import React from 'react';

interface ICardServiceProps {
  title: string;
  content: string;
  img: string;
}

const CardService: React.FC<ICardServiceProps> = ({ title, content, img }) => {
  return (
    <div className="h-full">
      <div className="relative flex justify-center pt-8">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#EA222B] to-red-600 opacity-20 blur-lg transition-all duration-300 group-hover:opacity-40" />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-50 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
            <img
              src={img}
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
              alt={title}
            />
          </div>
        </div>
      </div>

      <div className="pb-8 pt-6 text-center">
        <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#EA222B]">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
          {content}
        </p>

        <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-[#EA222B] to-red-600 opacity-60 transition-all duration-300 group-hover:w-20 group-hover:opacity-100" />
      </div>
    </div>
  );
};

export default CardService;
