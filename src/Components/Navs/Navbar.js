import React from "react";
import pesa from "../../assets/pesa.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MonitorWeightOutlinedIcon from "@mui/icons-material/MonitorWeightOutlined";
const Navbar = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-evenly absolute inset-x-0 bottom-0 bg-black border-t-2 border-white">
        <AccountCircleOutlinedIcon htmlColor="white" fontSize="large" />
        <img className="h-12" src={pesa} alt="weigth" />
        <MonitorWeightOutlinedIcon htmlColor="white" fontSize="large" />
      </div>
    </>
  );
};

export default Navbar;
