const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', msg => {
    if (msg.content === 'alistar' || msg.content ==='牛' || msg.content ==='亞歷斯塔') {
      msg.reply('https://tw.op.gg/champion/alistar/statistics/support')
    }
    if (msg.content === 'aphelios' || msg.content ==='大東哥' || msg.content ==='亞菲利歐') {
        msg.reply('https://www.op.gg/champion/aphelios/statistics/bot')
    }
    if (msg.content === 'ezreal' || msg.content ==='ez' || msg.content ==='伊澤瑞爾') {
        msg.reply('https://www.op.gg/champion/ezreal/statistics/bot')
    }
    if (msg.content === 'irelia' || msg.content ==='伊瑞' || msg.content ==='伊瑞莉雅') {
        msg.reply('https://www.op.gg/champion/irelia/statistics')
    }
    if (msg.content === 'illaoi' || msg.content ==='伊羅旖' ) {
        msg.reply('https://www.op.gg/champion/illaoi/statistics')
    }
    if (msg.content === 'evelynn' || msg.content ==='eve' || msg.content ==='伊芙琳') {
        msg.reply('https://www.op.gg/champion/evelynn/statistics')
    }
    if (msg.content === 'elise' || msg.content ==='蜘蛛' || msg.content ==='伊莉絲') {
        msg.reply('https://www.op.gg/champion/elise/statistics/jungle')
    }
    if (msg.content === 'kled' || msg.content ==='小嘎' || msg.content ==='克雷德') {
        msg.reply('https://www.op.gg/champion/kled/statistics')
    }
    if (msg.content === 'kalista' || msg.content ==='克黎思妲') {
        msg.reply('https://www.op.gg/champion/kalista/statistics/bot')
    }
    if (msg.content === 'kayle' || msg.content ==='天使' || msg.content ==='凱爾') {
        msg.reply('https://www.op.gg/champion/kayle/statistics/top')
    }
    if (msg.content === 'caitlyn' || msg.content ==='凱特琳') {
        msg.reply('https://www.op.gg/champion/caitlyn/statistics/bot')
    }
    if (msg.content === 'kennen' || msg.content ==='皮卡丘' || msg.content ==='凱能') {
        msg.reply('https://www.op.gg/champion/kennen/statistics')
    }
    if (msg.content === 'kaisa' || msg.content ==='卡莎' || msg.content ==='凱莎') {
        msg.reply('https://www.op.gg/champion/kaisa/statistics/bot')
    }
    if (msg.content === 'xayah' || msg.content ==='剎雅') {
        msg.reply('https://www.op.gg/champion/xayah/statistics/bot')
    }
    if (msg.content === 'gangplank' || msg.content ==='GP' || msg.content ==='剛普朗克') {
        msg.reply('https://www.op.gg/champion/gangplank/statistics/top')
    }
    if (msg.content === 'nunu' || msg.content ==='努努' || msg.content ==='努努和威朗普') {
        msg.reply('https://www.op.gg/champion/nunu/statistics/jungle')
    }
    if (msg.content === 'zed' || msg.content ==='劫') {
        msg.reply('https://www.op.gg/champion/zed/statistics/mid')
    }
    if (msg.content === 'leblanc' || msg.content ==='LB' || msg.content ==='勒布朗') {
        msg.reply('https://www.op.gg/champion/leblanc/statistics/mid')
    }
    if (msg.content === 'khazix' || msg.content ==='卡力斯' || msg.content ==='螳螂') {
        msg.reply('https://www.op.gg/champion/khazix/statistics/jungle')
    }
    if (msg.content === 'karthus' || msg.content ==='卡爾瑟斯' || msg.content ==='死哥'|| msg.content ==='死歌') {
        msg.reply('https://www.op.gg/champion/karthus/statistics/jungle')
    }
    if (msg.content === 'katarina' || msg.content ==='卡特' || msg.content ==='卡特蓮娜') {
        msg.reply('https://www.op.gg/champion/katarina/statistics/mid')
    }
    if (msg.content === 'karma' || msg.content ==='卡瑪' ) {
        msg.reply('https://www.op.gg/champion/karma/statistics/support')
    }
    if (msg.content === 'cassiopeia' || msg.content ==='蛇女' || msg.content ==='卡莎碧雅') {
        msg.reply('https://www.op.gg/champion/cassiopeia/statistics/mid')
    }
    if (msg.content === 'kassadin' || msg.content ==='卡薩丁') {
        msg.reply('https://www.op.gg/champion/kassadin/statistics/mid')
    }
    if (msg.content === 'camille' || msg.content ==='卡蜜兒') {
        msg.reply('https://www.op.gg/champion/camille/statistics/top')
    }
    if (msg.content === 'aatrox' || msg.content ==='厄薩斯' || msg.content ==='劍魔') {
        msg.reply('https://www.op.gg/champion/aatrox/statistics/top')
    }
    if (msg.content === 'gragas' || msg.content ==='酒桶' || msg.content ==='古拉格斯') {
        msg.reply('https://www.op.gg/champion/gragas/statistics/jungle')
    }
    if (msg.content === 'skaner' || msg.content ==='史迦納' || msg.content ==='蠍子') {
        msg.reply('樣本過少RIP')
    }
    if (msg.content === 'sejuani' || msg.content ==='史瓦妮' || msg.content ==='豬女') {
        msg.reply('https://www.op.gg/champion/sejuani/statistics/jungle')
    }
    if (msg.content === 'jinx' || msg.content ==='吉茵珂絲') {
        msg.reply('https://www.op.gg/champion/jinx/statistics/bot')
    }
    if (msg.content === 'gnar' || msg.content ==='吶兒' || msg.content ==='那兒') {
        msg.reply('https://www.op.gg/champion/gnar/statistics/top')
    }
    if (msg.content === 'jarvaniv' || msg.content ==='j4' || msg.content ==='嘉文四世') {
        msg.reply('https://www.op.gg/champion/jarvaniv/statistics/jungle')
    }
    if (msg.content === 'twitch' || msg.content ==='圖奇' || msg.content ==='老鼠') {
        msg.reply('https://www.op.gg/champion/twitch/statistics/bot')
    }
    if (msg.content === 'ivern' || msg.content ==='埃爾文') {
        msg.reply('https://www.op.gg/champion/ivern/statistics/jungle')
    }
    if (msg.content === 'taliyah' || msg.content ==='塔莉雅' || msg.content ==='岩雀') {
        msg.reply('https://www.op.gg/champion/taliyah/statistics/jungle')
    }
    if (msg.content === 'taric' || msg.content ==='塔里克') {
        msg.reply('https://www.op.gg/champion/taric/statistics/support')
    }
    if (msg.content === 'talon' || msg.content ==='塔隆') {
        msg.reply('https://www.op.gg/champion/talon/statistics/mid')
    }
    if (msg.content === 'malphite' || msg.content ==='墨菲特' || msg.content ==='石頭人') {
        msg.reply('https://www.op.gg/champion/malphite/statistics/top')
    }
    if (msg.content === 'nocturne' || msg.content ==='夜曲' || msg.content ==='NOC') {
        msg.reply('https://www.op.gg/champion/nocturne/statistics/jungle')
    }
    if (msg.content === 'nidalee' || msg.content ==='豹女' || msg.content ==='奈德麗') {
        msg.reply('https://www.op.gg/champion/nidalee/statistics/jungle')
    }
    if (msg.content === 'orianna' || msg.content ==='球女' || msg.content ==='奧莉安娜') {
        msg.reply('https://www.op.gg/champion/orianna/statistics/mid')
    }
    if (msg.content === 'missfortune' || msg.content ==='mf' || msg.content ==='好運姐') {
        msg.reply('https://www.op.gg/champion/missfortune/statistics/bot')
    }
    if (msg.content === 'neeko' || msg.content ==='妮可') {
        msg.reply('https://www.op.gg/champion/neeko/statistics/support')
    }
    if (msg.content === 'senna' || msg.content ==='珊娜') {
        msg.reply('https://www.op.gg/champion/senna/statistics/support')
    }
    if (msg.content === 'qiyana' || msg.content ==='姬亞娜') {
        msg.reply('https://www.op.gg/champion/qiyana/statistics/mid')
    }
    if (msg.content === 'velkoz' || msg.content ==='威寇茲' || msg.content ==='章魚') {
        msg.reply('https://www.op.gg/champion/velkoz/statistics/support')
    }
    if (msg.content === 'nami' || msg.content ==='娜米') {
        msg.reply('https://www.op.gg/champion/nami/statistics/support')
    }
    if (msg.content === 'annie' || msg.content ==='安妮' ) {
        msg.reply('https://www.op.gg/champion/annie/statistics/mid')
    }
    if (msg.content === 'kogmaw' || msg.content ==='寇格魔' || msg.content ==='kog') {
        msg.reply('https://euw.op.gg/champion/kogmaw/statistics/bot')
    }
    if (msg.content === 'tristana' || msg.content ==='小砲' || msg.content ==='崔絲塔娜') {
        msg.reply('https://euw.op.gg/champion/tristana/statistics/bot')
    }
    if (msg.content === 'bard' || msg.content ==='巴德') {
        msg.reply('https://euw.op.gg/champion/bard/statistics/support')
    }
    if (msg.content === 'brand' || msg.content ==='火人' || msg.content ==='布蘭德') {
        msg.reply('https://euw.op.gg/champion/brand/statistics/support')
    }
    if (msg.content === 'braum' || msg.content ==='布郎姆' || msg.content ==='布朗姆') {
        msg.reply('https://euw.op.gg/champion/braum/statistics/support')
    }
    if (msg.content === 'blitzcrank' || msg.content ==='機器人' || msg.content ==='布里茨') {
        msg.reply('https://www.op.gg/champion/blitzcrank/statistics/support')
    }
    if (msg.content === 'ziggs' || msg.content ==='希格斯') {
        msg.reply('https://www.op.gg/champion/ziggs/statistics/mid')
    }
    if (msg.content === 'shyvana' || msg.content ==='龍女' || msg.content ==='希瓦娜') {
        msg.reply('https://www.op.gg/champion/shyvana/statistics/jungle')
    }
    if (msg.content === 'sivir' || msg.content ==='希維爾') {
        msg.reply('https://www.op.gg/champion/sivir/statistics/bot')
    }
    if (msg.content === 'corki' || msg.content ==='飛機' || msg.content ==='庫奇') {
        msg.reply('樣本數過少RIP')
    }
    if (msg.content === 'volibear' || msg.content ==='弗力貝爾' || msg.content ==='福利熊') {
        msg.reply('https://www.op.gg/champion/volibear/statistics/top')
    }
    if (msg.content === 'vladimir' || msg.content ==='血鬼' || msg.content ==='弗拉迪米爾') {
        msg.reply('https://www.op.gg/champion/vladimir/statistics/top')
    }
    if (msg.content === 'MonkeyKing' || msg.content ==='悟空' || msg.content ==='猴子') {
        msg.reply('樣本數過少RIP')
    }
    if (msg.content === 'yuumi' || msg.content ==='悠咪' || msg.content ==='貓') {
        msg.reply('https://www.op.gg/champion/yuumi/statistics/support')
    }
    if (msg.content === 'kayn' || msg.content ==='慨影') {
        msg.reply('https://www.op.gg/champion/kayn/statistics/jungle')
    }
    if (msg.content === 'lux' || msg.content ==='光砲' || msg.content ==='拉克絲') {
        msg.reply('https://www.op.gg/champion/lux/statistics/support')
    }
    if (msg.content === 'rammus' || msg.content ==='烏龜' || msg.content ==='拉姆斯') {
        msg.reply('https://www.op.gg/champion/rammus/statistics/jungle')
    }
    if (msg.content === 'teemo' || msg.content ==='提摩' || msg.content ==='賤畜') {
        msg.reply('https://www.op.gg/champion/teemo/statistics/top')
    }
    if (msg.content === 'swain' || msg.content ==='斯溫') {
        msg.reply('https://www.op.gg/champion/swain/statistics/support')
    }
    if (msg.content === 'masteryi' || msg.content ==='yi' || msg.content ==='易大師') {
        msg.reply('https://www.op.gg/champion/masteryi/statistics/jungle')
    }
    if (msg.content === 'syndra' || msg.content ==='星朵拉') {
        msg.reply('https://www.op.gg/champion/syndra/statistics/mid')
    }
    if (msg.content === 'zac' || msg.content ==='札克' || msg.content ==='綠色廢物') {
        msg.reply('https://www.op.gg/champion/zac/statistics/jungle')
    }
    if (msg.content === 'leesin' || msg.content ==='盲僧' || msg.content ==='李星') {
        msg.reply('https://www.op.gg/champion/leesin/statistics/jungle')
    }
    if (msg.content === 'jayce' || msg.content ==='杰西') {
        msg.reply('https://www.op.gg/champion/jayce/statistics/top')
    }
    if (msg.content === 'zyra' || msg.content ==='枷蘿' || msg.content ==='花女') {
        msg.reply('https://www.op.gg/champion/zyra/statistics/support')
    }
    if (msg.content === 'zoe' || msg.content ==='柔依') {
        msg.reply('https://www.op.gg/champion/zoe/statistics/mid')
    }
    if (msg.content === 'zilean' || msg.content ==='時鐘' || msg.content ==='鶺鴒'|| msg.content ==='極靈') {
        msg.reply('https://www.op.gg/champion/zilean/statistics/support')
    }
    if (msg.content === 'olaf' || msg.content ==='歐拉夫') {
        msg.reply('https://www.op.gg/champion/olaf/statistics/jungle')
    }
    if (msg.content === 'vayne' || msg.content ==='汎') {
        msg.reply('https://www.op.gg/champion/vayne/statistics/bote')
    }
    if (msg.content === 'warwick' || msg.content ==='狼人' || msg.content ==='沃維克') {
        msg.reply('https://www.op.gg/champion/warwick/statistics/jungle')
    }
    if (msg.content === 'varus' || msg.content ==='法洛士' ) {
        msg.reply('https://www.op.gg/champion/varus/statistics/bot')
    }
    if (msg.content === 'poppy' || msg.content ==='波比') {
        msg.reply('https://www.op.gg/champion/poppy/statistics/top')
    }
    if (msg.content === 'tryndamere' || msg.content ==='蠻王' || msg.content ==='泰達米爾') {
        msg.reply('https://www.op.gg/champion/tryndamere/statistics/top')
    }
    if (msg.content === 'pyke' || msg.content ==='派克') {
        msg.reply('https://www.op.gg/champion/pyke/statistics/support')
    }
    if (msg.content === 'heimerdinger' || msg.content ==='泡麵頭' || msg.content ==='漢默丁格'|| msg.content ==='indeed') {
        msg.reply('https://www.op.gg/champion/heimerdinger/statistics/bot')
    }
    if (msg.content === 'pantheon' || msg.content ==='潘森') {
        msg.reply('https://www.op.gg/champion/pantheon/statistics/top')
    }
    if (msg.content === 'urgot' || msg.content ==='烏爾加特' || msg.content ==='視訊肥宅') {
        msg.reply('https://www.op.gg/champion/urgot/statistics/top')
    }
    if (msg.content === 'udyr' || msg.content ==='烏迪爾') {
        msg.reply('https://www.op.gg/champion/udyr/statistics/jungle')
    }
    if (msg.content === 'jhin' || msg.content ==='燼') {
        msg.reply('https://www.op.gg/champion/jhin/statistics/bot')
    }
    if (msg.content === 'trundle' || msg.content ==='特朗德' || msg.content ==='川島') {
        msg.reply('https://www.op.gg/champion/trundle/statistics/jungle')
    }
    if (msg.content === 'yasuo' || msg.content ==='牙刷' || msg.content ==='犽宿') {
        msg.reply('https://www.op.gg/champion/yasuo/statistics/mid')
    }
    if (msg.content === 'janna' || msg.content ==='珍娜' || msg.content ==='風女') {
        msg.reply('https://www.op.gg/champion/janna/statistics/support')
    }
    if (msg.content === 'thresh' || msg.content ==='瑟雷西' || msg.content ==='燈籠') {
        msg.reply('https://www.op.gg/champion/thresh/statistics/support')
    }
    if (msg.content === 'chogath' || msg.content ==='大蟲子' || msg.content ==='科加斯') {
        msg.reply('https://www.op.gg/champion/chogath/statistics/top')
    }
    if (msg.content === 'yorick' || msg.content ==='約瑞科' || msg.content ==='泰達米爾') {
        msg.reply('https://www.op.gg/champion/yorick/statistics/top')
    }
    if (msg.content === 'nautilus' || msg.content ==='海巨人' || msg.content ==='納帝魯斯') {
        msg.reply('https://www.op.gg/champion/nautilus/statistics/support')
    }
    if (msg.content === 'nasus' || msg.content ==='納瑟斯' || msg.content ==='狗頭人') {
        msg.reply('https://www.op.gg/champion/nasus/statistics/top')
    }
    if (msg.content === 'sona' || msg.content ==='琴女' || msg.content ==='索娜') {
        msg.reply('https://www.op.gg/champion/sona/statistics/support')
    }
    if (msg.content === 'soraka' || msg.content ==='索拉卡' || msg.content ==='香蕉') {
        msg.reply('https://www.op.gg/champion/soraka/statistics/support')
    }
    if (msg.content === 'viktor' || msg.content ==='維克特' || msg.content ==='假面') {
        msg.reply('https://www.op.gg/champion/viktor/statistics/mid')
    }
    if (msg.content === 'veigar' || msg.content ==='維迦' || msg.content ==='小法') {
        msg.reply('https://www.op.gg/champion/veigar/statistics/mid')
    }
    if (msg.content === 'aurelionsol' || msg.content ==='翱銳龍獸' || msg.content ==='龍獸') {
        msg.reply('https://www.op.gg/champion/aurelionsol/statistics/mid')
    }
    if (msg.content === 'ekko' || msg.content ==='艾克') {
        msg.reply('https://www.op.gg/champion/ekko/statistics/jungle')
    }
    if (msg.content === 'anivia' || msg.content ==='冰鳥' || msg.content ==='艾妮維亞') {
        msg.reply('https://www.op.gg/champion/anivia/statistics/mid')
    }
    if (msg.content === 'ashe' || msg.content ==='艾希' ) {
        msg.reply('https://www.op.gg/champion/ashe/statistics/bot')
    }
    if (msg.content === 'maokai' || msg.content ==='茂凱' || msg.content ==='樹人') {
        msg.reply('https://www.op.gg/champion/maokai/statistics/top')
    }
    if (msg.content === 'fiora' || msg.content ==='菲歐拉' || msg.content ==='劍姬') {
        msg.reply('https://www.op.gg/champion/fiora/statistics/top')
    }
    if (msg.content === 'vi' || msg.content ==='菲艾') {
        msg.reply('https://www.op.gg/champion/vi/statistics/jungle')
    }
    if (msg.content === 'graves' || msg.content ==='葛雷夫' || msg.content ==='葛砲') {
        msg.reply('https://www.op.gg/champion/graves/statistics/jungle')
    }
    if (msg.content === 'quinn' || msg.content ==='葵恩') {
        msg.reply('https://www.op.gg/champion/quinn/statistics/top')
    }
    if (msg.content === 'drmundo' || msg.content ==='蒙多' || msg.content ==='蒙多醫生'|| msg.content ==='mundo') {
        msg.reply('https://www.op.gg/champion/drmundo/statistics/jungle')
    }
    if (msg.content === 'garen' || msg.content ==='蓋倫') {
        msg.reply('https://www.op.gg/champion/garen/statistics/top')
    }
    if (msg.content === 'shaco' || msg.content ==='小丑' || msg.content ==='薩科') {
        msg.reply('https://www.op.gg/champion/shaco/statistics/jungle')
    }
    if (msg.content === 'rumble' || msg.content ==='藍寶') {
        msg.reply('https://www.op.gg/champion/rumble/statistics/mid')
    }
    if (msg.content === 'tahmkench' || msg.content ==='貪啃奇' || msg.content ==='蟾蜍') {
        msg.reply('https://www.op.gg/champion/tahmkench/statistics/support')
    }
    if (msg.content === 'fiddlesticks' || msg.content ==='草人' || msg.content ==='費德提克') {
        msg.reply('https://www.op.gg/champion/fiddlesticks/statistics/support')
    }
    if (msg.content === 'jax' || msg.content ==='賈克斯' || msg.content ==='武器大師') {
        msg.reply('https://www.op.gg/champion/jax/statistics/top')
    }
    if (msg.content === 'sylas' || msg.content ==='賽勒斯') {
        msg.reply('https://www.op.gg/champion/sylas/statistics/mid')
    }
    if (msg.content === 'sion' || msg.content ==='賽恩') {
        msg.reply('https://www.op.gg/champion/sion/statistics/top')
    }
    if (msg.content === 'hecarim' || msg.content ==='人馬' || msg.content ==='赫克林') {
        msg.reply('https://www.op.gg/champion/hecarim/statistics/jungle')
    }
    if (msg.content === 'xinzhao' || msg.content ==='趙信') {
        msg.reply('https://www.op.gg/champion/xinzhao/statistics/jungle')
    }
    if (msg.content === 'lucian' || msg.content ==='路西恩' || msg.content ==='聖槍') {
        msg.reply('https://www.op.gg/champion/lucian/statistics/bot')
    }
    if (msg.content === 'singed' || msg.content ==='屁男' || msg.content ==='辛吉德') {
        msg.reply('https://www.op.gg/champion/singed/statistics/top')
    }
    if (msg.content === 'twistedfate' || msg.content ==='tf' || msg.content ==='逆命') {
        msg.reply('https://www.op.gg/champion/twistedfate/statistics/mid')
    }
    if (msg.content === 'draven' || msg.content ==='達瑞文') {
        msg.reply('https://www.op.gg/champion/draven/statistics/bot')
    }
    if (msg.content === 'darius' || msg.content ==='達瑞斯'|| msg.content ==='巨錘瑞斯') {
        msg.reply('https://www.op.gg/champion/darius/statistics/top')
    }
    if (msg.content === 'ornn' || msg.content ==='鄂爾') {
        msg.reply('https://www.op.gg/champion/ornn/statistics/top')
    }
    if (msg.content === 'rakan' || msg.content ==='銳空') {
        msg.reply('https://www.op.gg/champion/rakan/statistics/support')
    }
    if (msg.content === 'kindred' || msg.content ==='鏡爪') {
        msg.reply('https://www.op.gg/champion/kindred/statistics/jungle')
    }
    if (msg.content === 'akali' || msg.content ==='阿卡莉' || msg.content ==='阿卡利') {
        msg.reply('https://www.op.gg/champion/akali/statistics/mid')
    }
    if (msg.content === 'amumu' || msg.content ==='阿姆姆' || msg.content ==='木乃伊') {
        msg.reply('https://www.op.gg/champion/amumu/statistics/jungle')
    }
    if (msg.content === 'ahri' || msg.content ==='阿璃' || msg.content ==='狐狸') {
        msg.reply('https://www.op.gg/champion/ahri/statistics/mid')
    }
    if (msg.content === 'azir' || msg.content ==='鳥頭' || msg.content ==='阿祈爾') {
        msg.reply('https://www.op.gg/champion/azir/statistics/mid')
    }
    if (msg.content === 'renekton' || msg.content ==='鱷魚' || msg.content ==='雷尼克頓') {
        msg.reply('https://www.op.gg/champion/renekton/statistics/top')
    }
    if (msg.content === 'leona' || msg.content ==='雷歐娜' || msg.content ==='日輪聖芒') {
        msg.reply('https://www.op.gg/champion/leona/statistics/support')
    }
    if (msg.content === 'riven' || msg.content ==='雷文' || msg.content ==='雷玟') {
        msg.reply('https://www.op.gg/champion/riven/statistics/top')
    }
    if (msg.content === 'reksai' || msg.content ==='挖掘機' || msg.content ==='雷珂煞') {
        msg.reply('https://www.op.gg/champion/reksai/statistics/jungle')
    }
    if (msg.content === 'ryze' || msg.content ==='雷茲' || msg.content ==='光頭') {
        msg.reply('https://www.op.gg/champion/ryze/statistics/mid')
    }
    if (msg.content === 'rengar' || msg.content ==='雷葛爾') {
        msg.reply('https://www.op.gg/champion/rengar/statistics/top')
    }
    if (msg.content === 'lulu' || msg.content ==='露璐' || msg.content ==='露露') {
        msg.reply('https://www.op.gg/champion/lulu/statistics/support')
    }
    if (msg.content === 'fizz' || msg.content ==='菲斯' || msg.content ==='飛斯') {
        msg.reply('https://www.op.gg/champion/fizz/statistics/mid')
    }
    if (msg.content === 'malzahar' || msg.content ==='馬爾札哈') {
        msg.reply('https://www.op.gg/champion/malzahar/statistics/mid')
    }
    if (msg.content === 'morgana' || msg.content ==='魔甘娜' || msg.content ==='morg') {
        msg.reply('https://www.op.gg/champion/morgana/statistics/support')
    }
    if (msg.content === 'mordekaiser' || msg.content ==='魔鬥凱薩' || msg.content ==='mord') {
        msg.reply('https://www.op.gg/champion/mordekaiser/statistics/top')
    }
    if (msg.content === 'lissandra' || msg.content ==='麗珊卓' || msg.content ==='黎珊卓'|| msg.content ==='冰女') {
        msg.reply('https://www.op.gg/champion/lissandra/statistics/mid')
    }
    if (msg.content === 'diana' || msg.content ==='黛安娜') {
        msg.reply('https://www.op.gg/champion/diana/statistics/mid')
    }
    if (msg.content === 'xerath' || msg.content ==='齊勒斯' || msg.content ==='飯糰') {
        msg.reply('https://www.op.gg/champion/xerath/statistics/support')
    }
  })


  client.login('Your discord bot key')

  console.log('opgg.server on')