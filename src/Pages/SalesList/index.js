import Header from "../../components/AppHearder/Index"
import Search from "../../components/SearchonPages/Index";
import CustomButton from "../../components/ActiveButton";
import { Input, Table , Button } from "antd";
import { CloseCircleFilled } from '@ant-design/icons';


function Sales() {
    const dummyData = [
        { id: 1,Sr_no :1, FirstName: 'John Doe',LastName:'Doe', Username:'johndoe@me' , email: 'john@example.com' , country:"India" , phone_no:'9702270208' , dob:'28/09/2001',createddate:"28/09/2001" ,UF:'IsActive'  },
        { id: 2,Sr_no :2, FirstName: 'John singh',LastName:'Doe', Username:'johndoe@me' , email: 'john@example.com' , country:"India" , phone_no:'9702270208' , dob:'28/09/2001',createddate:"28/09/2001" ,UF:'InActive'  },
        { id: 3,Sr_no :3, FirstName: 'John gopi',LastName:'Doe', Username:'johndoe@me' , email: 'john@example.com' , country:"India" , phone_no:'9702270208' , dob:'28/09/2001',createddate:"28/09/2001" ,UF:'IsActive' },
        { id: 4,Sr_no :4, FirstName: 'John Doe',LastName:'Doe', Username:'johndoe@me' , email: 'john@example.com' , country:"India" , phone_no:'9702270208' , dob:'28/09/2001',createddate:"28/09/2001" ,UF:'IsActive'  },
        // Add more dummy data as needed
      ];


    
    return <>
        <Header />
        <div className="title_dashboard">

            <div className="title"><h1 className="titleh1">Sales listings</h1></div>
        </div>

        <div className="totem_buttons">
            <button className="totem_button">Sales listings</button>
            <button className="totem_button_terminate">Terminate sales listings</button>
            <button className="totem_button_terminate">Restore sales listings</button>
           

        </div>

        <Search></Search>

<CustomButton name="Active listing"></CustomButton>
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
                            style={{ backgroundColor: record.UF === 'IsActive' ? ' rgba(120, 206, 90, 0.35)' : 'rgba(248, 64, 64, 0.10)',
                            color: record.UF === 'Freeze' ? '#4F45B6' : '#F84040'}}
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
                            <CloseCircleFilled style={{ fontSize: '30px' , color:'red' , cursor:'pointer' }}/>
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

export default Sales;