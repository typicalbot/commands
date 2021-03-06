import { Collection } from 'discord.js';
import CommandHandler from './CommandHandler';

class CommandCollection extends Collection<string, CommandHandler<any>> {
    add(command: CommandHandler<any>) {
        super.set(command.options.name.toLowerCase(), command);
    }
}

export default CommandCollection;
