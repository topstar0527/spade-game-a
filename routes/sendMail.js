var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
/* GET home page. */

router.post('/send', function (req, res, next) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "gingerphillips73@gmail.com",
            pass: "wdpyahue",
        },
    });

    var mailOption = {
        from: req.body.sendermail,
        to: req.body.teammate,
        shareurl: req.body.shareUrl,
        text: req.body.invitation,
    };

    var mailOptions = {
        from: req.body.sendermail,
        to: req.body.opponentmail,
        shareurl: req.body.shareUrl,
        text: 'you invited the spade game by ' + req.body.sendmail + ' ',
    }

    var mailOption2 = {
        from: req.body.sendermail,
        to: req.body.opponentTeamate,
        shareurl: req.body.shareUrl,
        text: 'you invited the spade game by ' + req.body.sendmail + ' ',
    }

    transporter.sendMail(mailOption, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });

    transporter.sendMail(mailOption2, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
});

module.exports = router;
