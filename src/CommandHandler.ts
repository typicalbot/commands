import { ApplicationCommandData, Client, CommandInteraction } from 'discord.js';

interface CommandHandler {
    (client: Client, interaction: CommandInteraction): Promise<unknown> | unknown;
    options: ApplicationCommandData;
}

export default CommandHandler;
