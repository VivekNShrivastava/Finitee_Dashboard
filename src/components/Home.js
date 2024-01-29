

import {Space} from "antd" ;
import AppHeader from "./AppHearder/Index";
import SideBar from "./SideBar/Index";
import PageContent from "./PageContent/Index";
import AppFooter from "./AppFooter/Index";


function Home() {
  return <>
    <div className="App">
    {/* <AppHeader></AppHeader> */}
    <Space className="sidemenuandpagecontent">
        <SideBar></SideBar>
        <PageContent></PageContent>
    </Space>
    <AppFooter></AppFooter>
    </div>
    </>
}

export default Home;