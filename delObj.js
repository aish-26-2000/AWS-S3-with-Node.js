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


const deleteFile = (key) => {
    s3.deleteObject({
        Bucket : BUCKET_NAME,
        Key : key
    });
    console.log('File Deleted Successfully');
}

// Enter the file you want to delete
deleteFile('cat.jpg');