/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaInstagramSquare, FaTelegram } from 'react-icons/fa';
import logo from '@assets/images/logo-png.png';

const Footer: React.FC = () => {
  const _navigate = useNavigate();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-gradient-to-br from-[#EA222B] to-red-600 opacity-10" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-[#EA222B] to-red-600 opacity-5" />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#EA222B] to-red-600 opacity-30 blur" />
                  <img src={logo} className="relative h-16 w-auto" alt="BangkalanDev Logo" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">BangkalanDev</h3>
                  <p className="text-gray-400">Komunitas IT Kabupaten Bangkalan</p>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-gray-300">
                Temui kami di platform media sosial dan komunitas untuk mengikuti berita terbaru, acara, dan proyek-proyek
                menarik yang sedang berjalan.
              </p>

              {/* Newsletter Signup */}
              {/* <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Tetap terhubung dengan kami</h4>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Masukkan email Anda"
                    className="flex-1 rounded-lg bg-gray-800/50 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-[#EA222B]"
                  />
                  <button className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#EA222B] to-red-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <span>Subscribe</span>
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div> */}
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-white">Temukan Kami</h4>

              <div className="space-y-4">
                {[
                  {
                    icon: FaLinkedin,
                    name: 'LinkedIn',
                    handle: 'Bangkalan Developer',
                    url: 'https://www.linkedin.com/company/bangkalan-developer/',
                    color: 'hover:text-blue-400',
                  },
                  {
                    icon: FaInstagramSquare,
                    name: 'Instagram',
                    handle: '@bangkalan.dev',
                    url: 'https://www.instagram.com/bangkalan.dev/',
                    color: 'hover:text-pink-400',
                  },
                  {
                    icon: FaTelegram,
                    name: 'Telegram',
                    handle: 't.me/bangkalandeveloper',
                    url: 'https://t.me/bangkalandeveloper',
                    color: 'hover:text-blue-500',
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-4 rounded-xl bg-gray-800/30 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-gray-700/50"
                  >
                    <div
                      className={`rounded-lg bg-gray-700/50 p-3 text-2xl text-gray-400 transition-all duration-300 group-hover:bg-[#EA222B] group-hover:text-white ${social.color}`}
                    >
                      <social.icon />
                    </div>
                    <div>
                      <div className="font-semibold text-white transition-colors duration-300 group-hover:text-[#EA222B]">
                        {social.name}
                      </div>
                      <div className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                        {social.handle}
                      </div>
                    </div>
                    <svg
                      className="ml-auto h-5 w-5 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#EA222B]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50">
          <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <div className="text-center text-gray-400 md:text-left">
                <p>&copy; 2024 BangkalanDev. All rights reserved.</p>
                <p className="text-sm">Made with ❤️ by Bangkalan Developer Community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
