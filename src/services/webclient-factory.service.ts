import { WebClient } from "@valapi/web-client";

export function generateEmptyWebClient(): WebClient {
    return new WebClient();
}

export function generateWebClientFromUserJson(userJson: WebClient.UserJson): WebClient {
    const client = generateEmptyWebClient();
    client.fromUserJSON(userJson);
    return client;
}
