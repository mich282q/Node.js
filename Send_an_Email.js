var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'office365',
  auth: {
    user: 'mich282q@edu.easj',
    pass: 'Password2551'
  }
});

var mailOptions = {
  from: 'mich282q@edu.easj',
  to: 'mich282q@edu.easj',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});