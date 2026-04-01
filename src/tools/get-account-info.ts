import { z } from "zod";
import { KavenegarClient } from "../client.js";
let _client: KavenegarClient | null = null;function getClient(): KavenegarClient { if (!_client) _client = new KavenegarClient(); return _client; }
export const getAccountInfoSchema = z.object({});

export async function handleGetAccountInfo(_params: z.infer<typeof getAccountInfoSchema>): Promise<string> {
  const result = await getClient().get("account/info.json");
  return JSON.stringify(result, null, 2);
}
