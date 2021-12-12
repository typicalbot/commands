import { ApplicationCommandData, BaseCommandInteraction, Client } from 'discord.js';

interface CommandHandler<T extends Client> {
    (client: T, interaction: BaseCommandInteraction<'cached'>, args: unknown, locale: CommandLocale):
        | Promise<unknown>
        | unknown;
    options: ApplicationCommandData;
}

interface CommandLocale {
    guild: string;
    user: string;
}

export default CommandHandler;
export { CommandLocale };
