var serviceAccount = require("./tw_admin.json"); 

console.log(serviceAccount);

const accountSid = serviceAccount.accountSid;
const authToken = serviceAccount.authToken;
const client = require("twilio")(accountSid, authToken);

const sendMessage = (toNumber) => {
    const toNumberValue = `whatsapp:${toNumber}`;
  client.messages
    .create({
      body: "Your appointment is coming up on July 21 at 3PM",
      from: `whatsapp:${serviceAccount.from}`,
      to: `whatsapp:${serviceAccount.to}`,
    })
    .then((message) => console.log(message.sid))
    .done();
};
