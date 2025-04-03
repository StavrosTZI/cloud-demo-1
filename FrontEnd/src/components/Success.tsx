import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, UserPlus } from 'lucide-react';

function Success() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Profile Created Successfully!
        </h1>
        <p className="text-gray-600 mb-8">
          Your profile has been created and saved successfully.
        </p>
        <button
          onClick={() => navigate('/')}
          className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          <UserPlus className="w-5 h-5" />
          Create Another Profile
        </button>
      </div>
    </div>
  );
}

export default Success;