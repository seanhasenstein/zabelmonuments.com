require('dotenv').config();
const api_key = process.env.MG_API_KEY;
const domain = process.env.MG_DOMAIN;
const mailgun = require('mailgun-js')({ apiKey: api_key, domain });
const { createEmailTemplate, formatPhoneNumber } = require('./utils');

const TO_EMAIL_ADDRESSES = {
  ['green-bay']: process.env.GREENBAY_STORE_EMAIL,
  manitowoc: process.env.MANITOWOC_STORE_EMAIL,
  sheboygan: process.env.SHEBOYGAN_STORE_EMAIL,
  ['ask-our-cm']: process.env.CERTIFIED_MEMORIALIST_EMAIL,
};

const stores = {
  'green-bay': 'Green Bay',
  manitowoc: 'Manitowoc',
  sheboygan: 'Sheboygan',
  'ask-our-cm': 'Ask Our Certified Memorialist',
};

exports.handler = async function (event) {
  try {
    const body = JSON.parse(event.body);
    const id = Date.now();

    const message = {
      store: stores[body.store],
      name: body.name.trim(),
      email: body.email.toLowerCase().trim(),
      phone: formatPhoneNumber(body.phone),
      message: body.message.trim(),
    };

    const mailgunData = {
      from: process.env.FROM_EMAIL_ADDRESS,
      to: TO_EMAIL_ADDRESSES[body.store],
      subject: `Message from ${message.name} (ID: ${id})`,
      text: `Store - ${message.store} \nName - ${message.name} \nEmail - ${message.email} \nPhone - ${message.phone} \n\nMessage - ${message.message} \n\n*This message was sent from the zabelmonuments.com contact form.`,
      html: createEmailTemplate(message),
      'h:Reply-To': message.email,
    };

    await mailgun.messages().send(mailgunData);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Message (ID: ${id}) sent successfully!`,
        messageId: id,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.message,
    };
  }
};
