import { Injectable } from "@nestjs/common";
import { TokenGenerator } from "../interfaces/token-generator.interface";

@Injectable()
export class Base64Generator implements TokenGenerator {
    generate(claims): string {
        return Buffer.from(JSON.stringify(claims)).toString("base64");   
    }
}