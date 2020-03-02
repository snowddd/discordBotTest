const {google} = require('googleapis');
const schedule = require('node-schedule');
const Discord = require('discord.js')
const client = new Discord.Client()

const youtube = google.youtube({
    version: 'v3',
    auth: yourGoogleKEY,
  });

  var rule = new schedule.RecurrenceRule();
rule.hour = 17 ;
rule.minute = 05;

client.on('message', msg => {
if (msg.content === '!史丹利!') {
    msg.reply('已開啟。')
    schedule.scheduleJob(rule, function(){
        youtube.search.list({
            part: 'snippet',
            q: '【Stanley】'
          }, function (err, data) {
            if (err) {
              console.error('Error: ' + err);
            }
            if (data) {

                if(data.data.items[1].snippet.publishedAt.toString().slice(0,10) !== new Date().getFullYear()+'-'+((new Date().getMonth()+1)<10?'0'+(new Date().getMonth()+1):(new Date().getMonth()+1))+'-'+ ((new Date().getDate())<10?'0'+(new Date().getDate()):(new Date().getDate())))
                {
                    msg.reply('哭阿今天沒準時發片 :shit:')
              }
                else{
                    msg.reply(`https://www.youtube.com/watch?v=${data.data.items[1].id.videoId}`)
                }
           
            }
          });
        
        });
}
});

client.login(yourBotKEY)

console.log('server on')