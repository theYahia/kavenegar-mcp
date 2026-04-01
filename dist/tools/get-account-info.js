import { z } from "zod";
import { KavenegarClient } from "../client.js";
let _client = null;
function getClient() { if (!_client)
    _client = new KavenegarClient(); return _client; }
export const getAccountInfoSchema = z.object({});
export async function handleGetAccountInfo(_params) {
    const result = await getClient().get("account/info.json");
    return JSON.stringify(result, null, 2);
}
//# sourceMappingURL=get-account-info.js.map