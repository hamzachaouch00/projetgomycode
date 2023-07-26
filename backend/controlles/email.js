const  nodemailer = require ('nodemailer')

require ('dotenv').config()

const transporter=nodemailer.createTransport({
  service: 'gmail',
  port:587,
  host: 'sntp.gmail.com',
  secure: false,
  auth:{
    user: process.env.EMAIL,
    pass : process.env.PASSEWORD,
  }
})
transporter.verify((error,success)=>{
    error?console.log(error):console.log('server redie')
    
})
const nodemail =  (async(req,res,next)=>{
    var email=req.body.email
    var subject=req.body.subject
    var text=req.body.text
    var html=`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${subject}</h1>
        <h2>${email}</h2>
        <div>
            <img 
        src="https://img.buzzfeed.com/buzzfeed-static/static/2016-07/8/13/campaign_images/buzzfeed-prod-fastlane02/heres-how-i-can-tell-if-someone-read-my-email-2-7107-1468000476-0_dblbig.jpg" 
        style="width:50%">
        </div>
        <p>${text}</p>
    </body>
    </html>`
    var info = {
        from: email ,
        to: process.env.EMAIL,
        subject:subject,
        text:text,
        html:html
         }
         transporter.sendMail(info,(error,data)=>error?res.json({status:'fail'}):res.json({status:'success'}))
})
module.exports ={nodemail}