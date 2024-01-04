import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { generalServiceData } from "./generalData";
// import AC from "./ac";
// import Tyre from "./tyre";
// import Denting from "./denting";
// import Doorstep from "./doorstep";
// import Checkup from "./checkup";
// import General from "./general";
// import PPF from "./ppf";
// import Battery from "./battery";

// import general from '../../assets/icons/general.png'
import ServicesComponent from "./ServicesComponent";
import { dentingServiceData } from "./denting";
import { acServiceData } from "./ac";
import { doorstepServiceData } from "./doorstep";
import { batteryServiceData } from "./battery";
import { checkupServiceData } from "./checkup";
import Headersub from "../../pages/Header/header2";
import Footer from "../../pages/Footer/footer";


const tabComponents = [
  generalServiceData,
  dentingServiceData,
  acServiceData,
  checkupServiceData,
  batteryServiceData,
  doorstepServiceData,
  

];

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);
  const [userSelectedData, setUserSelectedData] = React.useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
console.log(userSelectedData);
  return (
    <>
     <Headersub/>
    <Box sx={{  width: 'auto', margin: '1rem 2rem',bgcolor: "background.paper", boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="General Service" 
        //   sx={{
        //     backgroundColor: value === 0 ? '#1e0c60' : 'inherit',
        //     color: value === 0 ? '#ffffff' : 'inherit',}}
        />
        <Tab label="Denting & Painting" />
        <Tab label="AC Service" />
        <Tab label="Car Checkup Service" />
        <Tab label="Battery Service" />
        <Tab label="Tyre Service" />
        <Tab label="Doorstep Service" />
        <Tab label="PPF & Ceramic Coating" />
      </Tabs>

    </Box>
    <ServicesComponent serviceData={tabComponents[value]}  key={value} setUserSelectedData={setUserSelectedData}/>
    <Footer/>
    </>
  );
}
