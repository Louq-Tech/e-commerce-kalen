import { ArrowUp, ArrowDown, Circle, AlertTriangle, HeartPulse } from "lucide-react";

const VitalCard = ({ title, value, unit, trend, change, status }) => {
  const statusColors = {
    normal: 'bg-emerald-50/80 text-emerald-600',
    warning: 'bg-amber-50/80 text-amber-600',
    critical: 'bg-rose-50/80 text-rose-600'
  };

  const statusIcons = {
    normal: <HeartPulse className="w-3 h-3" />,
    warning: <AlertTriangle className="w-3 h-3" />,
    critical: <AlertTriangle className="w-3 h-3" />
  };

  const trendIcons = {
    up: <ArrowUp className="w-3 h-3" />,
    down: <ArrowDown className="w-3 h-3" />,
    stable: <Circle className="w-2.5 h-2.5" />
  };

  const trendColors = {
    up: 'text-rose-500',
    down: 'text-emerald-500',
    stable: 'text-gray-400'
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-sm ring-1 ring-gray-100 hover:ring-gray-200 transition-all">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xs font-medium text-gray-400 tracking-wider">{title}</h3>
          <p className="text-2xl font-semibold mt-1.5">
            {value} <span className="text-sm font-normal text-gray-400/90">{unit}</span>
          </p>
        </div>
        <span className={`flex items-center gap-x-1 px-2.5 py-1 rounded-full text-[0.7rem] font-medium tracking-wide ${statusColors[status] || statusColors.normal}`}>
          {statusIcons[status]} {status.toUpperCase()}
        </span>
      </div>
      <div className="mt-4 flex items-center gap-x-1">
        <span className={`flex items-center ${trendColors[trend] || trendColors.stable}`}>
          {trendIcons[trend]} <span className="ml-0.5 text-sm">{change || ''}</span>
        </span>
        <span className="text-xs text-gray-400 ml-1.5">vs previous</span>
      </div>
    </div>
  );
};

export default VitalCard;