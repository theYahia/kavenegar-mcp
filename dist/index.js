#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { sendSmsSchema, handleSendSms } from "./tools/send-sms.js";
import { sendBulkSmsSchema, handleSendBulkSms } from "./tools/send-bulk-sms.js";
import { getDeliveryStatusSchema, handleGetDeliveryStatus } from "./tools/get-delivery-status.js";
import { getAccountInfoSchema, handleGetAccountInfo } from "./tools/get-account-info.js";
import { lookupSchema, handleLookup } from "./tools/lookup.js";
import { sendOtpSchema, handleSendOtp } from "./tools/send-otp.js";
import { getBalanceSchema, handleGetBalance } from "./tools/get-balance.js";
import { listOutboxSchema, handleListOutbox } from "./tools/list-outbox.js";
const server = new McpServer({ name: "kavenegar-mcp", version: "1.0.0" });
server.tool("send_sms", "Send an SMS message via Kavenegar.", sendSmsSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleSendSms(params) }] }));
server.tool("send_bulk_sms", "Send SMS to multiple recipients.", sendBulkSmsSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleSendBulkSms(params) }] }));
server.tool("get_delivery_status", "Check SMS delivery status.", getDeliveryStatusSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleGetDeliveryStatus(params) }] }));
server.tool("get_account_info", "Get Kavenegar account information.", getAccountInfoSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleGetAccountInfo(params) }] }));
server.tool("lookup", "Send template-based SMS (verify/OTP).", lookupSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleLookup(params) }] }));
server.tool("send_otp", "Send OTP code using a template.", sendOtpSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleSendOtp(params) }] }));
server.tool("get_balance", "Get account balance and credit info.", getBalanceSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleGetBalance(params) }] }));
server.tool("list_outbox", "List sent messages in date range.", listOutboxSchema.shape, async (params) => ({ content: [{ type: "text", text: await handleListOutbox(params) }] }));
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("[kavenegar-mcp] Server started. 8 tools registered.");
}
main().catch((error) => { console.error("[kavenegar-mcp] Error:", error); process.exit(1); });
//# sourceMappingURL=index.js.map