const Notification = require('../models/Notification');
const { sendEmail, sendSMS, sendInApp } = require('../services');


exports.createNotification = async (req, res) => {
  try {
    const { type, recipient, message } = req.body;

    
    if (!type || !recipient || !message) {
      return res.status(400).json({ error: 'type, recipient and message are required' });
    }

   
    const notification = await Notification.create({ type, recipient, message, status: 'pending' });

 
    let sendResult;
    switch (type) {
      case 'email':
        sendResult = await sendEmail(notification);
        break;
      case 'sms':
        sendResult = await sendSMS(notification);
        break;
      case 'in-app':
        sendResult = await sendInApp(notification);
        break;
      default:
        return res.status(400).json({ error: 'Invalid notification type' });
    }

    
    notification.status = sendResult.success ? 'sent' : 'failed';
    await notification.save();

    res.status(201).json({ notification, sendResult });
  } catch (error) {
    console.error('Error creating notification:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
