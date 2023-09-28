import fs from "fs";
import path from "path";

const uploadDirectory = "./uploads"; // Directory to save the uploaded files

export default async function handler(req, res) {
  try {
    if (!fs.existsSync(uploadDirectory)) {
      fs.mkdirSync(uploadDirectory);
    }
    console.log(req.body);
    const { file } = req.body; // Assuming the file is sent as 'file' in the request body

    const filePath = path.join(uploadDirectory, "hihihi.png");

    // Save the file to the specified path
    fs.writeFileSync(filePath, Buffer.from(req.body, "base64"));

    res.status(200).json({ message: "File uploaded successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "File upload failed", details: error.message });
  }
}
