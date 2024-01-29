import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "./dashboard.css"
import casimg from "../../assets/icons/briefcase.png"
import fileicon from "../../assets/icons/File.png"
import Investmenticon from "../../assets/icons/Investment.png"
import totemicon from "../../assets/icons/Billion.png"
import profileimg from "../../assets/logo/Dashboard.png"
import Linechart from "../chart/LineChart";
import BarChart from "../chart/BarChart";
import { Piechart } from "../chart/PieChart";
import { Wavechart } from "../chart/WaveChart";
function Dashboard() {
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

                <div className="title_dashboard">
                    <div className="vertical_line"></div>
                    <div className="title"><h1 className="titleh1">Dashboard</h1></div>
                </div>
                <div className="horizontal_line"></div>
            </div>
        
    
        </div>
        
        <div className="dashboard_maincontent">
                <div className="cardsmain1">
                    <div className="card">
                        <div className="cardicon">
                            <img src={casimg} alt="caseimage"></img>
                        </div>
                        <div className="cardtopic">
                            <p>Free Users Accounts</p>
                        </div>
                        <div className="cardcalc">
                            <p>932</p>
                        </div>
                    </div>
                    <div className="card">
                    <div className="cardicon">
                            <img src={Investmenticon} alt="caseimage"></img>
                        </div>
                        <div className="cardtopic">
                            <p>Business Accounts</p>
                        </div>
                        <div className="cardcalc">
                            <p>932</p>
                        </div>
                    </div>
                </div>
                <div className="cardsmain1">
                    <div className="card">
                        <div className="cardicon">
                            <img src={fileicon } alt="caseimage"></img>
                        </div>
                        <div className="cardtopic">
                            <p>Non-Profit Users</p>
                        </div>
                        <div className="cardcalc">
                            <p>932</p>
                        </div>
                    </div>
                    <div className="card">
                    <div className="cardicon">
                            <img src={totemicon} alt="caseimage"></img>
                        </div>
                        <div className="cardtopic">
                            <p>Totems</p>
                        </div>
                        <div className="cardcalc">
                            <p>932</p>
                        </div>
                    </div>
                </div>
                <div className="cardsmain1">
                <div className="card1">
                    <div className="visitcount">
              <div className="visitor">
                <p>Visitors</p>
              </div>
              <div className="visitorcount">
                <p>389,90</p>
              </div>
              
              </div>
              <div>
              <Wavechart></Wavechart>
              </div>
         
                </div>
             
        
                </div>
            </div>
            

            <div className="dashboard_maincontent2">
<Linechart></Linechart>
            </div>

            <div className="dashboard_maincontent3">
                <div className="userprofilechart">
                    <p>User Profile</p>
                    <Piechart></Piechart>
                </div>
                <div className="statistics">
                    <div className="linechart">
                        <p>statistics</p>
                        <BarChart></BarChart>
                    </div>
                    <div className="infigures">
                        <p>Weekly</p>

                        <div className="infigures_measures">
                        <div className="infigures_measures1">
                        <h2>This Week</h2>
                        <p>+20%</p>
                        </div>

                        <div className="infigures_measures1">
                        <h2>Last Week</h2>
                        <p>+20%</p>
                        </div>

                        </div>
                        
                        
                      
                    </div>
                </div>
            </div>

       
    </>
}
export default Dashboard;