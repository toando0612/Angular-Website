const functions = require('firebase-functions');
const admin= require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin:true});

const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
// const Firestore = require('@google-cloud/firestore');
//
// const firestore = new Firestore({
//     projectId: process.env.GCP_PROJECT,
// });


admin.initializeApp();


const oauth2Client = new OAuth2(
    "856210913169-5c12v3t6l6uh9lhfukhnkl6dce21r5gu.apps.googleusercontent.com", // ClientID
    "XlrizWrEvPgvHx8HjwvRHmXK", // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
);

//use this to refresh new accessTokens
oauth2Client.setCredentials({
    refresh_token: "1//04dcbOFFT-SFsCgYIARAAGAQSNwF-L9IrEEF8Wt9ZQqCCoimyWnh4X5zudrT4K5CBuKA776mitSgyQKAht5Mjbm60W3us6eGhLzo"
});
const accessToken = oauth2Client.getAccessToken()


//create a transporter
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth:{
        type: 'OAuth2',
        user: "toan@upupapp.asia",
        clientId: '856210913169-5c12v3t6l6uh9lhfukhnkl6dce21r5gu.apps.googleusercontent.com',
        clientSecret: 'XlrizWrEvPgvHx8HjwvRHmXK',
        accessToken: accessToken,
        refreshToken: "1//04dcbOFFT-SFsCgYIARAAGAQSNwF-L9IrEEF8Wt9ZQqCCoimyWnh4X5zudrT4K5CBuKA776mitSgyQKAht5Mjbm60W3us6eGhLzo"
    }

});

function sendMail(context, data){
    console.log('Forwarding request');
    // getting dest email by query string
    // const dest = req.query.dest;
    const mailOptions = {
        from: 'No-reply-@upupinfo.com', // Something like: Jane Doe <janedoe@gmail.com>
        to: 'shiela@upupapp.asia',
        subject: 'Booking a Demo', // email subject
        html: `<p style="font-size: 16px;">*Client Info:</p>
            <br />
           <p style="margin-left: 2rem">
            . Firstname : ${data.firstName}<br/><br/>
            . Lastname : ${data.lastName}<br/><br/>
            . Email : ${data.email}<br/><br/>
            . Contact : ${data.phone}<br/><br/>
            . Position : ${data.position}<br/><br/>
            . Company : ${data.company}<br/><br/>
           </p>
            
        ` // email content in HTML
    };

    // returning result
    return transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            return context.send(error.toString());
        }
        return context.send('Sent');
    });
}

function sendNotify(context, data){
    console.log('Forwarding request');
    // getting dest email by query string
    // const dest = req.query.dest;
    const mailOptions = {
        from: 'No-reply-@upupinfo.com', // Something like: Jane Doe <janedoe@gmail.com>
        cc:'paulespinas@upupapp.asia',
        to: 'shiela@upupapp.asia',
        subject: 'New Subscriber', // email subject
        html: `<p style="font-size: 16px;">*Subscriber Info:</p>
            <br />
           <p style="margin-left: 2rem">
            . Email : ${data.email}<br/><br/>
           </p>
        ` // email content in HTML
    };
    // returning result
    return transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            return context.send(error.toString());
        }
        return context.send('Sent');
    });
}


    exports.fireStoreTrigger = functions.firestore.document('requests/{wildcard}').onCreate((snapshot, context) => {
        // ... Your code here
            sendMail(context,snapshot.data());
    });

    exports.fireStoreTrigger = functions.firestore.document('subscribers/{wildcard}').onCreate((snapshot, context) => {
        // ... Your code here
        sendNotify(context,snapshot.data());
    });

