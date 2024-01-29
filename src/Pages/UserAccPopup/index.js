import "./useraccpop.css"
import { useEffect, useState } from "react";
import user from "../../assets/images/user.png";
import Index from "../../components/ConnectionsList/connectlist";
import PostComment from "../../components/PostComments";
import axios from "axios";



function Userpopup(props) {


    const [pop, setpop] = useState(false);
    const [commentshow, setcommentshow] = useState(false);
    const [postview, setPostview] = useState(false);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [traits, setTraits] = useState([]);
    const [postid, setPostId] = useState(null);
    const [paths, setPaths] = useState();
    const [description, setDescription] = useState()
    const [names, setNames] = useState()
    const [isActive1, setIsActive1] = useState()
    const [isDelete, setIsDelete] = useState()
    const [isA, setIsA] = useState(true);
    const [previousPosts, setPreviousPosts] = useState([]);
    const [last, setLast] = useState(false)
    const baseurl =process.env.REACT_APP_BASEURL;




    const handelshow = () => {
        console.log("clicked")
        setcommentshow(true)

    }

    const showclose = () => {

    }



    const showComment = (e, post, path, des, username) => {
        e.stopPropagation();
        setPostview(true);
        setPostId(post.Id);
        setPaths(path);
        setDescription(des)
        setNames(username)
    };

    const { userData } = props;



    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                if (userData && userData.Id) {
                    const payload = {
                        Id: userData.Id,
                        type: 'ALL',
                        isActive: true,
                        isDeleted: false,
                    };


                    const response = await axios.post(`${baseurl}/Admin/ShowPostsByUserId`, payload, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    setPosts(response.data.ResponseData);
                    console.log("i am set to ", posts)
                    console.log("i am set toooooooo ", posts.length)
                    setLoading(false);

                    const traitpaylod = {
                        Id: userData.Id,
                        type: 'TRAIT',
                        isActive: true,
                        isDeleted: false,
                    };
                    const res = await axios.post(`${baseurl}/Admin/ShowPostsByUserId`, traitpaylod, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    setTraits(res.data.ResponseData);
                    console.log("Traits ", traits)
                    console.log("i am set toooooooo ", traits.length)
                    setLoading(false);

                }
            } catch (error) {
                console.error('Error fetching users:', error);
                setLoading(false);
            }
        };



        fetchData();


        return () => {

        };
    }, [userData]);


    // const handledelete=async (status2)=>{
    //     setIsDelete(status2)
    //     try {



    //         const payload = {
    //             Id: userData.Id,
    //             type: 'ALL',
    //             isActive: isActive1,
    //             isDeleted: isDelete,
    //         };

    //         const response = await axios.post(
    //             'https://api.finitee.com/Admin/ShowPostsByUserId',
    //             payload,
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },

    //             }
    //         );

    //         setPosts(response.data.ResponseData);
    //     } catch (error) {
    //         console.error('Error updating isActive:', error);
    //     }
    // }

    const handleme = async (status) => {
        try {
            setIsActive1(status);


            const payload = {
                Id: userData.Id,
                type: 'ALL',
                isActive: status,
                isDeleted: false,
            };

            const response = await axios.post(
                `${baseurl}/Admin/ShowPostsByUserId`,
                payload,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },

                }
            );

            setPosts(response.data.ResponseData);
        } catch (error) {
            console.error('Error updating isActive:', error);
        }
    };





    const handleme1 = async (status) => {
       
        try {
            setIsDelete(status)

            const payload = {
                Id: userData.Id,
                type: 'ALL',

                isDeleted:status,
            };

            const response = await axios.post(
                `${baseurl}/Admin/ShowPostsByUserId`,
                payload,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );


            setPosts(response.data.ResponseData);
        } catch (error) {
            console.error('Error updating isActive:', error);
        }
    };


    // const handleDeleted = () => {
    //     handleme1(true);


    //     setIsDelete(true)

    // };




    return (props.trigger) ? (

        <div className="popup" trigger={pop}>
            {loading ? (
                <p>Loading...</p>
            ) : (


                <div className="popup_inner">

                    <button onClick={() => props.setTrigger(false)}>close</button>


                    <div className="pop-ProfileSection">
                        <div className="pop-Profileimg">
                            {/* <h1>Profile</h1> */}
                            <img className="pro_img" alt="userimg" src={user}></img>


                            <button onClick={() => handelshow(false)} className="connection_button">5.1k Connections</button>




                        </div>
                        <div className="pop_profileinfo">
                            <div className="pop-Profileoption">
                                <button className="show_history">Status</button>
                                <button className="freezebutton">Freeze</button>
                                <button className="delete-button">Delete</button>
                                <button className="editbutton">Edit</button>

                            </div>
                            <div className="pop-Profile_about">
                                <div className="pop_description">
                                    <p>{props.userData.FirstName}</p>
                                </div>
                            </div>
                            <div className="pop-profilemaininfo">
                                <ul>
                                    <li>
                                        <h1>First Name :{props.userData.FirstName}</h1>


                                    </li>
                                    <li>
                                        <h1>UserNmae :{props.userData.UserName}</h1>

                                    </li>
                                    <li>
                                        <h1>User-type: free users</h1>

                                    </li>
                                    {/* <li>
                                    <input className="date_of" type="date"></input>
                                </li> */}
                                </ul>
                                <ul>
                                    <li>
                                        <h1>Last Name :{props.userData.LastName}</h1>


                                    </li>
                                    <li>
                                        <h1>Email :{props.userData.Email}</h1>
                                    </li>
                                    <li>
                                        <h1>Phone Number :{props.userData.PhoneNumber}</h1>

                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>







                    <div className="user_posttraits">
                        <div className="main_post">
                            {/* <button className="main_postbutton">Post</button> */}
                            <button onClick={() => handleme(true)}>Active</button>
                            <button onClick={() => handleme(false)}>Inactive</button>
                            <button onClick={() =>handleme1(true)}>Delete</button>
                            {/* <button onClick={() =>handleme1(false)}>Restore</button> */}




                            <div className="main_post2">
                                {posts && posts.length > 0 ? (
                                    posts.map((post) => (
                                        <div key={post.id} className="post">
                                            {/* <p>{post.CreatedBy.UserName}</p> */}


                                            {post.PostImages && post.PostImages.length > 0 ? (
                                                post.PostImages.map((imagePath, index) => (



                                                    <div className="users_post">

                                                        <div className="user_postSection1">
                                                            <img
                                                                key={index}
                                                                src={`https://finitee.sgp1.digitaloceanspaces.com/${imagePath}`}
                                                                alt={`Post Image ${index + 1}`}
                                                                onClick={(e) => showComment(e, post, imagePath, post.PostDescription, post.CreatedBy.UserName)}
                                                            />

                                                            {/* <img onClick={showComment} src={user} alt="postimg"></img> */}


                                                        </div>


                                                    </div>

                                                ))
                                            ) : (
                                                <><img className="defaultimg" onClick={(e) => showComment(e, post)} src={user} alt="postimg"></img></>
                                                // <p>No images for this post.</p>
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    <p>No posts available for this user.</p>
                                )}
                            </div></div>


                        <div className="main_traits">
                            <button className="main_postbutton">Traits</button>



                            <div className="users_traits">
                                <div className="main_post2">
                                    {traits && traits.length > 0 ? (
                                        traits.map((trait) => (
                                            <div key={trait.id} className="post">
                                                {/* <h3>{trait.PostDescription}</h3> */}

                                                {trait.PostImages && trait.PostImages.length > 0 ? (
                                                    trait.PostImages.map((imagePath, index) => (



                                                        <div className="users_post">

                                                            <div className="user_postSection1">

                                                                <img
                                                                    key={index}
                                                                    src={`https://finitee.sgp1.digitaloceanspaces.com/${imagePath}`}
                                                                    alt={`Post Image ${index + 1}`}
                                                                    onClick={(e) => showComment(e, trait.Id, imagePath)}

                                                                />




                                                            </div>


                                                        </div>

                                                    ))
                                                ) : (
                                                    <><img className="defaultimg" onClick={(e) => showComment(e, trait)} src={user} alt="postimg"></img></>
                                                    // <p>No images for this post.</p>
                                                )}
                                            </div>
                                        ))
                                    ) : (
                                        <p>No posts available for this user.</p>
                                    )}
                                </div>


                            </div>

                        </div>



                    </div>


                    <div className="user_eventbeams">
                        <div className="main_beam">
                            <button className="main_beambutton">Beam</button>
                            <div className="users_post">

                                <div className="user_beamSection1">
                                    <img src={user} alt="postimg"></img>
                                    <img src={user} alt="postimg"></img>
                                    <img src={user} alt="postimg"></img>
                                    <img src={user} alt="postimg"></img>
                                    <img src={user} alt="postimg"></img>

                                </div>

                                <div className="user_beamSection">
                                    <img src={user} alt="postimg"></img>
                                    <img src={user} alt="postimg"></img>
                                    <img src={user} alt="postimg"></img>
                                    <img src={user} alt="postimg"></img>
                                </div>

                            </div>
                        </div>
                        <div className="main_events">
                            <button className="main_eventbutton">Events</button>

                            <div className="users_traits">
                                <div className="user_eventSection1">
                                    <img src={user} alt="postimg"></img>
                                    <img src={user} alt="postimg"></img>
                                    <img src={user} alt="postimg"></img>
                                    <img src={user} alt="postimg"></img>
                                    <img src={user} alt="postimg"></img>

                                </div>

                                <div className="user_eventSection">
                                    <img src={user} alt="postimg"></img>
                                    <img src={user} alt="postimg"></img>
                                    <img src={user} alt="postimg"></img>
                                    <img src={user} alt="postimg"></img>
                                </div>
                            </div>

                        </div>



                    </div>

                </div>)}

            <Index show={commentshow} showclose={setcommentshow} />


            <PostComment viewPost={postview} closepost={setPostview} postid={postid} pathimg={paths} data={posts} des={description} names={names} isActive={isActive1} isDeleted={isDelete} />




        </div>


    ) : "";
}

export default Userpopup;