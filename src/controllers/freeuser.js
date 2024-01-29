import axios from "axios";
const baseurl =process.env.REACT_APP_BASEURL;

export const handelactiveedit = async (payload) => {
    const baseurl =process.env.REACT_APP_BASEURL;
 
 
    try {
        console.log("Base URL:", baseurl);
        const response = await axios.post(`${baseurl}/Admin/InactiveOrDeleteUser`, payload, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        return response.data;
      } catch (error) {
        console.error("Error in handelactiveedit:", error);
        throw error;
      }




}


export const handeldeleteresotre =async(payload)=>{
    const baseurl =process.env.REACT_APP_BASEURL;
 
 
    try {
        console.log("Base URL:", baseurl);
        const response = await axios.post(`${baseurl}/Admin/InactiveOrDeleteUser`, payload, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        return response.data;
      } catch (error) {
        console.error("Error in handelactiveedit:", error);
        throw error;
      }


    // const url = `${baseurl}/admin/InactiveOrDeleteUser/${userId}/${option}/${todo}`;
    // return await axios.post(url)

}

export const userpostshow =async(payload) => {
 
    const baseurl =process.env.REACT_APP_BASEURL;
 
 
    try {
        console.log("Base URL:", baseurl);
        const response = await axios.post(`${baseurl}/Admin/InactiveOrDeleteUser`, payload, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        return response.data;
      } catch (error) {
        console.error("Error in handelactiveedit:", error);
        throw error;
      }
}




