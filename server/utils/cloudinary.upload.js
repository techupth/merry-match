import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";

const cloudinaryUpload = async (files) => {
  const fileUrl = [];

  for (let file of files.avatar) {
    let result;
    try {
      result = await cloudinary.uploader.upload(file.path, {
        folder: "techupth/demo-file-uploading",
        type: "private",
      });




    } catch (err) {
      console.log(`error : `, err);
    }


    fileUrl.push({
      url: result.secure_url,
      publicId: result.public_id,
    });
    await fs.unlink(file.path);
  }

  return fileUrl;
};

export { cloudinaryUpload };