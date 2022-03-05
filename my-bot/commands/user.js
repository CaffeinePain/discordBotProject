const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('유저')
		.setDescription('유저 정보를 봅니다!'),
	async execute(interaction) {
        await interaction.reply(`유저 태그: ${interaction.user.tag}\n유저 ID: ${interaction.user.id}`);
	},
};