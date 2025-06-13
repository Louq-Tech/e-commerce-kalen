const RealTimeChart = ({ patientId, vitalType, timeRange }) => {
  // Mock data based on vital type
  const getMockData = () => {
    const now = Date.now();
    const data = [];
    const points = timeRange === '1h' ? 60 : timeRange === '6h' ? 36 : 24;
    
    for (let i = 0; i < points; i++) {
      const timestamp = now - (points - i) * (timeRange === '1h' ? 60000 : timeRange === '6h' ? 600000 : 3600000);
      
      let value;
      if (vitalType === 'heartRate') {
        value = 70 + Math.sin(i/10) * 10 + Math.random() * 5;
      } else if (vitalType === 'bloodPressure') {
        const systolic = 120 + Math.sin(i/8) * 10 + Math.random() * 5;
        const diastolic = 80 + Math.sin(i/8) * 5 + Math.random() * 3;
        value = `${Math.round(systolic)}/${Math.round(diastolic)}`;
      } else {
        value = 16 + Math.sin(i/12) * 2 + Math.random() * 1;
      }
      
      data.push({
        time: new Date(timestamp),
        value: typeof value === 'string' ? value : Math.round(value)
      });
    }
    
    return data;
  };
  
  const data = getMockData();
  const chartTitle = {
    heartRate: 'Heart Rate (BPM)',
    bloodPressure: 'Blood Pressure (mmHg)',
    respiratoryRate: 'Respiratory Rate (breaths/min)'
  }[vitalType] || 'Vital Signs';
  
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{chartTitle}</h3>
      <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">Mock chart for {vitalType}</p>
          <p className="text-sm text-gray-400">Patient: {patientId || 'All'}</p>
          <p className="text-sm text-gray-400">Time range: {timeRange}</p>
          <div className="mt-2">
            <div className="h-32 w-full border-t border-l border-gray-300 relative">
              {data.map((point, i) => (
                <div 
                  key={i}
                  className="absolute bottom-0 w-1 bg-blue-500"
                  style={{
                    left: `${(i / data.length) * 100}%`,
                    height: typeof point.value === 'string' 
                      ? '50%' 
                      : `${Math.min(100, (point.value - 50) / 2)}%`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeChart