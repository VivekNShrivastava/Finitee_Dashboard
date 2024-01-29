import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import profileimg from "../../assets/logo/Dashboard.png"

function AppHeader() {
    return <>
    <div className="dashboard_main">
            <div className="dashboard_header">
                <div className="search_admin">
                    <div className="searchbar">
                        <Input className="custom-input" placeholder=" Search here..." prefix={<SearchOutlined style={{ color: '#1A96D4', marginLeft: '32px', fontSize: '32px' }} />}

                        />
                    </div>

                    <div className="admin_sign">
                        <div className="image">
                            <img src={profileimg} alt="proimg"></img>
                        </div>

                        <div className="name_role">
                            <h1> Vivek Shrivastava</h1>
                            <h2>Admin</h2>
                        </div>

                    </div>


                </div>

             
            </div>
   </div>
    </>
}
export default AppHeader;