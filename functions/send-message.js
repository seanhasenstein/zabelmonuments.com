require('dotenv').config();
const api_key = process.env.MG_API_KEY;
const domain = process.env.MG_DOMAIN;
const mailgun = require('mailgun-js')({ apiKey: api_key, domain });
const createEmailTemplate = require('./utils');

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

function removeNonDigits(input) {
  return input.replace(/\D/g, '');
}

function formatPhoneNumber(number) {
  const digits = removeNonDigits(number);
  const split = digits.split('');
  const result = split.map((item, index) => {
    if (index === 0) return `(${item}`;
    if (index === 2) return `${item}) `;
    if (index === 5) return `${item}-`;
    else return item;
  });
  return result.join('');
}

exports.handler = async function (event) {
  try {
    const body = JSON.parse(event.body);
    const id = Date.now();
    const store = stores[body.store];
    const name = body.name.trim();
    const email = body.email.trim().toLowerCase();
    const phone = formatPhoneNumber(body.phone.trim());
    const message = body.message.trim();
    const honeypot = body.honeypot;

    if (honeypot) {
      return {
        statusCode: 400,
        body: 'Honeypot triggered!',
      };
    }

    const mailgunData = {
      from: process.env.FROM_EMAIL_ADDRESS,
      to: TO_EMAIL_ADDRESSES[body.store],
      subject: `Message from ${name} (ID: ${id})`,
      text: `Store - ${store} \nName - ${name} \nEmail - ${email} \nPhone - ${phone} \n\nMessage - ${message} \n\n*This message was sent from the zabelmonuments.com contact form.`,
      html: createEmailTemplate(store, name, email, phone, message),
      'h:Reply-To': email,
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
