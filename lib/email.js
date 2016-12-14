module.exports = (function() {
  "use strict";
  
  var log = require("debug")("nqm-utils:email");
  var nodemailer = require('nodemailer');
  var mailTransport = null;

  var send = function(from, to, subject, text, cb) {
    var mailOptions = {
      from: from,
      to: to,
      subject: subject,
      html: text,
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
      process.nextTick(function() {
        cb(null, "MAIL_URL not set");
      });
    }
  };

  return {
    send: send
  }
}());
