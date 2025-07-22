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
    <div
      className="group relative mx-5 max-w-sm transform cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl lg:mx-0"
      onClick={() => navigate(`/event/${slug}`)}
    >
      <img
        className="aspect-square w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-110"
        src={pamflet}
        alt={nama_event}
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-black/60 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h5 className="mb-2 line-clamp-1 text-xl font-bold leading-tight text-white">{nama_event}</h5>
        <div className="mb-2 flex items-center gap-2 text-sm text-gray-200">
          <MdDateRange className="h-4 w-4 text-[#DAAF49]" />
          <span className="font-medium">{tanggal_posting}</span>
        </div>
        <p className="mb-0 line-clamp-3 text-sm leading-relaxed text-gray-200">{excerp}</p>
      </div>
    </div>
  );
};

export default CardEvent;
