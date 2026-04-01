# kavenegar-mcp

MCP server for Kavenegar SMS gateway (Iran). Supports sending SMS, bulk SMS, OTP, template-based messaging, delivery tracking, and account management. Uses API Key in URL path authentication.

## Tools (8)

| Tool | Description |
|------|-------------|
| `send_sms` | Send a single SMS message |
| `send_bulk_sms` | Send SMS to multiple recipients |
| `get_delivery_status` | Check message delivery status |
| `get_account_info` | Get account information |
| `lookup` | Send template-based SMS with tokens |
| `send_otp` | Send OTP code using a template |
| `get_balance` | Get account balance and credits |
| `list_outbox` | List sent messages in date range |

## Quick Start

```json
{
  "mcpServers": {
    "kavenegar": {
      "command": "npx",
      "args": ["-y", "@theyahia/kavenegar-mcp"],
      "env": {
        "KAVENEGAR_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `KAVENEGAR_API_KEY` | Yes | API key from Kavenegar panel |

## Demo Prompts

- "Send an SMS to 09121234567 saying 'Your order is ready'"
- "Send bulk SMS to 3 numbers with a promotion"
- "Check delivery status of message 123456789"
- "Send OTP to 09121234567 using template 'verify'"
- "Show my Kavenegar account balance"

## License

MIT
