module.exports = (function() {
  "use strict";
  
  const log = require("debug")("nqm-utils:email");
  const nodemailer = require('nodemailer');
  let mailTransport = null;

  const send = function(from, to, subject, text, cb) {
    const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: text,
    };

    // create reusable transporter object using the default SMTP transport
    if (!mailTransport && process.env.MAIL_URL) {
      mailTransport = nodemailer.createTransport(process.env.MAIL_URL);
    }

    if (mailTransport) {
      // send mail with defined transport object
      mailTransport.sendMail(mailOptions, function(err, info){
          if (err) {
            log("email send failure [%s]",err.message);
          } else {
            log("email sent: " + info.response);
          }
          cb(err, info);
      });
    } else {
      log("email.send: %j", mailOptions);
      process.nextTick(() => {
        cb(null, "MAIL_URL not set");
      });
    }
  };

  return {
    send: send
  }
}());
