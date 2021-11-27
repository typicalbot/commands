import { ApplicationCommandData, Client, CommandInteraction } from 'discord.js';

interface CommandHandler<T extends Client> {
    (client: T, interaction: CommandInteraction): Promise<unknown> | unknown;
    options: ApplicationCommandData;
}

export default CommandHandler;
