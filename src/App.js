import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Applicants from './components/Applicants/Applicants';
import ApplicantsData from './components/Applicants/Applicantsapi';
import MiddleContent from './components/Middle/MiddleContent';
const App = () => {
  return (
    <div className = "main-body">
      <Navbar />
      <MiddleContent />
      <Applicants ApplicantsData={ApplicantsData}/>
    </div>
  )
}

export default App
