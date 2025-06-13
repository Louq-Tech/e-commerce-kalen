const PatientFilter = ({ selectedPatient, onSelectPatient }) => {
  const patients = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
  ];

  return (
    <div className="space-y-1">
      <label htmlFor="patient-filter" className="text-xs font-medium text-gray-500 uppercase tracking-wider">
        Filter Patients
      </label>
      <div className="relative">
        <select
          id="patient-filter"
          className="w-full pl-3 pr-8 py-2 text-sm rounded-lg border border-gray-200 bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all appearance-none cursor-pointer"
          value={selectedPatient || ''}
          onChange={(e) => onSelectPatient(e.target.value || null)}
        >
          <option value="">All Patients</option>
          {patients.map(patient => (
            <option key={patient.id} value={patient.id}>{patient.name}</option>
          ))}
        </select>
        <svg 
          className="absolute right-2.5 top-2.5 w-4 h-4 text-gray-400 pointer-events-none"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default PatientFilter;