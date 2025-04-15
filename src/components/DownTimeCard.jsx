// components/DowntimeCards.jsx
import { MoreHorizontal, ArrowRight } from 'lucide-react';

const DowntimeCards = () => {
  const cards = [
    {
      title: 'Cumulative Downtime',
      subtitle: 'Time wasted due to downtime',
      time: '17:45:30',
      iconBg: 'bg-red-100',
      iconDot: 'bg-red-500',
    },
    {
      title: 'User Asset Tracking 2.0',
      subtitle: 'Update tracking for monitoring and maintenance',
      tag: 'New',
      iconBg: 'bg-blue-100',
      team: ['1', '2', '3', '4', '+3'],
      button: 'Learn More',
    },
    {
      title: 'XXXXXXXXXXXXXXXXXX',
      iconBg: 'bg-blue-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-4 shadow-sm flex flex-col justify-between"
        >
          <div className="flex justify-between items-start">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${card.iconBg}`}
            >
              <div className={`w-2 h-2 rounded-full ${card.iconDot || 'bg-blue-500'}`} />
            </div>
            <MoreHorizontal size={16} className="text-gray-400" />
          </div>

          {card.time ? (
            <>
              <h2 className="text-sm mt-4 font-medium text-gray-800">
                {card.title}
              </h2>
              <p className="text-sm text-gray-400">{card.subtitle}</p>
              <p className="text-2xl font-bold mt-2 text-gray-900">{card.time}</p>
            </>
          ) : card.button ? (
            <>
              <div className="flex items-center justify-between mt-4 flex-wrap gap-y-1">
                <h2 className="text-sm font-medium text-gray-800">
                  {card.title}
                </h2>
                {card.tag && (
                  <span className="ml-2 bg-blue-100 text-xs text-blue-600 px-2 py-1 rounded-lg">
                    {card.tag}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-400 mt-1">{card.subtitle}</p>
              <div className="flex items-center mt-3">
                {card.team.map((t, idx) => (
                  <span
                    key={idx}
                    className={`w-8 h-8 -ml-2 first:ml-0 border-2 border-white rounded-full text-white text-xs font-medium flex items-center justify-center`}
                    style={{
                      backgroundColor: ['#ec4899', '#3b82f6', '#10b981', '#f59e0b', '#e5e7eb'][idx] || '#9ca3af',
                      color: idx === 4 ? '#374151' : 'white',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <button className="mt-4 flex items-center bg-blue-600 text-white px-4 py-2 text-sm rounded-full">
                {card.button}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </>
          ) : (
            <h2 className="text-sm mt-4 font-medium text-gray-800">{card.title}</h2>
          )}
        </div>
      ))}
    </div>
  );
};

export default DowntimeCards;