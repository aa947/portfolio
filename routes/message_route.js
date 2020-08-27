var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");
var mongo = require('mongodb');


/*
*
* Send Message
*
*/

router.post("/api/sendMessage", (req, res) => {

    mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
        if (err) console.log('Database error: ' + err);
        let db = dbo.db('portfolio');
        let coll = db.collection('messages');

        let name = req.body.inputName;
        let email = req.body.inputEmail;
        let message = req.body.inputMessage;
        db.collection('messages').insertOne({ name: name, email: email, message: message })
            .then((data) => {
                // async..await is not allowed in global scope, must use a wrapper
                async function main() {
                    // Generate test SMTP service account from ethereal.email
                    // Only needed if you don't have a real mail account for testing
                    // res.json({ result: "message saved" });
                    // create reusable transporter object using the default SMTP transport
                    let transporter = nodemailer.createTransport({
                        host: "smtp.gmail.com",
                        port: 587,
                        secure: false, // true for 465, false for other ports
                        auth: {
                            user: process.env.USER, // generated ethereal user
                            pass: process.env.PASS // generated ethereal password
                        },
                        tls: {
                            rejectUnauthorized: false
                        }
                    });

                    // send mail with defined transport object
                    let info = await transporter.sendMail({
                        from: email, // sender address
                        to: "aallii300300@gmail.com", // list of receivers
                        subject: "New Message From your Portfolio", // Subject line
                        text: message, // plain text body
                        html: `<p>Sender_Name: ${name} </p> <p>Sender_Email: ${email} </p> <p> Message: ${message} </p>` // html body
                    });

                    console.log("Message sent: %s", info.messageId);
                    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

                    // Preview only available when sending through an Ethereal account
                    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
                }

                main().catch(console.error);


                res.json({ result: "email Sent" });
            });




    })
});



module.exports = router;