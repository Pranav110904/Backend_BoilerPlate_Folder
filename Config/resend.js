import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY);


if(process.env.RESEND_KEY){
  console.log("provide Resend_API in the .env file")
  
}


const sendEmail = async ( {reciver,subject ,html})=>{
  try{

    //abhi ke liye maine naam se dev hata diya hai baad mai daal lena
    
    const { data, error } = await resend.emails.send({
    from: 'Blinkit <onboarding@resend.dev>',
    to: reciver,
    subject: subject,
    html: html,
  });
  }catch(error)
  {
      return {
        message: "Error in Sending Email",
        error: true,
        success: false
      }
  }

}

export default sendEmail;