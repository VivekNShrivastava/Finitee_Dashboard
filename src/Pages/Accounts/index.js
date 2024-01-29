
import { Table, Button } from "antd";
import "./accounts.css"

import Index from "../../components/AppHearder/Index.js"
import { CloseOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react";
import Dropdown from "../../components/DropDown/Dropdown.js";
import Search from "../../components/SearchonPages/Index.js";
import Userpopup from "../UserAccPopup/index.js"
import axios from "axios";
import { handelactiveedit, handeldeleteresotre } from "../../controllers/freeuser.js";
import BusinessAcc from "../../components/BusinessAccUsers/BusinessAcc.js";
import NonProfitusers from "../../components/NonProfitUsers/NonProfitusers.js";



function Accounts(props) {
    const pageSize = 4;
    const [selected, setSelected] = useState("choose country");
    const [data, setData] = useState([]);
    const [click, setClick] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [buttonpopup, setButtonpopup] = useState(false)
    const [reasonpopup, setReasonpopup] = useState(false)
    const [selectedUserData, setSelectedUserData] = useState(null);
    const [freeusers, setfreeusers] = useState(false);
   
    const [showbuttonactive, setShowbuttonactive] = useState(false);
    const [isActive, setIsActive] = useState(null);
    const [isDeleted, setIsDeleted] = useState(null);
    const [deletedRows, setDeletedRows] = useState([]);
    const [reason, setReason] = useState("");
    const [activeButton, setActiveButton] = useState(null);
    const [showfreeusers, setShowfreeusers] = useState(true);
    const [showbusinessusers, setShowbusinessusers] = useState(false);
    const [showNonprofitusers, setShowNonprofitusers] = useState(false);
    const [user, setUser] = useState("")
    const [todo, setTodo] = useState("")
    const [option, setOption] = useState("")
    const [reasons, setreasons] = useState("")
    const [showdefaultreason , setShowDefaultReason]=useState(true)



    useEffect(() => {
        const fetchData = async () => {
            setfreeusers(true)
            try {

                setLoading(true);


                const payload = isActive !== null ? { isActive } : {};
                const response = await axios.post('https://api.finitee.com/admin/listfreeuser', payload, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                setData(response.data.ResponseData.Users);
console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
                setLoading(false);
            } catch (error) {
                console.error('Error fetching users:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [isActive]);




    const fetchdeletesUsers = async (isDeleted) => {
        try {
            setLoading(true);

            const payload = isDeleted !== null ? { isDeleted } : {};
            console.log("Payload value", payload);

            const response = await axios.post('https://api.finitee.com/admin/listfreeuser', payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            setData(response.data.ResponseData.Users);
            console.log("hhhhh", data)
            setLoading(false);
            setIsDeleted(!isDeleted);
        } catch (error) {
            console.error('Error fetching users:', error);

        }
    };


    const fetchUsers = async (isActive) => {
        console.log("yyyyyyyyyyyyyyyyyyyyyyyy", isActive)
        try {
            setLoading(true);

            const payload = isActive !== null ? { isActive } : {};
            const response = await axios.post('https://api.finitee.com/admin/listfreeuser', payload);
            setData(response.data.ResponseData.Users);

            setLoading(false);
          
            // setfreeusers(isActive);
        } catch (error) {
            console.error('Error fetching users:', error);
        }

    };


    const addusers = () => {
        setClick(!click);

    }

    const handelsubmit = () => {
        alert("yes submitted")
    }


    const handleRowClick = (record) => {

        console.log('Row Clicked:', record);
        setSelectedUserData(record);
        setButtonpopup(true);

    };



    const showAllFreeusers = async () => {

        try {
            setShowbuttonactive(true);
            setShowbusinessusers(false);
            setShowNonprofitusers(false);
            setShowfreeusers(true);
            setfreeusers(true)

            setLoading(true);
            setActiveButton(null); 
            const payload = {};
            const response = await axios.post('https://api.finitee.com/admin/listfreeuser', payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            setData(response.data.ResponseData.Users);
            const users = response.data.ResponseData.Users;


            setLoading(false);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };




    const showAllBusinessUsers = () => {
        setShowfreeusers(false);
        setShowbuttonactive(false);
        setShowbusinessusers(true);
        setShowNonprofitusers(false);
        setfreeusers(false)
    }

    const showAllNonProfitusers = () => {
        setShowNonprofitusers(true);
        setShowbusinessusers(false);
        setShowfreeusers(false);
        setShowbuttonactive(false);
        setfreeusers(false)
    }




    const handelcolorchange = (e, Id, option, todo, reason) => {
        console.log("myyyyyyyyyyyyyyyyyyyyyyyyyyyyy", todo)
        setOption(option);
        setTodo(todo);
        setUser(Id);
        setreasons(reason);
        setReasonpopup(true);
        setfreeusers(false);
        setReason("")
        e.stopPropagation();
    

        if(todo){
            setShowDefaultReason(false)
          
        }
        else{
            setShowDefaultReason(true)
        }

    };



    const handelpostreq = () => {

        const payload = {
            Id: user,
            option: option,
            todo: todo,
            reason: reason
        };

        console.log("my reasonsssssssssss is ", payload.todo)
        handelactiveedit(payload)
            .then((res) => {
                console.log("I am clicked with id ", res.Id);
                console.log("option is ", res.option);
                console.log("action is ", res.todo);

            })
            .catch((error) => {
                console.error("Error in handelcolorchange:", error);
            });

        handeldeleteresotre(payload)
            .then((res) => {
                console.log("I am clicked with id ", res.Id);
                console.log("option is ", res.option);
                console.log("action is ", res.todo);
            })
            .catch((error) => {
                console.error("Error in handelcolorchange:", error);
            });

setReasonpopup(false)


    }
 const handeldeleteaccount = (e, Id, option, todo ,reason) => {
        setOption(option);
        setTodo(todo);
        setUser(Id);
        setreasons(reason);
        setReasonpopup(true);
        setReason("")
        e.stopPropagation();

        if(todo){
            setShowDefaultReason(true)
           
          
        }
        else{
            setShowDefaultReason(false)
        }
 }

    const handleDefaultReasonClick = (defaultReason) => {

        setReason(defaultReason);
   
    };


    return <>


        <Index />
        <div className="title_dashboard">
            <div className="vertical_line"></div>
            <div className="title"><h1 className="titleh1">Accounts</h1></div>
        </div>


        <div className="Account_holdersSelect">
            <button className={`freeusersall ${freeusers ? 'freeuser' : ''}`} onClick={showAllFreeusers} >Free Users Acc</button>
            <button onClick={showAllBusinessUsers}>Business Acc</button>
            <button onClick={showAllNonProfitusers}>Non-Profit Acc</button>
            <button >Modify Acc</button>
            <button>Restore Acc</button>
            <button>Frozen Acc</button>


        </div>
        {showbuttonactive && <div>
            <button
                className={`activebutton${activeButton === 'active' ? 'active' : ''}`}
                onClick={async (hiii) => {
                    setIsActive(true);
                    setActiveButton('active');
                    fetchUsers(true);

                }}
            >
                Active Users
            </button>
            <button
                className={`InActivebutton ${activeButton === 'inactive' ? 'inactive' : ''}`}
                onClick={async () => {
                    setIsActive(false);
                    setActiveButton('inactive');
                    fetchUsers(false);

                }}
            >
                Inactive Users
            </button>

            <button
                className={`delete_button ${activeButton === 'delete' ? 'delete' : ''}`}
                onClick={async () => {

                    setIsDeleted(true);
                    setActiveButton('delete');
                    fetchdeletesUsers(true);

                }}

            >
                Deleted Users
            </button>

        </div>


        }
        <div className="manual_add">
            <Search></Search>

            <div className="add_acc">
                <button onClick={addusers}>Add a User account</button>
            </div>
        </div>

        {click && <div className="Accountfilling_section" >
            <form onSubmit={handelsubmit}
            >
                <div className="detailrow1">
                    <div>
                        <p>First name</p>
                        <input
                            className="input_name"
                            type="text"
                            required
                            style={{ paddingLeft: '20px', paddingTop: '5px' }}
                            autoFocus>

                        </input>
                    </div>
                    <div>
                        <p>Last name</p>
                        <input
                            className="input_name"
                            type="text"
                            style={{ paddingLeft: '20px', paddingTop: '5px' }}
                            required>

                        </input>
                    </div>
                    <div>
                        <p>Country</p>

                        <Dropdown selected={selected} setSelected={setSelected}></Dropdown>

                        {/* <input
                     className="input_name"
                        type="dropdown">
                    </input> */}
                    </div>
                    <div>
                        <p>Date-Of-Birth</p>
                        <input
                            className="input_name"
                            type="date"
                            style={{ paddingLeft: '20px', paddingTop: '5px' }}
                            required>
                        </input>
                    </div>
                </div>


                <div className="detailrow2">
                    <div>
                        <p>Username</p>
                        <input
                            className="input_name"
                            type="text"
                            style={{ paddingLeft: '20px', paddingTop: '5px' }}
                            required>

                        </input>
                    </div>
                    <div>
                        <p>Email</p>
                        <input
                            className="input_name"
                            type="email"
                            style={{ paddingLeft: '20px', paddingTop: '5px' }}
                            required
                        >

                        </input>
                    </div>
                    <div>
                        <p>Phone</p>
                        <input
                            className="input_name"
                            type="tel"

                            required>
                        </input>
                    </div>

                </div>
                <button>save</button>
            </form>
        </div>
        }

        {showfreeusers &&
            <div className="table">

                <Table
                    columns={[

                        {
                            title: 'Sr no',
                            dataIndex: 'Sr_no',
                            render: (text, record, index) => (currentPage - 1) * pageSize + index + 1,
                        },
                        {
                            title: 'First Name',
                            dataIndex: 'FirstName'
                        },
                        {
                            title: 'Last Name',
                            dataIndex: 'LastName'
                        },
                        {
                            title: 'User Name',
                            dataIndex: 'UserName'
                        },
                        {
                            title: 'Email',
                            dataIndex: 'Email'
                        },
                        {
                            title: 'Country',
                            dataIndex: 'country'
                        },
                        {
                            title: 'Phone no',
                            dataIndex: 'PhoneNumber'
                        },
                        {
                            title: 'DOB.',
                            dataIndex: 'DateOfBirth'
                        },
                        {
                            title: 'Craeted date',
                            dataIndex: 'createddate'
                        },

                        {
                            title: 'Active/InActive',
                            dataIndex: 'UF',
                            render: (text, record) => (
                                <>
                                    <Button onClick={(e) => handelcolorchange(e, record.Id, "Active", !record.IsActive, reason)} className={record.IsActive ? "Active-button" : "InActive-button"}>
                                        {record.IsActive ? "Active" : "Inactive"}

                                    </Button>
                                    <p>{record.IsActive}</p>


                                </>

                            )
                        },

{
                            title: 'Delete Acc',
                            dataIndex: 'ip',
                            render: (text, record) => (
                                <Button
                                    className={`delete_button ${isDeleted ? 'restore_button' : ''}`}
                                    onClick={(e) => handeldeleteaccount(e, record.Id, "Delete", !record.IsDeleted, reason)}
                                    type="danger"
                                >
                                    {record.IsDeleted ? 'Restore' : 'Delete'}
                                </Button>
                            ),
                        },
]}
                    loading={loading}
                    dataSource={data.map((item) => ({ ...item, key: item.Id, Sr_no: Index + 1 }))}
                    pagination={{
                        pageSize,
                        onChange: (page) => setCurrentPage(page), // Set the number of items per page

                        showTotal: (total) => `Total ${total} items`, // Display total items
                    }}
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: () => handleRowClick(record),
                        };
                    }}

                ></Table>



            </div>}

        <div>

            <Userpopup trigger={buttonpopup} setTrigger={setButtonpopup}
                userData={selectedUserData}
            />



        </div>

{reasonpopup &&
            <div className="reasons_main" >
                 <CloseOutlined className="close-reasons" onClick={() => setReasonpopup(false)}/>
                 
                <div className="allreasons">
                    {showdefaultreason &&
                <ul className="default_reasons">
                    <li onClick={() => handleDefaultReasonClick("Threatening Content")}>Threatening Content</li>
                    <li onClick={() => handleDefaultReasonClick("Spam")}>Spam</li>
                    <li onClick={() => handleDefaultReasonClick("Targeted Harassment")}>Targeted Harassment</li>

                </ul>}

                <input
                    className="reason_input"
                    type="text"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    style={{ paddingLeft: '20px', paddingTop: '3px' }}
                    placeholder="Enter reason"
                />
                <div className="sendreason">
                <button onClick={handelpostreq}>Send Reason</button>
                </div>
                
                </div>

                
              
            </div>

        }
   {showbusinessusers && <BusinessAcc />
        }

        {showNonprofitusers &&
            <NonProfitusers></NonProfitusers>
        }


    </>
}
export default Accounts;