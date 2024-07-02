import { IntentsBitField } from "discord.js";
import { Client } from "discordx";
import { importx } from "@discordx/importer";

const botToken = process.env.BOT_TOKEN;

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
