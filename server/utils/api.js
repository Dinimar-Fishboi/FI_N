// import axios from "axios";
const axios = require('axios')
require('dotenv').config()

    const requestNBNTypeCheck = async (addressInput) => {
      
          const options = {
              method: "GET",
              url: "https://nbnco-address-check.p.rapidapi.com/nbn_address",
              // params: {address: '242 EXHIBITION ST MELBOURNE VIC 3000 Australia'},
              params: { address: addressInput },
          
              headers: {
                "x-rapidapi-host": "nbnco-address-check.p.rapidapi.com",
                "x-rapidapi-key": process.env.ADMIN_KEY,
              },
            }
    
    try {
                  const response = await axios.request(options);
          
                  console.log(response.data);
                  const addressObject = response.data
                  const techType = response.data.addressDetail.techType;
                //   const addLat = response.data.addressDetail.latitude;
                //   const addLong = response.data.addressDetail.longitude;
          
                console.log(techType + " (This is from api.js)");
                  
                  return addressObject
              } catch (error) {
                  console.error(error);
              }
     }

module.exports={requestNBNTypeCheck}