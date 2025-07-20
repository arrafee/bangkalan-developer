/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDateRange } from 'react-icons/md';

interface ICardEventProps {
  nama_event: string;
  pamflet: string;
  tanggal_posting: string;
  excerp: string;
  slug: string;
}

const CardEvent: React.FC<ICardEventProps> = ({ nama_event, pamflet, tanggal_posting, excerp, slug }) => {
  const navigate = useNavigate();

  return (
    <div className="group relative mx-5 max-w-sm transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl lg:mx-0">
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#EA222B] to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative rounded-2xl bg-white">
        <div className="relative overflow-hidden rounded-t-2xl">
          <img
            className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-110"
            src={pamflet}
            alt={nama_event}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="p-6">
          <h5 className="mb-3 line-clamp-2 text-xl font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-[#EA222B]">
            {nama_event}
          </h5>

          <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
            <MdDateRange className="h-4 w-4 text-[#EA222B]" />
            <span className="font-medium">{tanggal_posting}</span>
          </div>

          <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-600">{excerp}</p>

          <button
            type="button"
            onClick={() => navigate(`/event/${slug}`)}
            className="group/btn inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#EA222B] to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span>Selengkapnya</span>
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-[#EA222B] opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
    </div>
  );
};

export default CardEvent;
