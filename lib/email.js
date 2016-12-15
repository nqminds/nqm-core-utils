module.exports = (function() {
  "use strict";
  
  var log = require("debug")("nqm-utils:email");
  var mailTransport = null;

  var send = function(from, to, subject, text, cb) {
    var nodemailer = require('nodemailer');
    
    var mailOptions = {
      from: from,
      to: to,
      subject: subject,
      html: text,
    };

    // create reusable transporter object using the default SMTP transport
    if (!mailTransport && process.env.MAIL_AUTH) {
      var authComponents = process.env.MAIL_AUTH.split(":");
      mailTransport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: authComponents[0],
          pass: authComponents[1],
        }
      });
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
        cb(null, "MAIL_AUTH not set");
      });
    }
  };

  return {
    send: send
  }
}());
