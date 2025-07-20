/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';

// interface INode {
//   nama: string;
//   jabatan: string;
//   alamat: string;
//   children?: INode[];
// }

interface ICardOrgProps {
  nama: string;
  jabatan: string;
  asal: string;
  foto: string;
}

const CardOrg: React.FC<ICardOrgProps> = ({ nama, jabatan, asal, foto }) => {
  return (
    <div className="group relative h-full w-full">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#EA222B] to-red-600 opacity-0 blur transition-all duration-300 group-hover:opacity-30" />

      <div className="relative h-full overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 group-hover:shadow-2xl">
        <div className="relative h-20 bg-gradient-to-r from-[#EA222B] to-red-600">
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

          <div className="absolute right-4 top-4 h-8 w-8 rounded-full bg-white/20" />
          <div className="absolute right-8 top-8 h-4 w-4 rounded-full bg-white/10" />
        </div>

        <div className="relative -mt-12 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#EA222B] to-red-600 opacity-30 blur-lg transition-all duration-300 group-hover:opacity-50" />

            <div className="relative h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-white to-gray-50 p-1 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
              <img
                src={foto}
                alt={nama}
                className="h-full w-full rounded-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="absolute bottom-1 right-1 h-6 w-6 rounded-full border-2 border-white bg-green-500 shadow-lg" />
          </div>
        </div>

        <div className="px-6 pb-8 pt-4 text-center">
          <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#EA222B]">
            {nama}
          </h3>

          <p className="mb-3 text-base font-semibold text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
            {jabatan}
          </p>

          <div className="mb-4 flex items-center justify-center text-sm text-gray-500">
            <svg className="mr-1 h-4 w-4 text-[#EA222B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-medium">{asal}</span>
          </div>

          <div className="mx-auto h-1 w-12 rounded-full bg-gradient-to-r from-[#EA222B] to-red-600 opacity-60 transition-all duration-300 group-hover:w-16 group-hover:opacity-100" />

          <div className="mt-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <button className="inline-flex items-center rounded-full bg-gradient-to-r from-[#EA222B] to-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>Contact</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EA222B] to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[#EA222B] opacity-0 transition-all duration-300 group-hover:opacity-60" />
      <div className="absolute -bottom-1 -left-1 h-2 w-2 rounded-full bg-[#EA222B] opacity-0 transition-all duration-300 group-hover:opacity-40" />
    </div>
  );
};

export default CardOrg;
