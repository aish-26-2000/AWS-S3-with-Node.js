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

const params = {
    Bucket: BUCKET_NAME,
    CreateBucketConfiguration: {
        // Set region 
        LocationConstraint: ''
    }
};

s3.createBucket(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log('Bucket Created Successfully', data.Location);
});