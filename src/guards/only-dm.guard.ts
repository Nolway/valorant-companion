import { ChannelType, CommandInteraction } from "discord.js";
import { GuardFunction } from "discordx";
import { getTranslate } from "../utils/translate";

export const OnlyDM: GuardFunction<CommandInteraction> = async (
    args,
    client,
    next,
) => {
    if (!args.channel || args.channel.type === ChannelType.DM) {
        await next();
    } else {
        const translate = getTranslate(args.locale);

        // Message displayed in the channel
        await args.reply(translate.guards.onlyDm.reply());
        // Message displayed in DMs
        await args.user.send(translate.guards.onlyDm.userDm({ commandName: args.commandName }));
    }
};
