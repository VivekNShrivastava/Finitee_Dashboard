import { Menu } from "antd";
import logo from "../../assets/logo/finitee_logo.png"
import "./sidebar.css";
import img from "../../assets/logo/Dashboard.png"

import { useNavigate } from "react-router-dom";

function SideBar() {

  const navigate = useNavigate()

  return <>
    <div className="sidemenu_main">
      <div className="finitee_logo">
        <img src={logo} alt="logo"></img>

      </div>
      <div className="Sidebar">
        <Menu className="menu"

          onClick={(item) => {
            navigate(item.key);

          }}



          items={[
            {
              label: "Dashboard",
              icon:
                <img className="menu_logo"
                  src={img} alt="img1"
                />
              ,
              // icon: <BorderRightOutlined style={{ fontSize: '30px'}} />
              //   ,
              key: "/dash"
            },
            {
              label: "Accounts",
              icon:
                <img className="menu_logo"
                  src={img} alt="img1"
                />
              ,
              key: "/accounts"
            },
            {
              label: "Totems",
              icon:
                <img className="menu_logo"
                  src={img} alt="img1"
                />
              ,
              key: "/totems"
            },
            {
              label: "User posts",
              icon:
                <img className="menu_logo"
                  src={img} alt="img1"
                />
              ,
              key: "/post"
            },
            {
              label: "Reports",
              icon:
                <img className="menu_logo"
                  src={img} alt="img1"
                />
              ,
              key: "/reports"
            },
            {
              label: "Sales List",
              icon:
                <img className="menu_logo"
                  src={img} alt="img1"
                />
              ,
              key: "/sales"
            },
            {
              label: "Events",
              icon:
                <img className="menu_logo"
                  src={img} alt="img1"
                />
              ,
              key: "/events"
            },
            {
              label: "Service listings",
              icon:
                <img className="menu_logo"
                  src={img} alt="img1"
                />
              ,
              key: "/listings"
            },
            {
              label: "Shopping list",
              icon:
                <img className="menu_logo"
                  src={img} alt="img1"
                />
              ,
              key: "/shoppinglist"
            },
            {
              label: "Admin",
              icon:
                <img className="menu_logo"
                  src={img} alt="img1"
                />
              ,
              key: "/admin"
            }
          ]}
        >
        </Menu>
      </div>
      <div className="sidebar_bottom">
        <Menu className="menu"
          items={[
            {
              label: "Settings",
              icon:
                <img className="menu_logo"
                  src={img} alt="img1"
                />
              ,
              // icon: <BorderRightOutlined style={{ fontSize: '30px'}} />
              //   ,
              key: "/settings"
            },
            {
              label: "Help Center",
              icon:
                <img className="menu_logo"
                  src={img} alt="img1"
                />
              ,
              key: "/help"
            }
          ]}
        >
        </Menu>
      </div>

      <div className="admin">
        <div className="admin_img">

        </div>
        <div className="admin_name">
          <h1>Vivek Shriv...</h1>
          <h2>Admin</h2>
        </div>
      </div>
    </div>
  </>
}
export default SideBar;