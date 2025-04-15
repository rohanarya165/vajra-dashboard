// components/AssetCards.jsx
import { MoreHorizontal, ArrowRight, BarChart3, AlertCircle, Network } from 'lucide-react';

const AssetCards = () => {
  const cards = [
    {
      icon: <BarChart3 className="w-4 h-4 text-blue-600" />,
      iconBg: 'bg-blue-100',
      title: 'Assets',
      value: '487',
    },
    {
      icon: <AlertCircle className="w-4 h-4 text-red-600" />,
      iconBg: 'bg-red-100',
      title: 'Not Working',
      value: '24',
    },
    {
      icon: <AlertCircle className="w-4 h-4 text-orange-600" />,
      iconBg: 'bg-orange-100',
      title: 'Discarded',
      value: '18',
    },
    {
      icon: <Network className="w-4 h-4 text-green-600" />,
      iconBg: 'bg-green-100',
      title: 'Department',
      value: '12',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4"
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${card.iconBg}`}>
            {card.icon}
          </div>
          <div>
            <p className="text-sm text-gray-500">{card.title}</p>
            <p className="text-xl font-bold text-gray-900">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssetCards;