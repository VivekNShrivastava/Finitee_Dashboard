

// import { useState, useEffect } from "react";
// import { handelactiveedit } from "../../controllers/freeuser.js";


// const Reason = (props) => {
//     const [pop, setpop] = useState(false);
//     const [reason, setReason] = useState("");

//     useEffect(() => {

//         console.log("UserId:", props.userId);
//         console.log("Option:", props.option);
//         console.log("Todo:", props.todo);
//     }, [props.userId, props.option, props.todo]);



//     const handleSendReason = (e,userId, option, todo, reason) => {
//         const payload = { userId, option, todo, reason }
//         handelactiveedit(e, payload)
//             .then((res) => {
//                 console.log("I am clicked with id ", res.userId);
//                 console.log("option is ", res.option);
//                 console.log("action is ", res.todo);
//             })
//             .catch((error) => {
//                 console.error("Error in handelcolorchange:", error);
//             });





//     };


//     return props.showreason ? (
//         <>
//             <div showreason={pop}>
//                 <p>Hello world</p>

//                 <input
//                     type="text"
//                     value={reason}
//                     onChange={(e) => setReason(e.target.value)}
//                     placeholder="Enter reason"
//                 />
//                 <button onClick={(e) => handleSendReason(e,props.userId, props.option, props.todo, reason)}>Send Reason</button>
//                 <button onClick={() => props.setShowReason(false)}>close</button>
//             </div>
//         </>
//     ) : null;
// };

// export default Reason;

