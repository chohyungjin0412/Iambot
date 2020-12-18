const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "안녕";
const byeChannelName = "잘가";
const welcomeChannelComment = "안녕.";
const byeChannelComment = "잘가.";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "게스트"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.content === '야스오는') {
    message.reply('과학');
  }
  if(message.content === '에코 출신') {
    message.reply('자운');
  }
  if(message.content === 'f는') {
    message.reply('ma');
  }
  if(message.content === 'F는') {
    message.reply('ma');
  }
  if(message.content === '서버 만든이') {
    message.reply('조형진 이경제');
  }
  if(message.content === '사미라') {
    message.reply('녹서스');
  }
  if(message.content === 'ping') {
    message.reply('pong');
  }
  if(message.content === '선도부') {
    message.reply('네빌');
  }
  if(message.content === '나 심심해') {
    message.reply('ㅇㅉㄹㄱ');
  }
  if(message.content === '형진띠!') {
    message.reply('ㅙ');
  }
  if(message.content === '야꿀벌') {
    message.reply('넣을게');
  }
  if(message.content === '옵지') {
    message.reply('https://www.op.gg/');
  }
  if(message.content === '1+1은?') {
    message.reply('귀요미');
  }
  if(message.content === '2+2는?') {
    message.reply('귀요미');
  }
  if(message.content === '3+3는?') {
    message.reply('귀요미');
  }

  if(message.content == 'embed') {
    let img = 'https://cdn.discordapp.com/attachments/786762687173623819/787149079989321789/5453043c81e5d70d.png';
    let embed = new Discord.RichEmbed()
      .setTitle('아주중')
      .setURL('http://aju.sen.ms.kr/index.do')
      .setAuthor('아주중', img, 'http://aju.sen.ms.kr/index.do')
      .setThumbnail(img)
      .addBlankField()
      .addField('아주중', 'http://aju.sen.ms.kr/index.do')
      .addField('교훈', '성실 겸손 창조', true)
      .addField('교목', '소나무', true)
      .addField('교화', '매화', true)
      .addField('정보', '위치 - 서울특별시 송파구 올림픽로4길 69 (잠실동)\n학생수 - 580명\n교직원 수 - 70명\n(학생수, 교직원 수 는 2018년 기준)\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('아주중 - 조형진', img)

    message.channel.send(embed)
  } else if(message.content == 'embed2') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content.startsWith('!전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }

  if(message.content.startsWith('!노래틀어라')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!노래틀어라'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@yndhsia#0458> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}


client.login(token);
