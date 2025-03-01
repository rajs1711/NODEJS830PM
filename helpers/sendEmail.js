const sgMail = require('@sendgrid/mail')


const sendEmail = async (EmailData) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const { sendto, sendfrom, emailsubject, bodyhtml } = EmailData

    const msg = {
        to: sendto,
        from: sendfrom,
        subject: emailsubject,
        html: bodyhtml
    }
    const result = await sgMail.send(msg);

}

module.exports = {
    sendEmail
}







