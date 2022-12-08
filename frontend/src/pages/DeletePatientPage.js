import React from 'react'
import DeletePatient from '../components/DeletePatient/DeletePatient';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function DeletePatientPage() {
    return (
        <div>
            <Navbar />
            <DeletePatient />
            <Footer />
        </div>
    );
}

export default DeletePatientPage