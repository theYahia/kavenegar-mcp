import { z } from "zod";
import { KavenegarClient } from "../client.js";
let _client = null;
function getClient() { if (!_client)
    _client = new KavenegarClient(); return _client; }
export const sendOtpSchema = z.object({
    receptor: z.string().describe("Recipient phone number"),
    template: z.string().describe("OTP template name registered in Kavenegar panel"),
});
export async function handleSendOtp(params) {
    const result = await getClient().get("verify/lookup.json", {
        receptor: params.receptor,
        template: params.template,
        token: Math.floor(100000 + Math.random() * 900000).toString(),
        type: "sms",
    });
    return JSON.stringify(result, null, 2);
}
//# sourceMappingURL=send-otp.js.map