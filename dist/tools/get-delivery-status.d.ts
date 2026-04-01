import { z } from "zod";
export declare const getDeliveryStatusSchema: z.ZodObject<{
    messageid: z.ZodString;
}, "strip", z.ZodTypeAny, {
    messageid: string;
}, {
    messageid: string;
}>;
export declare function handleGetDeliveryStatus(params: z.infer<typeof getDeliveryStatusSchema>): Promise<string>;
