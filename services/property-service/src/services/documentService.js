const {
  UploadcareSimpleAuthSchema,
  UploadClient,
} = require("@uploadcare/upload-client");
const https = require("https");
// Override global agent (for development only)
https.globalAgent.options.rejectUnauthorized = false;

const client = new UploadClient({
  publicKey: process.env.UPLOADCARE_PUBLIC_KEY,
  secretKey: process.env.UPLOADCARE_SECRET_KEY,
  authSchema: UploadcareSimpleAuthSchema,
});

const upload = async (file) => {
 // const buffer = Buffer.from(data?.content, "base64");
 // let fileName = data?.fileName;
  try {
    const fileBuffer = file.buffer; // Correct: only the file data
  const result = await client.uploadFile(fileBuffer, {
    fileName: file.originalname,
  });
    // const result = await client.uploadFile(buffer, {
    //   fileName,
    //   contentType: data?.contentType,
    // });
    //const result = await client.uploadFile(file);
    console.log("Upload successful:", result);
    return result;
  } catch (error) {
    console.error("Upload failed:", error);
  }
};

module.exports = { upload };
