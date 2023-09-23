// UserDashboard.js
import React from 'react';
import CertificateForm from './CertificateForm';
import CertificateList from './CertificateList';
import CertificateValidation from './CertificateValidation';

function UserDashboard({ userAddress }) {
    return (
        <div>
            <CertificateForm />
            <CertificateList userAddress={userAddress} />
            <CertificateValidation />
        </div>
    );
}

export default UserDashboard;
