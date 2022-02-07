import { Handler } from '@netlify/functions';
import { sendEmail } from './utils/mailgun';
import {
  createEmailTemplate,
  createMessageId,
  formatPhoneNumber,
} from './utils';

const toStoreAddresses = {
  greenbay: process.env.GREENBAY_STORE_EMAIL,
  manitowoc: process.env.MANITOWOC_STORE_EMAIL,
  sheboygan: process.env.SHEBOYGAN_STORE_EMAIL,
  ['ask-our-cm']: process.env.CERTIFIED_MEMORIALIST_EMAIL,
};

const stores = {
  greenbay: 'Green Bay',
  manitowoc: 'Manitowoc',
  sheboygan: 'Sheboygan',
  ['ask-our-cm']: 'Ask Our Certified Memorialist',
};

export const handler: Handler = async event => {
  try {
    const body = JSON.parse(event.body);
    const id = createMessageId();

    const message = {
      id,
      store: stores[body.store],
      name: body.name.trim(),
      email: body.email.toLowerCase().trim(),
      phone: formatPhoneNumber(body.phone),
      message: body.message.trim(),
    };

    const { text, html } = createEmailTemplate(message);

    await sendEmail({
      to: toStoreAddresses[body.store],
      from: process.env.FROM_EMAIL_ADDRESS,
      subject: `Contact form message [#${id}]`,
      replyTo: message.email,
      bcc: process.env.BCC_EMAIL_ADDRESS,
      text,
      html,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.message,
    };
  }
};
