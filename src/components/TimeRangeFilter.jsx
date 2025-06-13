import { ChevronDown, Clock } from "lucide-react";

const TimeRangeFilter = ({ timeRange, onChangeTimeRange }) => {
  const options = [
    { value: '1h', label: 'Last hour' },
    { value: '6h', label: 'Last 6 hours' },
    { value: '24h', label: 'Last 24 hours' }
  ];

  return (
    <div className="space-y-1">
      <label htmlFor="time-range-filter" className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
        <Clock className="w-3.5 h-3.5" />
        <span>TIME RANGE</span>
      </label>
      <div className="relative">
        <select
          id="time-range-filter"
          className="w-full pl-3 pr-8 py-2 text-sm rounded-lg border border-gray-200 bg-white/90 backdrop-blur-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all appearance-none cursor-pointer"
          value={timeRange}
          onChange={(e) => onChangeTimeRange(e.target.value)}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-2.5 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
};

export default TimeRangeFilter;