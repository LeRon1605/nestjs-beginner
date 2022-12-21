import { Claim } from "../dto/claim.dto";

export interface TokenGenerator {
    generate(claims): string;
}