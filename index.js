var AWS = require('aws-sdk');
/**
* Don't hard-code your credentials!
* Create an IAM role for your EC2 instance instead.
*/
// Set your region
AWS.config.region = 'us-east-2c';
var dynamodb = new AWS.DynamoDB();
dynamodb.batchGetItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});