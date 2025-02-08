import React from 'react';
import { doSignOut } from '../../firebase/auth';

const AdminDashboard = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="font-bold text-xl">Admin Dashboard</p>
            
            <button
                onClick={doSignOut}
                className="mt-4 px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition duration-300"
            >
                Logout
            </button>
        </div>
    );
};

export default AdminDashboard;