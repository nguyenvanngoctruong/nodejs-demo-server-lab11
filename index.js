/ Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
/**
* Don't hard-code your credentials!
* Create an IAM role for your EC2 instance instead.
*/
// Set your region
AWS.config.region = 'us-east-2c';
var db = new AWS.DynamoDB();
db.listTables(function(err, data) {
 console.log(data.TableNames);
});