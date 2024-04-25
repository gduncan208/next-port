import { NextResponse } from "next/server";


const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST || "smtp.gmail.com",
    port: process.env.NODEMAILER_PORT || 465,
    secure: process.env.NODEMAILER_SECURE || true, 
    auth: {
        user: process.env.NODEMAILER_USERNAME || '',
        pass: process.env.NODEMAILER_PASSWORD || ''
    },
});


export async function POST(request) {
    const body = await request.json();
    const info = await transporter.sendMail({
        from: 'gracielduncan@gmail.com', // sender address
        to: "gduncan@nic.edu", // list of receivers
        subject: `Vercel Contact ${body.name}`, // Subject line
        text: body.message, // plain text body
        html: `<b>${body.message}</b>`, // html body
    });
    const response = {};
    console.log(body);
    return NextResponse.json(response); 
    
}