import { Category } from "@discordx/utilities";
import { Discord, Guard, Slash } from "discordx";
import { CommandCategory } from "../../../enums/command-category.enum";
import { OnlyDM } from "../../../guards/only-dm.guard";

@Discord()
@Category(CommandCategory.AUTHENTICATION)
export class LogoutCommand {
  @Slash({
    name: "logout",
    description: "Logout your Riot account on the app",
    descriptionLocalizations: {
      fr: "Déconnectez votre compte Riot de l'application",
    }
  })
  @Guard(OnlyDM)
  handle(): void {
  }
}
