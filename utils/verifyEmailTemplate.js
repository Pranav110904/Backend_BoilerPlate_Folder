const verifyEmailTemplate =({name, url}) => 
{
    console.log(name,url)
    
    return `
    <p>Dear ${name}</p>
    <p> Thank You For Registering BLINKIT</p>
    <a href="${url}" style="color:white;background:blue;margin_top:10px">
        Verify Email
        </a>
    `
}

export default verifyEmailTemplate