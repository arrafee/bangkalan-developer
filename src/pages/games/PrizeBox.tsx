import React, { useState, useEffect } from 'react';

interface PrizeBoxProps {
  className?: string;
}

const PrizeBox: React.FC<PrizeBoxProps> = ({ className = '' }) => {
  const [prizes, setPrizes] = useState<string[]>([]);
  const [revealedBoxes, setRevealedBoxes] = useState<boolean[]>(Array(72).fill(false));
  const [showModal, setShowModal] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState<string>('');
  const [selectedBoxNumber, setSelectedBoxNumber] = useState<number>(0);

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

  const initializeGame = () => {
    const shuffledPrizes = shuffleArray(defaultPrizes);

    setPrizes(shuffledPrizes);
    setRevealedBoxes(Array(72).fill(false));
  };

  const handleBoxClick = (index: number) => {
    if (revealedBoxes[index]) return; // Already revealed

    const newRevealedBoxes = [...revealedBoxes];

    newRevealedBoxes[index] = true;
    setRevealedBoxes(newRevealedBoxes);

    const prize = prizes[index] || 'Hadiah kosong';

    setSelectedPrize(prize);
    setSelectedBoxNumber((index % 12) + 1); // Show 1-12 based on position
    setShowModal(true);
  };

  const handleShuffle = () => {
    const shuffledPrizes = shuffleArray(defaultPrizes);

    setPrizes(shuffledPrizes);
    setRevealedBoxes(Array(72).fill(false));
  };

  const handleReset = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Reset permainan dan acak ulang hadiah?')) {
      initializeGame();
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleClaimPrize = () => {
    // eslint-disable-next-line no-alert
    alert(`Hadiah diklaim: ${selectedPrize}`);
    setShowModal(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <div
      className={`flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 p-8 text-slate-100 ${className}`}
    >
      <div className="w-full">
        {/* Header */}
        <header className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h1 className="text-xl font-semibold">Game Kotak Hadiah — Total 72 Kotak (1–12 × 6)</h1>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleShuffle}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white transition-colors hover:bg-white/10"
            >
              Acak Hadiah
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-lg border border-white/20 bg-transparent px-3 py-2 text-slate-400 transition-colors hover:bg-white/5"
            >
              Reset
            </button>
          </div>
        </header>

        {/* Grid */}
        <main>
          <div className="mb-4 grid gap-2.5 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12">
            {Array.from({ length: 72 }, (_, index) => (
              <div
                key={index}
                onClick={() => handleBoxClick(index)}
                className={`
                  flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border
                  border-white/5 p-4 transition-all duration-200 hover:-translate-y-1 hover:transform hover:shadow-2xl
                  ${
                    revealedBoxes[index]
                      ? 'transform-none cursor-default bg-gradient-to-r from-purple-600 to-blue-500 text-slate-900'
                      : 'bg-gradient-to-b from-slate-800 to-slate-700 hover:shadow-black/60'
                  }
                `}
              >
                <div className="text-lg font-bold tracking-wide">#{(index % 12) + 1}</div>
                <div className={`mt-2 text-xs ${revealedBoxes[index] ? 'text-slate-900/90' : 'text-slate-400'}`}>
                  {revealedBoxes[index] ? prizes[index] || 'Hadiah kosong' : 'Klik untuk buka'}
                </div>
              </div>
            ))}
          </div>

          <footer className="text-center text-sm text-slate-400">
            Klik salah satu dari 72 kotak untuk membuka hadiah. Nomor 1–12 diulang 6 kali dengan hadiah acak.
          </footer>
        </main>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-slate-900/60 to-slate-900/85 backdrop-blur-sm">
            <div className="w-[92%] max-w-md rounded-xl bg-white p-5 text-center text-slate-900 shadow-2xl">
              <div className="mb-3 text-sm text-slate-600">Kotak nomor {selectedBoxNumber}</div>
              <div className="my-3 text-lg font-bold">{selectedPrize}</div>
              <div className="mb-4 text-sm text-slate-600">Selamat! Tekan Klaim jika mau mencatat hadiah ini.</div>
              <div className="flex justify-center gap-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="rounded-lg border border-slate-200 bg-slate-100 px-4 py-2 text-slate-700 transition-colors hover:bg-slate-200"
                >
                  Tutup
                </button>
                <button
                  type="button"
                  onClick={handleClaimPrize}
                  className="rounded-lg border border-slate-300 bg-transparent px-4 py-2 text-slate-600 transition-colors hover:bg-slate-50"
                >
                  Klaim
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

PrizeBox.defaultProps = {
  className: '',
};

export default PrizeBox;
