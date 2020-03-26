const Telegraf = require('telegraf');
const bot = new Telegraf('1118722234:AAEus4ZJkLSvH9pBIvFYvAnGpDmO2wM1JzA')
var process = require('child_process');


bot.command('ipconfig',(ctx)=>{
    process.exec('ipconfig',function (err,stdout,stderr) {
        if (err) {
            console.log("\n"+stderr);
            return ctx.reply("\n"+stderr);
        } else {
            console.log(stdout);
            return ctx.reply(stdout);
        }
    })


})
bot.launch();