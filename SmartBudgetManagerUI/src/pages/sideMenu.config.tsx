import {  } from "../styles/sideMenu.css";
import Item from "./micro-components/Item";

const onMenuItemClick=()=>{
    console.log("Clicked");
    
}
const showMenuOneItem=()=>{
    <ul className="side-menu-container">
        <Item title="Menu 1" onMenuItemClick={onMenuItemClick} url="/"/>
        <Item title="Menu 2" url="/cost"/>
        <Item title="Menu 3" url="/waste"/>
        <Item title="Menu 4" url="/budget"/>
    </ul>
}
export default function SideMenu() {
    return(
        <>
            <ul className="side-menu-container">
                <Item title="Menu 1" onMenuItemClick={onMenuItemClick} url="/"/>
                <Item title="Menu 2" url="/cost"/>
                <Item title="Menu 3" url="/waste"/>
                <Item title="Menu 4" url="/budget"/>
            </ul>
        </>
    );
};