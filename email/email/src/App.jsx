import React from "react";

import Menu from "./Component/dashbord/Menu";

// const menuData = [
//   { title: "FEATURES", description: "Apps & Components", options: ["Dashboards", "Pages", "Apps", "Help"] },
//   { title: "ACCOUNTING", description: "Finance & Reporting", options: ["Controls", "Advanced", "Floating Labels"] },
//   { title: "ECOMMERCE", description: "Orders & Delivery", options: ["User Management", "Inbox", "File Manager"] },
//   { title: "AUDIENCE", description: "Customers Directory", options: ["eCommerce", "File Manager"] },
//   { title: "AUDIT", description: "Activities & Logs", options: ["Documentation", "Video Tutorials", "Layout Builder"] },
  
  
  
  
// ];
import Sidebar from "./Component/SideMenu/SideBar"
import InputBox from "./Component/SpkInput/InputBox";
import SPKEmailInputBox from "./Component/SpkInput/SPKEMailInputtBox";
import SPKBaseInputBox from "./Component/SpkInput/InputBox";
import SPKInputPassword from "./Component/SpkInput/SPKInputPassword";
import PasswordInput from "./Component/PasswordValidation/PasswordField";
import SPKAdhar from "./Component/SpkInput/SPKAdhar";
import SPKpanvalidation from "./Component/SpkInput/SPKpanvalidation";
import SPKElectionId from "./Component/SpkInput/SPKElectionId";
import SPKPassport from "./Component/SpkInput/SPKPassport";
import SPKDrivingLicense from "./Component/SpkInput/SPKDrivingLicense";
import SPKRationCardForm from "./Component/SpkInput/SPKRationCardForm";
import SPKDomicileNumber from "./Component/SpkInput/SPKDomicileNumberForm.jsx";
import SPKPropertyRegistration from "./Component/SpkInput/SPKPropertyRegistation.jsx";
import SPKGSTNumber from "./Component/SpkInput/SPKGSTNumber.jsx";
import SPKBusinessRegistration from "./Component/SpkInput/SPKBusinessRegistration.jsx";
import SPKESICCardNumber from "./Component/SpkInput/SPKESICCardNumber.jsx";
import SPKEPFUAN from "./Component/SpkInput/SPKEPF.jsx";
import SPKAyushmanHealthCard from "./Component/SpkInput/SPKAyushmanHealthCard.JSX";

const App = () => {
  return (
    <div className="flex flex-col">
      {/* <Menu menus={menuData} />
      <Sidebar /> */}
      <SPKBaseInputBox value="" />

      <SPKEmailInputBox type="email" name="email" className="border " placeholder="Enter your email"   required={false} />
      <SPKInputPassword type="password" name="password" className="border " placeholder="Enter the Valid password" required={false} />
      <SPKAdhar type="text" name="Adhar" className="border " placeholder="Enter Aadhaar number" required={false} />
      <SPKpanvalidation type="text" name="PANCard" className="border " placeholder="Enter PAN number" required={false} />
      <SPKElectionId type="text" name="Voter_ID" className="border " placeholder="Enter EPIC number" required={false} />
      <SPKPassport type="text" name="Passport_number" className="border " placeholder="Enter Passport number" required={false} />
      <SPKDrivingLicense type="text" name="Driving_License" className="border" placeholder="Enter Driving_License number" required={false}/>
      <SPKRationCardForm type="text" name="RationCard" className="border" placeholder="Enter RationCard number" required={false}/>
      <SPKDomicileNumber type="text" name="DomicileNumber" className="border" placeholder="Enter DomicileNumber number" required={false}/>
      <SPKPropertyRegistration type="text" name="Property" className="border" placeholder="Enter Property_Registration number" required={false}/>
      <SPKGSTNumber type="text" name="GST" className="border" placeholder="Enter Valid GST number" required={false}/>
      <SPKBusinessRegistration type="text" name="CIN" className="border" placeholder="Enter Valid CIN number" required={false}/>
      <SPKESICCardNumber type="text" name="ESICC" className="border" placeholder="Enter Valid ESIC  Number" required={false}/>
      <SPKEPFUAN type="text" name="EPF" className="border" placeholder="Enter Valid EPF  Number" required={false}/>
      <SPKAyushmanHealthCard type="text" name="Ayushman_HealthCard" className="border" placeholder="Enter Valid Ayushman_HealthCard Number" required={false}/>





    </div>
  );
}; 

export default App;



