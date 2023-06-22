import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/twebheatlogo.png.png";
import ReorderIcon from '@mui/icons-material/Reorder';
import { useNavigate } from "react-router-dom";
import '../Styles/NavBar.css'



function NavBar() {
    const [openLinks, setOpenLinks] = useState(false);

    const reOrderButton = () => {
        setOpenLinks(!openLinks)
    }

    const Navigate = useNavigate()

    const Home = () => {
        Navigate("/")
    }

    return (

        <div className="Navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={logo} onClick={Home} alt="Logo" />
                <div className="hiddenLinks">
                    <NavLink to="/"> Home </NavLink>
                    <NavLink to="Offers"> Offers </NavLink>
                    <NavLink to="Men"> Men </NavLink>
                    <NavLink to="Women"> Women </NavLink>
                    <NavLink to="Kids"> Kids </NavLink>
                    <NavLink to="Sport"> Sport </NavLink>
                    <NavLink to="About"> About </NavLink>
                    <NavLink to="Contact"> Contact </NavLink>
                </div>
            </div>
            <div className="rightSide">
                <NavLink to="/"> Home </NavLink>
                <NavLink to="Offers"> Offers </NavLink>
                <NavLink to="Men"> Men </NavLink>
                <NavLink to="Women"> Women </NavLink>
                <NavLink to="Kids"> Kids </NavLink>
                <NavLink to="Sport"> Sport </NavLink>
                <NavLink to="About"> About </NavLink>
                <NavLink to="Contact"> Contact </NavLink>
                <button className="ReorderBut" onClick={reOrderButton}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default NavBar