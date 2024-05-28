import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <section id="how-it-works" className="p-10 text-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Let's get started !</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white border rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <Link to={'/register-student'}>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">For Students</h3>
          </Link>
          <p className="text-gray-600">
            Register, log in, create or view complaints, and check your monthly bills.
          </p>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <Link to={'/register-warden'}>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">For Wardens</h3>
          </Link>
          <p className="text-gray-600">
            Log in to resolve or escalate complaints and manage leaves.
          </p>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          <Link to={'/register-accountant'}>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">For Accountants</h3>
          </Link>
          <p className="text-gray-600">Log in to add and manage monthly bills.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
