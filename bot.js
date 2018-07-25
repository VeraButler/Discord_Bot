var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' – (' + bot.id + ')');
});
//create function for bot.sendMessage
//botMessage = (message) => {
//    bot.sendMessage({
//        to: channelID, //       message: message});
//}
//list new commands here
commands =['!test', '!test2']
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
        case 'test':
            bot.sendMessage({
            to: channelID,
            message: 'Greetings! Welcome to the server!'});
            break;
        case 'help':
            bot.sendMessage({
            to: channelID,
            message: 'It is never as easy as it looks.'});
            break;
}
}
});