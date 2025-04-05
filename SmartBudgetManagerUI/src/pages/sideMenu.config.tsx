import {  } from "../styles/sideMenu.css";
import Item from "./micro-components/Item";
import SubItem from "./micro-components/SubItem";

function toogleNav(){
   
  let sideBar = document!.getElementById("menuItems");
  if (sideBar!.style.width === "100px") {
    sideBar!.style.width = "0px";
  } else {
    sideBar!.style.width = "100px";
  }
}
function toogleMenuItems(elementId:any){
   
    let sideBar = document!.getElementById(elementId);
    if (sideBar!.style.width === "100px" && sideBar!.style.display=="block") {
      sideBar!.style.width = "0px";
      sideBar!.style.display="none";
    } else {
      sideBar!.style.width = "100px";
      sideBar!.style.display="block";

    }
}
export default function SideMenu() {
    return(
        <>
        <Item title="Show / Hide Menu" onMenuItemClick={toogleNav} url="/"/>
        <div id="menuItems" style={{width:"100px"}}>
            <ul  className="side-menu-container">
                <Item title="Menu 1" onMenuItemClick={()=>toogleMenuItems("subMenuItems1")} url="/"/>
                    <div id="subMenuItems1" style={{width:"100px",display:"none"}}>
                        <ul className="side-menu-container">
                            <SubItem title="Sub Menu 1" url="/"/>
                            <SubItem title="Sub Menu 2" url="/cost"/>
                            <SubItem title="Sub Menu 3" url="/waste"/>
                            <SubItem title="Sub Menu 4" url="/budget"/>
                        </ul>
                    </div>
                <Item title="Menu 2" onMenuItemClick={()=>toogleMenuItems("subMenuItems2")} url="/cost"/>
                    <div id="subMenuItems2" style={{width:"100px",display:"none"}}>
                        <ul className="side-menu-container">
                            <SubItem title="Sub Menu 1" url="/"/>
                            <SubItem title="Sub Menu 2" url="/cost"/>
                            <SubItem title="Sub Menu 3" url="/waste"/>
                            <SubItem title="Sub Menu 4" url="/budget"/>
                        </ul>
                    </div>
                <Item title="Menu 3" onMenuItemClick={()=>toogleMenuItems("subMenuItems3")} url="/waste"/>
                    <div id="subMenuItems3" style={{width:"100px",display:"none"}}>
                        <ul className="side-menu-container">
                            <SubItem title="Sub Menu 1" url="/"/>
                            <SubItem title="Sub Menu 2" url="/cost"/>
                            <SubItem title="Sub Menu 3" url="/waste"/>
                            <SubItem title="Sub Menu 4" url="/budget"/>
                        </ul>
                    </div>
                <Item title="Menu 4" onMenuItemClick={()=>toogleMenuItems("subMenuItems4")} url="/budget"/>
                    <div id="subMenuItems4" style={{width:"100px",display:"none"}}>
                        <ul className="side-menu-container">
                            <SubItem title="Sub Menu 1" url="/"/>
                            <SubItem title="Sub Menu 2" url="/cost"/>
                            <SubItem title="Sub Menu 3" url="/waste"/>
                            <SubItem title="Sub Menu 4" url="/budget"/>
                        </ul>
                    </div>
            </ul>
        </div>
            
        </>
    );
};