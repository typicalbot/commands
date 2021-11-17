# TypicalBot Commands

Minimalistic slash command library for [Discord.js](https://github.com/discordjs/discord.js).

## Handling Interaction Event

It is recommended that you use [@typicalbot/events](https://github.com/typicalbot/events) with this library. However, we
have provided an example if you choose not to use [@typicalbot/events](https://github.com/typicalbot/events).

### TypicalBot Events

```ts
import EventHandler from '@typicalbot/events';

const SlashCommandHandler: EventHandler<'interactionCreate'> = async (client, interaction) => {
    if (interaction.isCommand()) return;

    const name = interaction.commandName;
    if (client.commands.has(name)) return; // This is a Collection of commands

    try {
        await client.commands.get(name)?.(client, interaction);
    } catch {
        await interaction.reply({
            content: 'An error occurred while trying to execute that command.'
        });
    }
}
```

### Discord.js

```ts
client.on('interactionCreate', async (interaction) => {
    if (interaction.isCommand()) return;

    const name = interaction.commandName;
    if (client.commands.has(name)) return; // This is a Collection of commands

    try {
        await client.commands.get(name)?.(client, interaction);
    } catch {
        await interaction.reply({
            content: 'An error occurred while trying to execute that command.'
        });
    }
});
```

## License

TypicalBot Commands is an open source software licensed under the [Apache 2.0 license](LICENSE).