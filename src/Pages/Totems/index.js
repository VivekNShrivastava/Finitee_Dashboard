import Index from "../../components/AppHearder/Index"
import "./totems.css"
import CustomButton from "../../components/ActiveButton";
import { Input, Table } from "antd";
import { useEffect, useState } from "react";
import gallery from "../../assets/icons/Image Gallery.png"
import cam from "../../assets/icons/SLR Camera.png"
import videocam from "../../assets/icons/Video Camera.png"
import Search from "../../components/SearchonPages/Index";
import axios from "axios";


function Totems() {

    const [click, setClick] = useState(false);
    const [data,setData] =useState();
    const [loading, setLoading] = useState(false);
    // const [array, setArray] = useState([]);

    // useEffect(() =>{
    //     setLoading(true);
    //     axios.post('https://api.finitee.com/admin/listfreeuser')
    //     .then(res => {setData(res.data.ResponseData.Users)})
    //     .catch(err =>console.log(err));
    //     setLoading(false);    
    // } ,[])
    useEffect(() => {
        setLoading(true);

        // axios.post('https://api.finitee.com/admin/listfreeuser', {}, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // })



    
        axios.post('https://api.finitee.com/admin/listfreeuser', {}, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                setData(res.data.ResponseData.Users);
                setLoading(false); // Move setLoading(false) here
            })
            .catch(err => {
                console.log(err);
                setLoading(false); // Move setLoading(false) here as well
            });
    }, []);
    




    const addusers = () => {
        setClick(!click);

    }

    const [description, setDescription] = useState('');

    const handleChange = (event) => {
        setDescription(event.target.value);
    };

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
    
  
   

    return <>
        <Index />
        <div className="title_dashboard">
            <div className="vertical_line"></div>
            <div className="title"><h1 className="titleh1">Totem</h1></div>
        </div>

        <div className="totem_buttons">
            <button className="totem_button">Create Totem</button>
            <button className="totem_button">Remove Totem</button>
            <button className="totem_button">Restore Totem</button>
            <button className="totem_button">Block Usrs fr..</button>
            <button className="totem_button">Delete a reply f..</button>
            <button className="totem_button">Restore a reply f..</button>
        </div>

        <div className="manual_add">
           <Search></Search>

         
            <div className="add_acc">
                <button onClick={addusers}>Add Totem</button>
            </div>
        </div>

        <CustomButton name="Active Totem"></CustomButton>

        {click &&
            <form>
            <div className="cretae_totems">
               
                <div className="selectype">
                    <ul>
                        <li >

                            <input type="radio" name="gender" value="Totem"
                                onChange={handleChangeRadio}></input>
                            <label>Totem</label>
                        </li>
                        <li>
                            <input type="radio" name="gender" value="Invite Business"
                                onChange={handleChangeRadio}></input>
                            <label>Invite Business</label>
                        </li>
                        <li>
                            <input type="radio" name="gender" value="Invite Non-Profit"
                                onChange={handleChangeRadio}></input>
                            <label>Invite Non-Profit</label>
                        </li>

                    </ul>
                    {/* <ul>
                    <li>Totem</li>
                    <li>Invite Business</li>
                    <li>Invite Non-Profit</li>
                </ul> */}
                </div>

                <div className="lattitude_longitude">

                    <div className="latitude">
                        <p>Latitude</p>
                        <div className="fill_totem">
                            <div>
                                <Input

                                    type="text"
                                    
                                ></Input>
                            </div>
                            <div>
                                <Input
                                    type="text"
                                ></Input>
                            </div>
                            {/* <div></div> */}

                        </div>
                    </div>


                    <div className="longitude">
                        <p>Longitude</p>
                        <div className="fill_totem">
                            <div>
                                <Input
                                    type="text"
                                    required
                                  
                                ></Input>
                            </div>
                            <div>
                                <Input
                                    type="text"
                                    required
                                ></Input>
                            </div>
                            <div></div>

                        </div>
                    </div>
                </div>
                <div className="Totem_title">
                    <p>Totem Title</p>
                    <input
                        type="text"
                        placeholder=" totem title....."
                        style={{ paddingLeft: '10px' }}
                    ></input>

                    <div className="select_permanent">
                        <div><input type="checkbox" name="isAgree" checked={formData.isAgree}
                        onChange={handleChangeRadio}></input></div>
                        
                        <p>Permanent</p>
                        <p>is agree : {formData.isAgree ? "yes" : "no" }</p>
                    </div>
                </div>


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


                    {/* <div className="description"></div> */}
                </div>



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
            </form>}

        <div className="table">
            <Table
                columns={[
                    {
                        title: 'Check',
                        dataIndex: 'Sr_no',
                        render: (text, record) => (
                            <input type='checkbox'
                            className='checkbox'/>
                        ),
                    },
                    // {
                    //     title: ' ',
                    //     dataIndex: ' ',
                    //     render: (text, record) => (
                    //        <Input type="checkbox">Hii</Input>
                    //     ),
                    // },
                    // {
                    //     title: 'Sr no.',
                    //     dataIndex: 'id',
                      
                    // },
                    {
                        title: 'Totem Type',
                        dataIndex: 'FirstName'
                    },
                    {
                        title: 'Title',
                        dataIndex: 'UserName'
                    },
                    {
                        title: 'Description',
                        dataIndex: 'Email'
                    },

                    {
                        title: 'Date',
                        dataIndex: 'UserName'
                    },

                    {
                        title: 'Latitude',
                        dataIndex: 'LastName'
                    },
                    {
                        title: 'Longitutde',
                        dataIndex: 'PhoneNumber'
                    }
                    ,
                    {
                        title: 'IS Active',
                        dataIndex: 'IsActive'
                    }
                    ,
                    {
                        title: 'Action',
                        dataIndex: 'PhoneNumber'
                    }






                ]}
            loading={loading}
            dataSource={data}
            pagination={{
                pageSize: 4, // Set the number of items per page
               
                showTotal: (total) => `Total ${total} items`, // Display total items
              }}
            ></Table>
        </div>
    </>
}
export default Totems;