export declare class KavenegarClient {
    private apiKey;
    constructor();
    request(method: string, endpoint: string, params?: Record<string, string>): Promise<unknown>;
    get(endpoint: string, params?: Record<string, string>): Promise<unknown>;
    post(endpoint: string, params: Record<string, string>): Promise<unknown>;
}
