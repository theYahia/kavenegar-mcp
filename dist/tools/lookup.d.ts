import { z } from "zod";
export declare const lookupSchema: z.ZodObject<{
    receptor: z.ZodString;
    template: z.ZodString;
    tokens: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    receptor: string;
    template: string;
    tokens: string[];
}, {
    receptor: string;
    template: string;
    tokens: string[];
}>;
export declare function handleLookup(params: z.infer<typeof lookupSchema>): Promise<string>;
