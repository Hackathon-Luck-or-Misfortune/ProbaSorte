import PropTypes from 'prop-types';
import { useState } from 'react';

export default function LuckCard({ date, luckType, numbers, amulets }) {
  const [openAmulets, setOpenAmulets] = useState(false);

  function handleOpenAmulets() {
    setOpenAmulets(!openAmulets);
  }

  const style = {
    bg: {
      light: luckType === 'Amuletos' ? 'bg-blue_light' : 'bg-green_light',
      dark: luckType === 'Amuletos' ? 'bg-blue_dark' : 'bg-green_dark',
    },
    text: {
      light: luckType === 'Amuletos' ? 'text-blue_light' : 'text-green_light',
      dark: luckType === 'Amuletos' ? 'text-blue_dark' : 'text-green_dark',
    },
  };

  return (
    <li
      className={`${style.bg.light} ${style.text.dark} rounded-lg p-4 flex flex-col items-center gap-4`}
    >
      <div className="flex justify-between w-full">
        <span className="text-xs">{date}</span>
        <span className="text-xs">{luckType}</span>
      </div>
      <ul className="flex gap-4">
        {numbers.map((number) => (
          <li
            key={number}
            className={`${style.bg.dark} w-8 h-8 rounded-full flex justify-center items-center text-white text-sm`}
          >
            {number}
          </li>
        ))}
      </ul>

      <div className="w-full">
        <button
          type="button"
          onClick={handleOpenAmulets}
          className="block text-xs font-bold mb-2"
        >
          Detalhes ⬇
        </button>
        {openAmulets && (
          <ul className="w-full flex flex-wrap gap-2.5 text-xs">
            {amulets.map((amulet) => (
              <li key={amulet}>{amulet}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

LuckCard.propTypes = {
  date: PropTypes.string.isRequired,
  luckType: PropTypes.string.isRequired,
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  amulets: PropTypes.arrayOf(PropTypes.string).isRequired,
};
// theme: PropTypes.string.isRequired,
