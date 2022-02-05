import FormData from 'form-data';
import fetch from 'node-fetch';

const AUTHTOKEN = `Basic ${Buffer.from(
  `api:${process.env.MAILGUN_API_KEY}`
).toString(`base64`)}`;

type SendEmail = {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
  bcc: string;
  replyTo: string;
};

async function sendEmail({
  to,
  from,
  subject,
  text,
  html,
  bcc,
  replyTo,
}: SendEmail) {
  try {
    const form = new FormData();
    const endpoint = `https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`;

    form.append('to', to);
    form.append('from', from);
    form.append('subject', subject);
    form.append('text', text);
    form.append('html', html);
    form.append('bcc', bcc);
    form.append('h:Reply-To', replyTo);

    const response = await fetch(endpoint, {
      method: 'post',
      body: form,
      headers: {
        Authorization: AUTHTOKEN,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export { sendEmail };
