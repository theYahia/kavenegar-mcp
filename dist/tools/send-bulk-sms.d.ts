import { z } from "zod";
export declare const sendBulkSmsSchema: z.ZodObject<{
    receptors: z.ZodArray<z.ZodString, "many">;
    message: z.ZodString;
    sender: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    message: string;
    receptors: string[];
    sender?: string | undefined;
}, {
    message: string;
    receptors: string[];
    sender?: string | undefined;
}>;
export declare function handleSendBulkSms(params: z.infer<typeof sendBulkSmsSchema>): Promise<string>;
