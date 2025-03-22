import {  } from "../../styles/sideMenu.css";


export default function SubItem(props:any){
    return(
        <li>
            <div className="side-menu">
              <a href={props?.url}>{props?.title}</a>
            </div>
        </li>
);
}