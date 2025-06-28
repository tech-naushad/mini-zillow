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
  try {
    const fileBuffer = file.buffer; 
  const result = await client.uploadFile(fileBuffer, {
    fileName: file.originalname,
  });
    
    console.log("Upload successful:", result);
    return result;
  } catch (error) {
    console.error("Upload failed:", error);
  }
};

module.exports = { upload };
