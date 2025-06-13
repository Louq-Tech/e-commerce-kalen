const CriticalAlertPanel = ({ alerts, className }) => {
  return (
    <div className={`bg-red-50 border-l-4 border-red-500 p-4 ${className}`}>
      <div className="flex">
        <div className="flex-shrink-0">
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">Critical Alerts ({alerts.length})</h3>
          <div className="mt-2 text-sm text-red-700">
            <ul className="list-disc pl-5 space-y-1">
              {alerts.map(alert => (
                <li key={alert.id}>
                  <span className="font-semibold">{alert.patient}</span>: {alert.vital} at {alert.value} ({alert.time})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriticalAlertPanel