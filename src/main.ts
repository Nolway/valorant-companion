import { IntentsBitField } from "discord.js";
import { Client } from "discordx";
import { importx } from "@discordx/importer";
import { z } from "zod";

export const envConfig = z.object({
    BOT_TOKEN: z.string(),
    MONGODB_USER: z.string(),
    MONGODB_PASS: z.string(),
    MONGODB_DBNAME: z.string(),
    REDIS_HOST: z.string(),
    REDIS_PORT: z.string(),
    REDIS_PASS: z.string(),
}).parse(process.env);

const botToken = envConfig.BOT_TOKEN;

export const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.DirectMessages,
        IntentsBitField.Flags.GuildInvites,
        IntentsBitField.Flags.GuildScheduledEvents,
    ],
    silent: false,
});

async function start(): Promise<void> {
    client.on("ready", () => {
        console.log("Bot is ready!");

        // to create/update/delete discord application commands
        client.initApplicationCommands().catch(console.error);
    });

    client.on("interactionCreate", (interaction) => {
        client.executeInteraction(interaction);
    });

    if (!botToken) {
        throw new Error("Missing BOT_TOKEN env variable");
    }

    await importx(`${__dirname}/{commands,events}/**/*.{ts,js}`);

    await client.login(botToken);
}

start().catch(console.error);
