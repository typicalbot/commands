import { ApplicationCommandData, Client, CommandInteraction } from "discord.js";

export interface CommandHandler {
    (client: Client, interaction: CommandInteraction): Promise<unknown> | unknown;
    options: ApplicationCommandData;
}