import CommandCollection from './CommandCollection';
import { REST } from '@discordjs/rest';
import { APIApplicationCommand, Routes } from 'discord-api-types/v9';

const registerGlobalCommands = async (token: string, applicationId: string, commandMap: CommandCollection) => {
    const commands = commandMap.map((c) => c.options);
    const rest = new REST({ version: '9' }).setToken(token);

    try {
        await rest.put(Routes.applicationCommands(applicationId), {
            body: commands,
        });
    } catch (e) {
        console.error(e);
    }
};

const unregisterGlobalCommands = async (token: string, applicationId: string) => {
    const rest = new REST({ version: '9' }).setToken(token);

    try {
        const commands = (await rest.get(Routes.applicationCommands(applicationId))) as APIApplicationCommand[];

        for (const command of commands) {
            await rest.delete(Routes.applicationCommand(applicationId, command.id));
        }
    } catch (e) {
        console.error(e);
    }
};

export { registerGlobalCommands, unregisterGlobalCommands };
