const BASE_URL = "https://api.kavenegar.com/v1";
const TIMEOUT = 15_000;

export class KavenegarClient {
  private apiKey: string;

  constructor() {
    this.apiKey = process.env.KAVENEGAR_API_KEY ?? "";
    if (!this.apiKey) {
      throw new Error(
        "Environment variable KAVENEGAR_API_KEY is required. " +
        "Get your API key at https://panel.kavenegar.com/"
      );
    }
  }

  async request(method: string, endpoint: string, params?: Record<string, string>): Promise<unknown> {
    const url = new URL(`${BASE_URL}/${this.apiKey}/${endpoint}`);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT);

    try {
      let response: Response;
      if (method === "GET") {
        if (params) {
          Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
        }
        response = await fetch(url.toString(), {
          method: "GET",
          headers: { "Accept": "application/json" },
          signal: controller.signal,
        });
      } else {
        const body = new URLSearchParams(params ?? {});
        response = await fetch(url.toString(), {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json",
          },
          body: body.toString(),
          signal: controller.signal,
        });
      }
      clearTimeout(timer);

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Kavenegar HTTP ${response.status}: ${text}`);
      }

      const contentType = response.headers.get("content-type") ?? "";
      if (contentType.includes("application/json")) {
        return response.json();
      }
      return { status: response.status, message: await response.text() };
    } catch (error) {
      clearTimeout(timer);
      if (error instanceof DOMException && error.name === "AbortError") {
        throw new Error("Kavenegar: request timeout (15s). Try again later.");
      }
      throw error;
    }
  }

  async get(endpoint: string, params?: Record<string, string>): Promise<unknown> {
    return this.request("GET", endpoint, params);
  }

  async post(endpoint: string, params: Record<string, string>): Promise<unknown> {
    return this.request("POST", endpoint, params);
  }
}
