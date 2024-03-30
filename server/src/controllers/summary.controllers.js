import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asynchandler.js"
import axios from "axios"
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const summary = asyncHandler(async(req,res,next) => {
    // Taking the pdf path and checking whether it is present
    const pdfPath = req.file?.path;
    if(!pdfPath) {
        throw new ApiError(405, 'No file found')
    }
    console.log('pdfPath')

    //sending the request to flask server
    try {
        const pdf = await uploadOnCloudinary(pdfPath)
        console.log(pdf.url)
        // let config = {
        //     method : 'post',
        //     url : `http://127.0.0.1:8000/url/?url=${pdf.url}`,
        //     data : pdf.url
        // }
        const response = await axios.post(`http://127.0.0.1:8000/url/?url=${pdf.url}`)
        console.log(response.data)
        res.send(new ApiResponse(200, response.data, 'Summary recieved Successfully!'))
    } catch (error) {
        console.log(error)
        throw new ApiError(400, 'Error in summarizing file')        
    }
})

export {summary}