import { z } from "zod";
import { KavenegarClient } from "../client.js";
let _client: KavenegarClient | null = null;function getClient(): KavenegarClient { if (!_client) _client = new KavenegarClient(); return _client; }
export const getBalanceSchema = z.object({});

export async function handleGetBalance(_params: z.infer<typeof getBalanceSchema>): Promise<string> {
  const result = await getClient().get("account/info.json");
  return JSON.stringify(result, null, 2);
}
