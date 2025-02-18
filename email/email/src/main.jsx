import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx';
// import PassportValidationLogic from './Component/PassportValidation/PassportValidationLogic.jsx';
// import AadhaarValidation from './Component/Adhar/AadhaarValidation.jsx';
// import PanValidation from './Component/Pancard/PanValidation.jsx';
// import DrivingLicenseValidation from './Component/DrivingLicense/DrivingLicenseValidation.jsx';
// import ElectionIdValidation from './Component/electionID/ElectionIdValidation.jsx'; // Fixed typo in the filename
// import SearchableSelect from './Component/Searchbox/SearchableSelect.jsx';
// import DivComponent from './Component/Div/DivComponent.jsx';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import Google from './Component/Div/google.jsx';
// import RationCardValidation from './Component/Ration Card/RationCardValidation .jsx';
// import Parrent from './Component/National Population Register/Parrent.jsx'
// import Validation from './Component/IncomeTaxReturns/Validation.jsx';
// import GSTForm from './Component/GST/GSTForm.jsx';
// import EPFPassbook from './Component/EPF/EPFPassbook.jsx';
// import PropertyCertificate from './Component/Property validation/PropertyCertificate.jsx';
// import EncumbranceCertificate from './Component/Encumbrance Certificate/EncumbranceCertificate.jsx';
// import LandOwnershipDocument from './Component/Land Ownership Documents/LandOwnershipDocument.jsx';
// import BirthCertificateForm from './Component/Birth Certificate/BirthCertificateForm.jsx';
// import DeathCertificate from './Component/DeathCertificate/DeathCertificate.jsx';
import PainScore from './Component/PainScoreBar/PainScore';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <GoogleOAuthProvider clientId="578400542326-ra80oh1hsrfj7nhsq330s3p1bbq0qrch.apps.googleusercontent.com"> */}

    {/* <App />  */}
    {/* <ElectionIdValidation /> */}
    {/* <PassportValidationLogic /> */}
    {/* <AadhaarValidation /> */}
    {/* <PanValidation /> */}
    {/* <DrivingLicenseValidation /> */}
    {/* <SearchableSelect /> */}
    {/* <DivComponent /> */}
    {/* <Google /> */}
    {/* </GoogleOAuthProvider> */}
    {/* <RationCardValidation />

    <Parrent />
    <Validation />
    <GSTForm />
    <EPFPassbook/>
    <PropertyCertificate/>
    <EncumbranceCertificate/>
    <LandOwnershipDocument/>
  <BirthCertificateForm/>
  <DeathCertificate/> */}
  <PainScore />


   


  </StrictMode>
);
