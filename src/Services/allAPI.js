import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverURL";

// fetch user
 export const getAllUserAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}`,"")
 }