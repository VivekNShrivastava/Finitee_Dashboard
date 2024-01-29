import './postcomments.css'
import user from "../../assets/images/userSquare.png"
import { CloseOutlined } from '@ant-design/icons';

import { useEffect, useState } from 'react';
import axios from "axios";
function PostComment(props) {


    // const {data}=props.data
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showreply, setShowreply] = useState(false)
    const [commentreply, setCommentreply] = useState();
    const [extractedParts, setExtractedParts] = useState([]);
    const [reasonpopup, setReasonpopup] = useState(false)
    const [reason, setReason] = useState("");
    const[isActive,setIsActive]=useState(false);
    const [showdefaultreason , setShowDefaultReason]=useState(true)
    const [user, setUser] = useState("")
    const [todo, setTodo] = useState("")
    const [option, setOption] = useState("")
    const [reasons, setreasons] = useState("")
    const baseurl =process.env.REACT_APP_BASEURL;
    const showreplies = (e, commentId) => {
        setShowreply(true);
        setLoading(true);
        const payload = {
            Id: commentId,
            isActive: true,
            isDeleted: false,
        };

        axios.post(`${baseurl}/Admin/GetPostCommentReplies`, payload, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            setCommentreply(response.data.ResponseData);
          
            // Extract specific parts from each reply
            const parts = response.data.ResponseData.map(reply => {
              const replyTextSplit = reply?.ReplyText.split('@@');
              const displayName = replyTextSplit[3];
              const additionalText = replyTextSplit[4];
              return { displayName, additionalText };
            });
          
            // Update extractedParts state
            setExtractedParts(parts);
            setLoading(false);
            
          })

            .catch(error => {
                console.error('Error fetching comments:', error);
            });
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
    
                if (props.postid && props.viewPost) {
                    const payload = {
                        Id: props.postid,
                        isActive: true,
                        isDeleted: false,
                    };
    
                    const response = await axios.post(`${baseurl}/Admin/ShowCommentsByPostId`, payload, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
    
                    setComments(response.data.ResponseData);
                    
                }
            } catch (error) {
                console.error('Error fetching comments:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
        return () => {
            setComments([]);
            setCommentreply([]);
            setExtractedParts([]);
        };
    

        return () => setCommentreply([]);
    }, [props.postid, props.viewPost]);



    const handelisActivepost=(e,ID,option,todo,reason)=>{
        setOption(option);
        setTodo(todo);
        setUser(ID);
        setreasons(reason);
        setReasonpopup(true)
      
    }


    const handelpostreq=()=>{
        try{
            const payload ={
              Id:user,
              option:option,
              todo:todo,
              reason:reason

            }
            axios.post(`${baseurl}/Admin/InactiveOrDeletePost`, payload, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            
        } catch(error){

        };
        setReasonpopup(false)
    }

    const handleDefaultReasonClick = (defaultReason) => {

        setReason(defaultReason);
   
    };


    return (props.viewPost) ? (

        <div className='full-post-page'>
            <CloseOutlined className="close-comments" onClick={() => props.closepost(false)}
                style={{ fontSize: '23px' }}
            />
            {loading ? (
                <p>Loading...</p>
            ) : (


                <div className='post_mainpages'>
                    <div className='post_mainsquare'>
                        <img

                            className='postopenimg' src={`https://finitee.sgp1.digitaloceanspaces.com/${props.pathimg}`}></img>
                        <div className='postdetails'>
                            <div className="pop-Profileoption">

                                <button onClick={(e)=>handelisActivepost(e,props.postid,"Active",!props.isActive,reason)} className="freezebutton">
                                {!props.isActive ? "Active" : "InActive"}
                                </button>
                                <button onClick={(e)=>handelisActivepost(e,props.postid,"Delete",!props.isDeleted,reason)} className="freezebutton">
                                {!props.isDeleted ? " Delete" : "Restore"}</button>


                            </div>
                            <ul>
                                <li>
                                    <h1>UserName : {props.names}</h1>


                                </li>
                                <li>
                                    <h1>PostDescription : {props.des}</h1>
                                </li>
                                <li>
                                    <h1>Time :</h1>

                                </li>
                                <li>
                                    <h1>Date :</h1>

                                </li>



                            </ul>

                        </div>


                    </div>

                    <div className='comments_div'>
                        <div className='div1'>
                            <h1>Comments</h1>
                            <div className='comments'>


                                {comments.map((comment) => (
                                    <div className='usercomments'>
                                        <div>

                                            <h2>{comment.CreatedBy.DisplayName}</h2>
                                            <h1>{comment.CommentText}</h1>
                                            <h3 onClick={(e) => showreplies(e, comment.Id)}>{comment.CommentReplyCount} Reply</h3>


                                        </div>

                                        <div className='actions'>
                                            <button className='activecomment'>Active</button>
                                            <button className='deletecomment'>Delete</button>
                                        </div>
                                    </div>




                                ))}







                            </div>

                        </div>


                        <div className='div2'>
                            <h1>Replies</h1>
                            <div >
                                
                                {extractedParts.map((extracted, index) => (
                                    <div key={index}  className='usercomments'>
                                        <h2 className='repliername'>{extracted.displayName}</h2>
                                        <p>{extracted.additionalText}</p>
                                        
                                        <div className='actions'>
                                            <button className='activecomment'>Active</button>
                                            <button className='deletecomment'>Delete</button>
                                        </div>
                                    </div>
                                    
                                ))}
                            </div>
                            
                            
                        </div>



                    </div>



                </div>)}
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

        </div>

    ) : "";
}

export default PostComment;