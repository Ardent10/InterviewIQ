export const SendFormInviteTemplate = ({ email, url,message }:any) => {
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>MercForms Invitation</title>
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px; text-align: center;">
            <div style="background-color: #fff; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);">
                <img src="https://merc-forms.vercel.app/logo.png" alt="MercForms Logo" style="max-width: 100px; margin: 0 auto; display: block;">
                <h1 style="color: #6d63fc;">You're Invited to Fill out a Form!</h1>
                <p>Hello, ${email} </p>
                <p>Your friend sent you this message.</p>
                <p>${message}</p>
                <p>You have been invited to fill out a form using MercForms. Your participation is important to us, and we appreciate your input.</p>
                <a href=${url} style="display: inline-block; padding: 10px 20px; background-color: #6d63fc; color: #fff; text-decoration: none; border-radius: 5px; transition: background-color 0.3s;">Fill the Form</a>
                <p>If you have any questions or need further assistance, please don't hesitate to contact us at support@mercforms.com.</p>
                <p>Thank you for using MercForms!</p>
                <p>Sincerely,<br>MercForms Team</p>
                <p>&copy; ${new Date().getFullYear()} MercForms</p>
            </div>
        </body>
    </html>
     `;
};
