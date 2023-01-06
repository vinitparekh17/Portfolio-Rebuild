import NodeMailer from 'nodemailer';

const transporter = NodeMailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false,
        cipjers: 'SSLv3'
    }
});

console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);

export const recieveEmail = async (name: string, email: string, msg: string) => {
    try {
        const mailOptions =
        {
            from: `<${name}>`,
            to: 'dcvinit1742@gmail.com',
            subject: `Contact Form Submission from ${name}`,
            text: msg,
            html: `
                <h3>Contact Details</h3>
                <ul>
                    <li>Name: ${name}</li>
                    <li>Email: ${email}</li>
                </ul>

                <p>${msg}</p>
                `
        }

        const info = await transporter.sendMail(mailOptions);

        return info ? true : false;
    } catch (error) {
        console.log(error);
    }
}

