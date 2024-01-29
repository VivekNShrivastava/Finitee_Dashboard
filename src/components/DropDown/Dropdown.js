import "./Dropdown.css"
import { useState } from "react";
function Dropdown({ selected, setSelected }) {
    const [isActive, setIsActive] = useState(false);
    const options = ['India', 'USA']
    const dropdownButton = () => {
        setIsActive(!isActive);
    }
    return <>
        <div className="dropdown">
            <div className="dropdown-btn"
                onClick={dropdownButton}
            >{selected}
            <span className="fas fa-caret-down"></span>
            
            </div>

            {isActive &&
                <div className="dropdown-content">
                    {options.map(option => (
                        <div 
                        onClick={(e) => { 
                            setSelected(option) ;
                             setIsActive(false);
                            } }
                        className="dropdown-item">
                    <p>{option}</p>

                </div>
                    ))}

            {/* <div className="dropdown-item">

                        <p>USA</p>
                    </div> */}
        </div>}
    </div >

    </>
}

export default Dropdown;