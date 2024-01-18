import PropTypes from 'prop-types';
import { useState } from 'react';
import IconLuck from '../../../../components/Icons/IconLuck';
import IconStatistic from '../../../../components/Icons/IconStatistic';

export default function LuckCard({ date, luckType, numbers, amulets = [] }) {
  const [openAmulets, setOpenAmulets] = useState(false);
  const dateLuck = new Date(date);

  function handleOpenAmulets() {
    setOpenAmulets(!openAmulets);
  }

  const style = {
    bg: {
      light: luckType === 'Amuletos' ? 'bg-green_light' : 'bg-blue_light',
      dark: luckType === 'Amuletos' ? 'bg-green_dark' : 'bg-blue_dark',
    },
    text: {
      light: luckType === 'Amuletos' ? 'text-green_light' : 'text-blue_light',
      dark: luckType === 'Amuletos' ? 'text-green_dark' : 'text-blue_dark',
    },
    fill: {
      dark: luckType === 'Amuletos' ? 'fill-green_dark' : 'fill-blue_dark',
    },
  };

  return (
    <li
      className={`${style.bg.light} ${style.text.dark} rounded-lg p-4 flex flex-col items-center gap-4`}
    >
      <div className="flex justify-between w-full">
        <span className="text-xs">
          {dateLuck.toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </span>
        <span className="text-xs">
          {luckType === 'Amuletos' ? (
            <IconLuck size={16} className={style.fill.dark} />
          ) : (
            <IconStatistic size={16} className={style.fill.dark} />
          )}
        </span>
      </div>
      <ul className="flex gap-4">
        {numbers.map((number) => (
          <li
            key={number}
            className={`${style.bg.dark} w-8 h-8 rounded-full flex justify-center items-center text-white text-sm`}
          >
            {number < 10 ? 0 + String(number) : number}
          </li>
        ))}
      </ul>
      {amulets.length > 0 && (
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
      )}
    </li>
  );
}

LuckCard.propTypes = {
  date: PropTypes.string.isRequired,
  luckType: PropTypes.string.isRequired,
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  amulets: PropTypes.arrayOf(PropTypes.string),
};
LuckCard.defaultProps = {
  amulets: [],
};
