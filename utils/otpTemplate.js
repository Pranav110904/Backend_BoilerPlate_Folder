const otpTemplate = ({ name, otp }) => {
  return `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2>Hello ${name},</h2>
      
      <p>We received a request to verify your identity. Please use the OTP below:</p>
      
      <p style="font-size: 20px; font-weight: bold;">${otp}</p>
      
      <p>This code is valid for <strong>1 hour</strong>. Do not share this code with anyone.</p>
      
      <p>If you did not request this, please ignore this email or contact support.</p>
      
      <hr style="margin: 20px 0;" />
      <p style="font-size: 12px; color: #999;">This is an automated message. Please do not reply.</p>
    </div>
  `;
};

export default otpTemplate;
