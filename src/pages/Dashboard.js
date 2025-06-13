import React, { useState } from 'react';
import VitalCard from '../components/VitalCard';
import PatientFilter from '../components/PatientFilter';
import TimeRangeFilter from '../components/TimeRangeFilter';
import RealTimeChart from '../components/RealTimeChart';
import CriticalAlertPanel from '../components/CriticalAlertPanel';

const Dashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [timeRange, setTimeRange] = useState('1h');
  const [criticalAlerts] = useState([
    { id: 1, patient: 'John Doe', vital: 'Heart Rate', value: '125 BPM', time: '2 mins ago' },
    { id: 2, patient: 'Jane Smith', vital: 'Blood Pressure', value: '150/95 mmHg', time: '5 mins ago' }
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Healthcare Management</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Last updated: {new Date().toLocaleTimeString()}</span>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full">
              Refresh
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="w-full md:w-1/3">
                <PatientFilter 
                  selectedPatient={selectedPatient} 
                  onSelectPatient={setSelectedPatient} 
                />
              </div>
              <div className="w-full md:w-1/3">
                <TimeRangeFilter 
                  timeRange={timeRange} 
                  onChangeTimeRange={setTimeRange} 
                />
              </div>
              <div className="w-full md:w-1/3 flex justify-end">
                <button className="bg-green-100 hover:bg-green-400 text-gray-800 px-4 py-2 rounded-full w-full md:w-auto">
                  Export Data
                </button>
              </div>
            </div>
          </div>

          {criticalAlerts.length > 0 && (
            <CriticalAlertPanel alerts={criticalAlerts} className="mb-6" />
          )}

          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <RealTimeChart 
                patientId={selectedPatient} 
                vitalType="heartRate" 
                timeRange={timeRange}
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <RealTimeChart 
                patientId={selectedPatient} 
                vitalType="bloodPressure" 
                timeRange={timeRange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <VitalCard 
              title="Heart Rate" 
              value="72" 
              unit="BPM" 
              trend="up" 
              change="+2" 
              status="normal"
            />
            <VitalCard 
              title="Blood Pressure" 
              value="120/80" 
              unit="mmHg" 
              trend="down" 
              change="-5" 
              status="normal"
            />
            <VitalCard 
              title="Oxygen Saturation" 
              value="98" 
              unit="%" 
              trend="stable" 
              status="normal"
            />
            <VitalCard 
              title="Temperature" 
              value="37.2" 
              unit="°C" 
              trend="up" 
              change="+0.3" 
              status="warning"
            />
          </div>

          <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Respiratory Rate</h3>
              <div className="h-64">
                <RealTimeChart 
                  patientId={selectedPatient} 
                  vitalType="respiratoryRate" 
                  timeRange={timeRange}
                />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Events</h3>
              <div className="overflow-y-auto max-h-64">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Event</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Value</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">10:32 AM</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">Medication Administered</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">Ibuprofen</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">09:45 AM</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">Nurse Check-in</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">Routine</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">08:30 AM</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">Breakfast</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">Meal</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">07:15 AM</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">Vitals Check</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">Normal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Healthcare Dashboard. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;