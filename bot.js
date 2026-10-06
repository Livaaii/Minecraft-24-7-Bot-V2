const mineflayer = require('mineflayer-forge');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'virgogalacticosmod.aternos.me',
        port: 54943,
        username: 'Bot_NPC_247',
        version: '1.20.1'
    });

    bot.on('login', () => {
        console.log('[NPC] Conexión establecida con el servidor.');
    });

    bot.on('spawn', () => {
        console.log('[NPC] El bot apareció correctamente en el mundo.');
    });

    bot.on('end', (reason) => {
        console.log(`[NPC] Desconectado: ${reason}`);
        console.log('[NPC] Reintentando en 25 segundos...');
        setTimeout(createBot, 25000);
    });

    bot.on('error', (err) => {
        console.log(`[NPC] Error: ${err.message}`);
    });
}

createBot();
