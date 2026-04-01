import { z } from "zod";
export declare const listOutboxSchema: z.ZodObject<{
    date_from: z.ZodString;
    date_to: z.ZodString;
    sender: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    date_from: string;
    date_to: string;
    sender?: string | undefined;
}, {
    date_from: string;
    date_to: string;
    sender?: string | undefined;
}>;
export declare function handleListOutbox(params: z.infer<typeof listOutboxSchema>): Promise<string>;
