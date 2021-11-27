import { Collection } from 'discord.js';
import CommandHandler from './CommandHandler';

class CommandCollection extends Collection<string, CommandHandler> {
    add(command: CommandHandler) {
        super.set(command.options.name, command);
    }
}

export default CommandCollection;
