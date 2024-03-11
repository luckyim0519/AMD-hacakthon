import {useState, useEffect} from "react"; 


export const NavBar = () => {

    const {activeLink, setActiveLink} = useState('home'); 
    const {scrolled, setScrolled} = useState(false); 


    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }    
    
    return (
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#moredetails">More Details</a></li>
            <li><a href="#projmgmt">Project Management</a></li>
        </ul>  
      );
}