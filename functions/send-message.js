require('dotenv').config();
const api_key = process.env.MG_API_KEY;
const domain = process.env.MG_DOMAIN;
const mailgun = require('mailgun-js')({ apiKey: api_key, domain });

const TO_EMAIL_ADDRESSES = {
  ['green-bay']: process.env.GREENBAY_STORE_EMAIL,
  manitowoc: process.env.MANITOWOC_STORE_EMAIL,
  sheboygan: process.env.SHEBOYGAN_STORE_EMAIL,
  ['ask-our-cm']: process.env.CERTIFIED_MEMORIALIST_EMAIL,
};

exports.handler = async function (event) {
  try {
    const body = JSON.parse(event.body);
    const { store, name, email, phone, message, honeypot } = body;
    const id = Date.now();

    if (honeypot) {
      return {
        statusCode: 400,
        body: 'The honeypot was triggered!',
      };
    }

    const requiredFields = ['store', 'name', 'email', 'phone', 'message'];
    const missingFields = requiredFields.filter(f => !body[f]);
    const isValid = missingFields.length === 0 ? true : false;

    if (isValid) {
      const mailgunData = {
        from: process.env.FROM_EMAIL_ADDRESS,
        to: TO_EMAIL_ADDRESSES[store],
        bcc: process.env.BCC_EMAIL_ADDRESS,
        'h:Reply-To': email,
        subject: `Message from ${name} (ID: ${id})`,
        text: `Store - ${TO_EMAIL_ADDRESSES[store]} \nName - ${name} \nEmail - ${email} \nPhone - ${phone} \n\nMessage - ${message} \n\n*This message was sent from the zabelmonuments.com contact form.`,
      };

      return mailgun
        .messages()
        .send(mailgunData)
        .then(() => ({
          statusCode: 200,
          body: JSON.stringify({
            message: `Message (ID: ${id}) sent successfully!`,
            messageId: id,
          }),
        }))
        .catch(error => ({ statusCode: 500, body: error }));
    } else {
      const errorMessage = `The following fields are required but were not provided: [${missingFields.join(
        ', '
      )}]`;

      return {
        statusCode: 400,
        body: errorMessage,
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: error,
    };
  }
};
