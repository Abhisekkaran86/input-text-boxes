import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PassportValidationLogic from './Component/PassportValidation/PassportValidationLogic.jsx'
import AadhaarValidation from './Component/Adhar/AadhaarValidation.jsx'
import PanValidation from './Component/Pancard/PanValidation.jsx'
import DrivingLicenseValidation from './Component/DrivingLicense/DrivingLicenseValidation.jsx'
import ElectionIdValidation from './Component/electionID/ElectionIdValidation .jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ElectionIdValidation/>
    <PassportValidationLogic/>
    <AadhaarValidation/>
     <PanValidation/> 
    <DrivingLicenseValidation/>
    
  </StrictMode>,
)
