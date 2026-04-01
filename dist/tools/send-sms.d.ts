import { z } from "zod";
export declare const sendSmsSchema: z.ZodObject<{
    receptor: z.ZodString;
    message: z.ZodString;
    sender: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    receptor: string;
    message: string;
    sender?: string | undefined;
}, {
    receptor: string;
    message: string;
    sender?: string | undefined;
}>;
export declare function handleSendSms(params: z.infer<typeof sendSmsSchema>): Promise<string>;
