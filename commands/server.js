const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('서버')
		.setDescription('현재 디스코드 서버 정보를 확인합니다!'),
	async execute(interaction) {
        await interaction.reply(`서버명: ${interaction.guild.name}\n멤버: ${interaction.guild.memberCount}명`);
	},
};