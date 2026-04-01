import { z } from "zod";
export declare const sendOtpSchema: z.ZodObject<{
    receptor: z.ZodString;
    template: z.ZodString;
}, "strip", z.ZodTypeAny, {
    receptor: string;
    template: string;
}, {
    receptor: string;
    template: string;
}>;
export declare function handleSendOtp(params: z.infer<typeof sendOtpSchema>): Promise<string>;
