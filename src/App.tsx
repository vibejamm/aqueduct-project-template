import React from 'react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Aqueduct Project</h1>
        <p className="text-gray-600 mb-8">
          This is your starting point. Edit this file to build your application.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">Getting Started</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>See SETUP_INSTRUCTIONS.md to customize this template</li>
            <li>Read docs/LOCAL_DEVELOPMENT_GUIDE.md for development setup</li>
            <li>Run firebase emulators:start in a separate terminal</li>
            <li>Check docs/GOVERNANCE_SYSTEM.md for commit guidelines</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default App;