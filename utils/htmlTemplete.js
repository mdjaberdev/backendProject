const otpGenerator = require("otp-generator");

const otp = otpGenerator.generate(6);

const htmlTemplete = (otp) => {
  return `<body style="margin:0; padding:0; background-color:#f8fafc; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;">

    <div style="display:none; font-size:1px; color:#f8fafc; line-height:1px; max-height:0; max-width:0; opacity:0; overflow:hidden; mso-hide:all;">
        Your secure verification code is ${otp}. Do not share this code.
    </div>

    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f8fafc; border-collapse:collapse;">
        <tr>
            <td align="center" style="padding:60px 15px;">
                
                <table border="0" cellpadding="0" cellspacing="0" width="560" style="background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 10px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px rgba(0,0,0,0.05); border-collapse:collapse; max-width:560px; width:100%; border: 1px solid #e2e8f0;">
                    
                    <tr>
                        <td align="center" style="padding:40px 40px 20px 40px; background-color:#ffffff;">
                            <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                                <tr>
                                    <td align="center" style="background-color:#0f172a; width:48px; height:48px; border-radius:12px; color:#ffffff; font-size:20px; font-weight:bold;">
                                        ⚡
                                    </td>
                                </tr>
                            </table>
                            <div style="margin-top:12px; font-size:18px; font-weight:800; color:#0f172a; letter-spacing:-0.4px;">YourBrand</div>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:10px 48px 40px 48px; text-align:center;">
                            
                            <h1 style="margin:0 0 10px 0; color:#0f172a; font-size:22px; font-weight:700; letter-spacing:-0.5px;">Check your email</h1>
                            
                            <p style="margin:0 0 32px 0; color:#64748b; font-size:15px; line-height:1.6;">
                                We've sent a temporary verification code to secure your account login. Enter the code below:
                            </p>

                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
                                <tr>
                                    <td align="center" style="padding:0 0 32px 0;">
                                        <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border: 1px solid #cbd5e1; border-radius: 12px; color: #0f172a; font-size: 38px; font-weight: 800; letter-spacing: 14px; padding: 18px 0; text-align: center; display: block; width: 100%; max-width: 320px; text-indent: 14px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);">
                                            ${otp}
                                        </div>
                                    </td>
                                </tr>
                            </table>

                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f8fafc; border-radius:8px; border-collapse:collapse; border: 1px solid #edf2f7;">
                                <tr>
                                    <td style="padding:16px 20px; text-align:left; color:#475569; font-size:13px; line-height:1.5;">
                                        📌 <strong>Note:</strong> This code will expire in exactly <strong>10 minutes</strong>. If you didn't request this, please change your password immediately.
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="padding:24px 40px; background-color:#f8fafc; border-top:1px solid #f1f5f9;">
                            <p style="margin:0 0 4px 0; color:#94a3b8; font-size:12px; line-height:1.4;">
                                Secured by <strong>YourBrand Auth System</strong>
                            </p>
                            <p style="margin:0; color:#cbd5e1; font-size:11px; line-height:1.4;">
                                &copy; 2026 Your Company. All rights reserved.
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>`;
};
module.exports = htmlTemplete;
