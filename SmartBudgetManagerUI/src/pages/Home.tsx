import Content from "./Content";
import SideMenu from "./sideMenu.config";

export default function Home() {
    return(
        <>
        <div style={{display:"flex"}}>
            <SideMenu />
            <Content title="Home"/>
        </div>
        </>
    );
};