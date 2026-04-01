import { z } from "zod";
export declare const getAccountInfoSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare function handleGetAccountInfo(_params: z.infer<typeof getAccountInfoSchema>): Promise<string>;
