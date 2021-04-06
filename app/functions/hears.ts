/**
 * Telegraf Hears
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import bot from "@app/functions/telegraf";

const text = async (): Promise<void> => {
	bot.on("text", (ctx) => {
		ctx.telegram.sendMessage(ctx.message.chat.id, `Your text --> ${ctx.update.message.text}`);
	});
};

export { text };
export default text;
