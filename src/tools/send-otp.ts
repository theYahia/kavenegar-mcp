import { z } from "zod";
import { KavenegarClient } from "../client.js";
let _client: KavenegarClient | null = null;function getClient(): KavenegarClient { if (!_client) _client = new KavenegarClient(); return _client; }
export const sendOtpSchema = z.object({
  receptor: z.string().describe("Recipient phone number"),
  template: z.string().describe("OTP template name registered in Kavenegar panel"),
});

export async function handleSendOtp(params: z.infer<typeof sendOtpSchema>): Promise<string> {
  const result = await getClient().get("verify/lookup.json", {
    receptor: params.receptor,
    template: params.template,
    token: Math.floor(100000 + Math.random() * 900000).toString(),
    type: "sms",
  });
  return JSON.stringify(result, null, 2);
}
