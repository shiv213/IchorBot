const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
        .setName('purge', 'prune')
        .setDescription('Deletes Messages'),
    async execute(interaction) {
        // let amount = args[0];

        // if (isNaN(amount)) {
        //     return message.channel.send('Please provide a valid number you ChImP!');
        // }

        // if (amount < 1) {
        //     return message.channel.send('Please provide a number greater than 1 you BaBoOn!');
        // }

        // if (amount > 99) {
        //     amount = 99;
        // }

        // try {
        //     message.channel.bulkDelete(parseInt(amount) + 1, true).then(m => {
        //         message.channel.send(`${parseInt(m.size)-1} messages purged!`).then(m => {
        //             m.delete({ timeout: 3000});
        //         })
        //     })
        // } catch {
        //     return message.channel.send('There was an issue. Please report to Ichor Administration');
        // }
    }
}