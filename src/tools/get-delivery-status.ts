import { z } from "zod";
import { KavenegarClient } from "../client.js";
let _client: KavenegarClient | null = null;function getClient(): KavenegarClient { if (!_client) _client = new KavenegarClient(); return _client; }
export const getDeliveryStatusSchema = z.object({
  messageid: z.string().describe("Message ID to check delivery status"),
});

export async function handleGetDeliveryStatus(params: z.infer<typeof getDeliveryStatusSchema>): Promise<string> {
  const result = await getClient().get("sms/status.json", { messageid: params.messageid });
  return JSON.stringify(result, null, 2);
}
