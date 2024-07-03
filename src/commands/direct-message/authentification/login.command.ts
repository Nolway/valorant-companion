import { Category } from "@discordx/utilities";
import { Discord, Guard, Slash } from "discordx";
import { CommandCategory } from "../../../enums/command-category.enum";
import { OnlyDM } from "../../../guards/only-dm.guard";

@Discord()
@Category(CommandCategory.AUTHENTICATION)
export class LoginCommand {
  @Slash({
    name: "login",
    description: "Login your Riot account to the app",
    descriptionLocalizations: {
      fr: "Connectez votre compte Riot à l'application",
    },
  })
  @Guard(OnlyDM)
  handle(): void {
  }
}
