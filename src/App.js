import React from 'react';
import Header from './components/Header';
import UserForm from './components/UserForm';
import MedicineDetails from './components/MedicineDetails';
import MedicineContextProvider from './components/MedicineContextProvider';
import './App.css';

function App() {
  return (
    <div >
      <MedicineContextProvider>
        <Header />
        <UserForm />
        <MedicineDetails />
      </MedicineContextProvider>
    </div>
  );
}

export default App;
