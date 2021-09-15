



exports.handler = event => {
  //eslint-disable-line
  console.log(JSON.stringify(event, null, 2));
  event.Records.forEach(record => {
    console.log("New Comment is added : ", record.event);
  });
  return Promise.resolve('Successfully processed DynamoDB record');
};
