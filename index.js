const Discord = require("discord.js");
const config = require("./config.json");

var mongo = require("mongodb");

const mongoose = require('mongoose');
const Reminder = require('./models/reminder');

const dbURI = 'mongodb+srv://admin:ooCOBei54ru2SCbp@cluster0.6frkz.mongodb.net/betabot-data?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));

const reminder = new Reminder({
    userID: '29101',
    time: '9pm',
    msg: 'test',
    repeat: 'false'
});

reminder.save()
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err);
});

Reminder


const client = new Discord.Client();

const prefix = "+";





client.on("message", function(message) {
    if (message.author.bot) return;

    if(!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    switch (command)
    {
        case "ping":
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
        break;

        case "sum":
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter += x);
        message.reply(`The sum of all the arguments you provided is ${sum}!`);
        break;

        default:
        break;
    }
});

client.login(config.BOT_TOKEN);

