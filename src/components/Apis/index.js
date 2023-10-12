import instance from "../utils/request.js";

import CONFIG from "../utils/config.js";


export const GetBlogDetails = async (id) => {
  try {
  
   const res = await instance.get(
   `${CONFIG.baseUrl}/api/blogs/${id}?populate=*` 
   );

   return res.data;
 } catch (err) {
   if (err?.response) {
     
     return err.response.data;
   } else {
     console.log(`ERROR:${err}`);
   }
 }
};
export const GetItems = async (items) => {
   try {
   
    const res = await instance.get(
    `${CONFIG.baseUrl}/api/${items}?populate=*` 
    );

    return res.data;
  } catch (err) {
    if (err?.response) {
      
      return err.response.data;
    } else {
      console.log(`ERROR:${err}`);
    }
  }
};
