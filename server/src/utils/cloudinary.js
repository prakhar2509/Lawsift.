import {v2 as cloudinary} from "cloudinary"
import streamifier from "streamifier"
import fs from "fs"


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

// const uploadOnCloudinary = async (localFilePath) => {
//     try {
//         if (!localFilePath) return null
//         //upload the file on cloudinary
//         const response = await cloudinary.uploader.upload(localFilePath, {
//             resource_type: "auto"
//         })
//         // file has been uploaded successfull
//         //console.log("file is uploaded on cloudinary ", response.url);
//         fs.unlinkSync(localFilePath)
//         return response;

//     } catch (error) {
//         fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
//         return null;
//     }
// }


const uploadToCloudinary = (req, res, next) => {
    const streamUpload = () => {
        return new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                (error, result) => {
                    if (result) {
                        resolve(result);
                    } else {
                        reject(error);
                    }
                }
            );

            streamifier.createReadStream(req.file.buffer).pipe(stream);
        });
    };

    const upload = async () => {
        try {
            const result = await streamUpload();
            console.log(result);
            req.uploadResult = result; // Attach the result to the request object
            next(); // Call next middleware
        } catch (error) {
            console.error('Error uploading to Cloudinary:', error);
            res.status(500).json({ error: 'Error uploading to Cloudinary' });
        }
    };

    upload();
};

export {uploadToCloudinary}