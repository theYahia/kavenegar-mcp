import { z } from "zod";
import { KavenegarClient } from "../client.js";
let _client = null;
function getClient() { if (!_client)
    _client = new KavenegarClient(); return _client; }
export const listOutboxSchema = z.object({
    date_from: z.string().describe("Start date (Unix timestamp)"),
    date_to: z.string().describe("End date (Unix timestamp)"),
    sender: z.string().optional().describe("Filter by sender number"),
});
export async function handleListOutbox(params) {
    const p = {
        startdate: params.date_from,
        enddate: params.date_to,
    };
    if (params.sender)
        p.sender = params.sender;
    const result = await getClient().get("sms/latestoutbox.json", p);
    return JSON.stringify(result, null, 2);
}
//# sourceMappingURL=list-outbox.js.map