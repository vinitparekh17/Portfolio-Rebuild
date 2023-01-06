import NodeMailer from 'nodemailer';

const transporter = NodeMailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: 'vinitrevaliya@gmail.com',
        pass: 'ogaslccbhbxroxad'
    },
    tls: {
        rejectUnauthorized: false,
        cipjers: 'SSLv3'
    }
});

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

