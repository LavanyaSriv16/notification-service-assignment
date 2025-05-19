// services.js

async function sendEmail(notification) {
  console.log(`Sending EMAIL to ${notification.recipient}: ${notification.message}`);
  return { success: true, info: 'Email sent (mock)' };
}

async function sendSMS(notification) {
  console.log(`Sending SMS to ${notification.recipient}: ${notification.message}`);
  return { success: true, info: 'SMS sent (mock)' };
}

async function sendInApp(notification) {
  console.log(`Sending IN-APP notification to ${notification.recipient}: ${notification.message}`);
  return { success: true, info: 'In-app notification sent (mock)' };
}

module.exports = {
  sendEmail,
  sendSMS,
  sendInApp,
};
