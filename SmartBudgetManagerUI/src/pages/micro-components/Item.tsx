import {  } from "../../styles/sideMenu.css";


export default function Item(props:any) {
    return(
            <li>
                <div className="side-menu">
                    <button 
                        className="side-menu-btn"
                        onClick ={props?.onMenuItemClick}>
                        {props?.title} ^
                    </button>   
                </div>
            </li>
    );
};