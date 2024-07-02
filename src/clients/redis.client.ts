import Redis from "ioredis";
import { envConfig } from "../main";

export const redis = new Redis({
    host: envConfig.REDIS_HOST,
    port: parseInt(envConfig.REDIS_PORT),
    password: envConfig.REDIS_PASS,
});
