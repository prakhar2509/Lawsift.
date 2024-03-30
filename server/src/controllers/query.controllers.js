import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asynchandler.js"
import axios from "axios"

const query = asyncHandler(async(req,res,next) => {
    const query = req.body.query;
    if(!query) {
        throw new ApiError(405, 'No query found')
    }
    console.log(query)
    try {
        const response = await axios.post(`http://127.0.0.1:8000/predict?name=${query}`)
        console.log(response.data)
        res.send(new ApiResponse(200, response.data, 'Query recieved Successfully!'))
    } catch (error) {
        console.log(error)
        throw new ApiError(400, 'Error in querying the model')
    }
})

export {query}