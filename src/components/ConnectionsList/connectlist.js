import { SearchOutlined } from "@ant-design/icons";
import './connectlist.css'
import { CloseOutlined } from '@ant-design/icons';
import user from "../../assets/images/user.png"


function connectlist (props) {


    return (props.show) ? (

        <div className="showconnections">
           
          <div className='main-connectview-div'>
          <CloseOutlined className="close-connects" onClick={()=> props.showclose(false)}
          style={{ fontSize: '23px' }}
          />



          <div className="connectsShow-section">
            <div className="specific-connect">
                <img src={user} alt="connecterimg"></img>
                <div className="username">
                    <p className="connecter-username">UserName</p>
                    <p className="connecter-fullname">Full Name</p>
                </div>
                <button>Connected</button>
            </div>
            <div className="specific-connect">
                <img src={user} alt="connecterimg"></img>
                <div className="username">
                    <p className="connecter-username">UserName</p>
                    <p className="connecter-fullname">Full Name</p>
                </div>
                <button>Connected</button>
            </div>
            <div className="specific-connect">
                <img src={user} alt="connecterimg"></img>
                <div className="username">
                    <p className="connecter-username">UserName</p>
                    <p className="connecter-fullname">Full Name</p>
                </div>
                <button>Connected</button>
            </div>
          </div>
        

          </div>
        </div>
    ) : "";
}

export default connectlist;