const fs = require('fs');
const AWS = require('aws-sdk');

// Enter copied or downloaded access id and secret here
const ID = '';
const SECRET = '';
const REGION = ''

// Enter the name of the bucket that you have created here
const BUCKET_NAME = '';;


// Initializing S3 Interface
const s3 = new AWS.S3({
    apiVersion : '2006-03-01',
    accessKeyId: ID,
    secretAccessKey: SECRET,
    region : REGION
});

//const fileName = './cat.jpg';
const uploadFile = (fileName) => {
    // read content from the file
    const fileContent = fs.readFileSync(fileName);

    // setting up s3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: 'cat.jpg', // file name you want to save as
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err
        }
        console.log(`File uploaded successfully. ${data.Location}`)
    });
};

const deleteFile = (key) => {
    s3.deleteObject({
        Bucket : BUCKET_NAME,
        Key : key
    });
    console.log('File Deleted Successfully');
}

// Enter the file you want to upload here
uploadFile('cat.jpg');

deleteFile('cat.jpg');