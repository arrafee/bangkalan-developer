import React, { useState, useRef, useEffect } from 'react';
import logoIcon from '@assets/images/logo-icon.png';

interface SpinWheelsProps {
  className?: string;
}

interface Prize {
  id: number;
  name: string;
  color: string;
  textColor: string;
}

const SpinWheels: React.FC<SpinWheelsProps> = ({ className = '' }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState<Prize | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [currentPrizes, setCurrentPrizes] = useState<Prize[]>([]);
  const wheelRef = useRef<HTMLDivElement>(null);

  // Hadiah dengan probabilitas yang sama seperti PrizeBox
  const defaultPrizes = [
    ...Array(60).fill('Stiker'),
    ...Array(17).fill('Gantungan kunci satu sisi'),
    ...Array(5).fill('Gantungan kunci dua sisi'),
  ];

  // Fisher-Yates shuffle algorithm
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  };

  // Fungsi untuk membuat hadiah wheel dari array yang sudah diacak
  const createWheelPrizes = () => {
    const shuffledPrizes = shuffleArray(defaultPrizes);

    return shuffledPrizes.slice(0, 8).map((prize, index) => ({
      id: index + 1,
      name: prize,
      color: ['#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'][index],
      textColor: index === 2 ? '#000000' : '#ffffff',
    }));
  };

  // Inisialisasi hadiah wheel
  const initializePrizes = () => {
    setCurrentPrizes(createWheelPrizes());
  };

  // Gunakan currentPrizes jika ada, fallback ke prizes default
  const prizes = currentPrizes.length > 0 ? currentPrizes : createWheelPrizes();

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedPrize(null);

    // Generate random rotation (multiple full rotations + random angle)
    const fullRotations = 5 + Math.random() * 5; // 5-10 full rotations
    const randomAngle = Math.random() * 360;
    const totalRotation = fullRotations * 360 + randomAngle;

    setRotation((prev) => prev + totalRotation);

    // Calculate which prize will be selected
    const anglePerPrize = 360 / prizes.length;
    const normalizedAngle = (360 - (randomAngle % 360)) % 360;
    const prizeIndex = Math.floor(normalizedAngle / anglePerPrize);
    const selectedPrizeIndex = prizeIndex >= prizes.length ? 0 : prizeIndex;

    // Show result after animation
    setTimeout(() => {
      setSelectedPrize(prizes[selectedPrizeIndex]);
      setShowModal(true);
      setIsSpinning(false);
    }, 3000); // Match with CSS animation duration
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPrize(null);
  };

  const handleClaimPrize = () => {
    // eslint-disable-next-line no-alert
    alert(`Selamat! Anda mendapatkan: ${selectedPrize?.name}`);
    setShowModal(false);
    setSelectedPrize(null);
  };

  const handleShuffle = () => {
    initializePrizes();
    // eslint-disable-next-line no-alert
    alert('Hadiah telah diacak ulang!');
  };

  const handleReset = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Reset permainan dan acak ulang hadiah?')) {
      setRotation(0);
      setSelectedPrize(null);
      setShowModal(false);
      setIsSpinning(false);
      initializePrizes();
    }
  };

  useEffect(() => {
    initializePrizes();
  }, []);

  return (
    <div
      className={`flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 p-8 text-slate-100 ${className}`}
    >
      <div className="w-full max-w-4xl">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Game Roda Putar Hadiah</h1>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleShuffle}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white transition-colors hover:bg-white/10"
            >
              Acak Hadiah
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-lg border border-white/20 bg-transparent px-4 py-2 text-slate-400 transition-colors hover:bg-white/5"
            >
              Reset
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center gap-8">
          {/* Spinner Container */}
          <div className="relative">
            {/* Outer Ring */}
            <div className="absolute inset-0 animate-pulse rounded-full border-4 border-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" />

            {/* Spinner Circle */}
            <div
              ref={wheelRef}
              className="relative h-64 w-64 rounded-full border-4 border-white/30 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: isSpinning ? 'transform 3s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none',
                filter: isSpinning ? 'blur(1px)' : 'none',
              }}
            >
              {/* Spinner segments */}
              {prizes.map((prize, index) => {
                const angle = (360 / prizes.length) * index;
                const nextAngle = (360 / prizes.length) * (index + 1);
                const midAngle = (angle + nextAngle) / 2;

                return (
                  <div
                    key={prize.id}
                    className="absolute inset-0 origin-center"
                    style={{
                      transform: `rotate(${angle}deg)`,
                      clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos((angle * Math.PI) / 180)}% ${50 + 50 * Math.sin((angle * Math.PI) / 180)}%, ${50 + 50 * Math.cos((nextAngle * Math.PI) / 180)}% ${50 + 50 * Math.sin((nextAngle * Math.PI) / 180)}%)`,
                    }}
                  >
                    <div
                      className="flex h-full w-full items-center justify-center"
                      style={{
                        backgroundColor: prize.color,
                        transform: `rotate(${midAngle - angle}deg)`,
                      }}
                    >
                      <span className="text-center text-xs font-semibold leading-tight" style={{ color: prize.textColor }}>
                        {/* {prize.name} */}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Circle */}
            <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/50 bg-gradient-to-br from-white to-gray-200 shadow-xl">
              <img src={logoIcon} alt="Logo" className="h-12 w-12 object-contain" />
            </div>

            {/* Pointer */}
            <div className="absolute left-1/2 top-0 z-10 h-0 w-0 -translate-x-1/2 -translate-y-2">
              <div className="h-0 w-0 border-b-[24px] border-l-[12px] border-r-[12px] border-b-red-500 border-l-transparent border-r-transparent drop-shadow-lg" />
            </div>

            {/* Sparkle effects */}
            {isSpinning && (
              <>
                <div className="absolute left-1/4 top-1/4 h-2 w-2 animate-ping rounded-full bg-yellow-400" />
                <div className="absolute right-1/4 top-1/3 h-1 w-1 animate-ping rounded-full bg-pink-400" />
                <div className="absolute bottom-1/4 left-1/3 h-1.5 w-1.5 animate-ping rounded-full bg-blue-400" />
                <div className="absolute bottom-1/3 right-1/3 h-1 w-1 animate-ping rounded-full bg-green-400" />
              </>
            )}
          </div>

          {/* Spin Button */}
          <div className="relative">
            <button
              type="button"
              onClick={handleSpin}
              disabled={isSpinning}
              className={`relative transform rounded-full px-12 py-6 text-xl font-bold transition-all duration-300 ${
                isSpinning
                  ? 'scale-95 cursor-not-allowed bg-slate-600 text-slate-400'
                  : 'bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white hover:scale-105 hover:from-purple-700 hover:via-pink-600 hover:to-red-600 hover:shadow-2xl hover:shadow-purple-500/50'
              }`}
            >
              <span className="relative z-10 flex items-center gap-3">
                {isSpinning ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Memutar...
                  </>
                ) : (
                  <>
                    <span className="text-2xl">🎯</span>
                    PUTAR SPINNER!
                    <span className="text-2xl">🎯</span>
                  </>
                )}
              </span>

              {/* Button glow effect */}
              {!isSpinning && (
                <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 opacity-50 blur-lg" />
              )}
            </button>

            {/* Button particles */}
            {isSpinning && (
              <>
                <div className="absolute -left-2 -top-2 h-3 w-3 animate-bounce rounded-full bg-yellow-400" />
                <div className="absolute -right-3 -top-1 h-2 w-2 animate-bounce rounded-full bg-pink-400" />
                <div className="absolute -bottom-2 -left-1 h-2.5 w-2.5 animate-bounce rounded-full bg-blue-400" />
                <div className="absolute -bottom-1 -right-2 h-2 w-2 animate-bounce rounded-full bg-green-400" />
              </>
            )}
          </div>

          {/* Instructions */}
          <div className="text-center text-slate-400">
            <p className="text-sm">
              Klik tombol &quot;PUTAR SPINNER!&quot; untuk memulai permainan dan dapatkan hadiah menarik!
            </p>
          </div>
        </main>

        {/* Modal */}
        {showModal && selectedPrize && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-slate-900/60 to-slate-900/85 backdrop-blur-sm">
            <div className="w-[92%] max-w-lg rounded-2xl bg-white p-8 text-center text-slate-900 shadow-2xl">
              {/* Confetti effect */}
              <div className="absolute -left-4 -top-4 h-8 w-8 animate-ping rounded-full bg-yellow-400" />
              <div className="absolute -right-6 -top-2 h-6 w-6 animate-ping rounded-full bg-pink-400" />
              <div className="absolute -bottom-4 -left-2 h-7 w-7 animate-ping rounded-full bg-blue-400" />
              <div className="absolute -bottom-2 -right-4 h-5 w-5 animate-ping rounded-full bg-green-400" />

              {/* Modal content */}
              <div className="relative z-10">
                <div className="mb-6 animate-bounce text-6xl">🎉</div>
                <div className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-bold text-transparent">
                  Selamat!
                </div>
                <div className="mb-6 rounded-xl border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 p-4">
                  <div className="mb-2 text-2xl font-bold text-purple-700">{selectedPrize.name}</div>
                  <div className="text-sm text-purple-600">Anda berhasil mendapatkan hadiah ini!</div>
                </div>

                {/* Prize icon */}
                <div className="mb-6 text-4xl">🎁</div>

                <div className="flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="rounded-xl border-2 border-slate-200 bg-slate-100 px-6 py-3 text-slate-700 transition-all duration-200 hover:scale-105 hover:bg-slate-200"
                  >
                    Tutup
                  </button>
                  <button
                    type="button"
                    onClick={handleClaimPrize}
                    className="rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 px-6 py-3 font-bold text-white transition-all duration-200 hover:scale-105 hover:from-purple-700 hover:via-pink-600 hover:to-red-600 hover:shadow-lg hover:shadow-purple-500/50"
                  >
                    🎯 Klaim Hadiah
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

SpinWheels.defaultProps = {
  className: '',
};

export default SpinWheels;
