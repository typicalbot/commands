import { ApplicationCommandData, BaseCommandInteraction, Client } from 'discord.js';

interface CommandHandler<T extends Client> {
    (client: T, interaction: BaseCommandInteraction<'cached'>): Promise<unknown> | unknown;
    options: ApplicationCommandData;
}

export default CommandHandler;
