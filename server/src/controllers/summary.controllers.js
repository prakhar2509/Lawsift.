import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asynchandler.js"
import axios from "axios"


const summary = asyncHandler(async(req,res,next) => {
    // Taking the pdf path and checking whether it is present
    // const pdfPath = req.file?.path;
    // if(!pdfPath) {
    //     throw new ApiError(405, 'No file found')
    // }
    // console.log('pdfPath')
    const id_px = req.query.id_px
    // console.log(req.query)
    //sending the request to flask server
    try {
        // const pdf = await uploadOnCloudinary(pdfPath)
        const pdf = req.uploadResult ;
        console.log(pdf.url)
        // let config = {
        //     method : 'post',
        //     url : `http://127.0.0.1:8000/url/?url=${pdf.url}`,
        //     data : pdf.url
        // }
        let response
        switch(id_px) {
            case '1' :
                response = await axios.post(`${process.env.IP_ADDRESS}/franchise/?url=${pdf.url}`)
                break
            case 2 :
                response = await axios.post(`${process.env.IP_ADDRESS}/url`)
                break
            case 3 :
                break
            case 4 :
                break
            case 5 :
                break
            case 6 :
                break
            default : 
                throw new ApiError(405, 'Invalid Document type')
        }
        // const response = await axios.post(`http://127.0.0.1:8000/url/?url=${pdf.url}`)
        console.log(response.data)
        res.send(new ApiResponse(200, response.data, 'Summary recieved Successfully!'))
    } catch (error) {
        console.log(error)
        throw new ApiError(400, 'Error in summarizing file')        
    }
})

export {summary}