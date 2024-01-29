import Index from "../../components/AppHearder/Index"
import './event.css'
import {  Table , Button } from "antd";
import { CloseCircleFilled } from '@ant-design/icons';
import Search from "../../components/SearchonPages/Index";
import CustomButton from "../../components/ActiveButton";
import gallery from "../../assets/icons/Image Gallery.png"
import cam from "../../assets/icons/SLR Camera.png"
import videocam from "../../assets/icons/Video Camera.png"

import { useState } from "react";

function Events() {

    const [formData, setformData] = useState({
        isAgree: false,
        gender: ""
    })

    const handleChangeRadio = event => {
        const target =event.target
        const name = target.name
        const value = target.type=="checkbox" ? target.checked : target.value
        setformData({
            ...formData,
            [name]:value
        })

        
        // alert(`${name} ${value}`)
    }

    const dummyData = [
        { id: 1,Sr_no :1, FirstName: 'John Doe',LastName:'Doe', Username:'johndoe@me' , email: 'john@example.com' , country:"India" , phone_no:'9702270208' , dob:'28/09/2001',createddate:"28/09/2001" ,UF:'UnFreeze'  },
        { id: 2,Sr_no :2, FirstName: 'John Doe',LastName:'Doe', Username:'johndoe@me' , email: 'john@example.com' , country:"India" , phone_no:'9702270208' , dob:'28/09/2001',createddate:"28/09/2001" ,UF:'Freeze'  },
        { id: 3,Sr_no :3, FirstName: 'John Doe',LastName:'Doe', Username:'johndoe@me' , email: 'john@example.com' , country:"India" , phone_no:'9702270208' , dob:'28/09/2001',createddate:"28/09/2001" ,UF:'UnFreeze' },
        { id: 4,Sr_no :4, FirstName: 'John Doe',LastName:'Doe', Username:'johndoe@me' , email: 'john@example.com' , country:"India" , phone_no:'9702270208' , dob:'28/09/2001',createddate:"28/09/2001" ,UF:'Freeze'  },
        // Add more dummy data as needed
      ];

    const [description, setDescription] = useState('');

    const handleChange = (event) => {
        setDescription(event.target.value);
    };

    const [create, setCreate] = useState(false);
    const handelcreateEvent = () => {
        setCreate(!create)

    }
    return <>
        <Index />

        <div className="title_dashboard">
           
            <div className="title"><h1 className="titleh1">Events</h1></div>
        </div>
        <div className="events_buttons">
            <button className="event_button">Active Events</button>
            <button className="event_button" onClick={handelcreateEvent}>Create Events</button>
            <button className="event_button">Terminate Active Events</button>
            <button className="event_button">Restore Events</button>

        </div>
        <Search></Search>

        <CustomButton name="Active Events"></CustomButton>
        {/* 
        <button className="status">
            <img src={check}></img> Active Events
        </button> */}

        {create && <div className="onclick_createEventBox">

            <div className="title_date">
                <div className="eventtitle">
                    <h1>Event Title</h1>
                    <input type="text" style={{ paddingLeft: '10px' }} placeholder=" event title...."></input>
                </div>
                <div className="eventdate">
                    <h1>Start Date</h1>
                    <input type="date"></input>
                </div>
            </div>



            <div className="event_description">
                <h1>Event Description</h1>
                <div className="description_event">
                    <textarea
                        id="description"

                        rows={5}
                        cols={40}
                        value={description}
                        onChange={handleChange}
                        placeholder="  Enter your description here..."
                        style={{ paddingLeft: '20px', paddingTop: '10px' }}
                    />
                </div>
            </div>


            <div className="event_time">
                <h1>Event Time</h1>
                <div className="event_start">
                    <h1>Start date</h1>
                    <ul className="event_hours">
                        <li> <input type="text" placeholder=" HH " style={{ paddingLeft: '10px' }}></input></li>
                        <li> <input type="text" placeholder=" MM " style={{ paddingLeft: '10px' }}></input></li>
                    </ul>



                    <ul className="event_ampm">
                        <li> <input type="radio"></input>
                            <label>AM</label></li>

                        <li> <input type="radio"></input>
                            <label>PM</label></li>
                    </ul>




                </div>

                <div className="event_start">
                    <h1>End date</h1>
                    <ul className="event_hours">
                        <li> <input type="text" placeholder=" HH " style={{ paddingLeft: '10px' }}></input></li>
                        <li> <input type="text" placeholder=" MM " style={{ paddingLeft: '10px' }}></input></li>
                    </ul>



                    <ul className="event_ampm">
                        <li> <input type="radio"></input>
                            <label>AM</label></li>

                        <li> <input type="radio"></input>
                            <label>PM</label></li>
                    </ul>




                </div>

                
            </div>




            <div className="event_address">
            <div className="totem_description">
                    <p>Totem Description</p>
                    <label htmlFor="description"></label>
                    <textarea
                        id="description"

                        rows={5} // Set the number of visible rows
                        cols={40} // Set the number of visible columns
                        value={description}
                        onChange={handleChange}
                        placeholder="  Enter your description here..."
                        style={{ paddingLeft: '20px', paddingTop: '10px' }}
                    />


                    <div className="description"></div>
                </div>
            </div>
            <div className="add_img">
            <div className="totem_uploads">
                    <ul>
                        <li><img src={cam} alt="cam"></img></li>
                        <li><img src={videocam} alt="cam"></img></li>
                        <li><img src={gallery} alt="cam"></img></li>
                    </ul>

                    <div className="image_section">

                    </div>
                </div>
            </div>



            <div className="viewable">
            <p>Viewabel</p>
                
                    <ul>
                     
                        <li >

                            <input type="radio" name="gender" value="Totem"
                                onChange={handleChangeRadio}></input>
                            <label>All Finitee users</label>
                        </li>
                        <li>
                            <input type="radio" name="gender" value="Invite Business"
                                onChange={handleChangeRadio}></input>
                            <label>Connections Only</label>
                        </li>
                        <li>
                            <input type="radio" name="gender" value="Invite Non-Profit"
                                onChange={handleChangeRadio}></input>
                            <label>No one</label>
                        </li>

                       

                    </ul>
                    <ul>
                    <li>
                        <label>Require Invite Request</label>
                            <input type="checkbox" name="gender" value="Invite Non-Profit"
                                onChange={handleChangeRadio}></input>
                          
                        </li>
                    </ul>
                    {/* <ul>
                    <li>Totem</li>
                    <li>Invite Business</li>
                    <li>Invite Non-Profit</li>
                </ul> */}
                </div>
          
        </div>}


        <div className="table">
            <Table
                columns={[
                    {
                        title: 'Check',
                        dataIndex: 'Sr_no',
                        render: (text, record) => (
                            <input type='checkbox'
                                className='checkbox' />
                        ),
                    },
                    {
                        title: 'Sr no',
                        dataIndex: 'Sr_no'
                    },
                    {
                        title: 'User Type',
                        dataIndex: 'FirstName'
                    },
                    {
                        title: 'User Name',
                        dataIndex: 'LastName'
                    },
                    {
                        title: 'Titel',
                        dataIndex: 'Username'
                    },
                    {
                        title: 'Discription',
                        dataIndex: ' email'
                    },
                    {
                        title: 'Start Date',
                        dataIndex: 'country'
                    },
                    {
                        title: 'Pay',
                        dataIndex: 'phone_no'
                    },
                    {
                        title: 'Pay Type',
                        dataIndex: 'dob'
                    },
                    {
                        title: 'Media File',
                        dataIndex: 'createddate'
                    },

                    {
                        title: 'IsActive/InActive',
                        dataIndex: 'UF',
                        render: (text, record) => (
                            <Button className="delete_button"
                                style={{
                                    backgroundColor: record.UF === 'IsActive' ? ' rgba(120, 206, 90, 0.35)' : 'rgba(248, 64, 64, 0.10)',
                                    color: record.UF === 'Freeze' ? '#4F45B6' : '#F84040'
                                }}
                                type="danger">
                                {record.UF}
                            </Button>
                        ),

                    },
                    {
                        title: 'Viewabel By',
                        dataIndex: 'Username'
                    },
                    {
                        title: ' ',
                        dataIndex: 'ip',
                        render: (text, record) => (
                            <CloseCircleFilled style={{ fontSize: '30px', color: 'red', cursor: 'pointer' }} />
                        ),



                    },






                ]}
                // loading={loading}
                dataSource={dummyData}
                pagination={true}
            ></Table>
        </div>








    </>
}
export default Events;