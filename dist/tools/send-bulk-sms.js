import { z } from "zod";
import { KavenegarClient } from "../client.js";
let _client = null;
function getClient() { if (!_client)
    _client = new KavenegarClient(); return _client; }
export const sendBulkSmsSchema = z.object({
    receptors: z.array(z.string()).min(1).describe("Array of recipient phone numbers"),
    message: z.string().describe("SMS message text"),
    sender: z.string().optional().describe("Sender number"),
});
export async function handleSendBulkSms(params) {
    const p = {
        receptor: params.receptors.join(","),
        message: params.message,
    };
    if (params.sender)
        p.sender = params.sender;
    const result = await getClient().post("sms/sendarray.json", p);
    return JSON.stringify(result, null, 2);
}
//# sourceMappingURL=send-bulk-sms.js.map