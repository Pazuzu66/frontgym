import React from 'react'
import pesa from "../../assets/pesa.png"

const Navbar = () => {
  return (
    <>
        <div class="flex flex-row justify-center items-start ">
            <div class="flex flex-col">
                <img src={pesa} alt="logo" />
            </div>
        </div>
    </>
  );
}

export default Navbar;