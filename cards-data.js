// お客様ごとに、このファイルと cards/ の画像を差し替えます。
// image は cards/ 内のファイル名、message の \n は表示時の改行です。
// message は正位置、reversedMessage は逆位置のメッセージです。
const tarotData = {
  "petName": "チャッピー＆サリー",
  "heroImage": "https://chappy-sally.github.io/tarot-reading/Images/cs_hyoushi_tarot.png?v=1",
  "menuUrl": "https://chappy-sally.github.io/chappysally-menu/",
  "readingUrl": "https://ChappySally.base.shop/items/151505028",
  "cards": [
    {
      "image": "00_The_Fool.png",
      "name": "愚者",
      "message": "今日は軽くはじめて大丈夫😊\n完璧じゃなくても、まず一歩でOK🌈",
      "reversedMessage": "今日は勢いだけで進まず、ちょっと確認してみよう😊 急がなくても大丈夫だよ🌿"
    },
    {
      "image": "01_The_Magician.png",
      "name": "魔術師",
      "message": "あなたの中には、もう必要な力があるよ✨\nできることから形にしてみてね😊",
      "reversedMessage": "うまくできない気がしても大丈夫✨ 今あるもので、できることから始めてみてね😊"
    },
    {
      "image": "02_The_High_Priestess.png",
      "name": "女教皇",
      "message": "今日は静かな直感を大切にしてね🌙\n答えは心の奥からそっと届くよ😊",
      "reversedMessage": "考えすぎてわからなくなったら、今日は答えを出さなくても大丈夫🌙 静かな時間を作ってみてね😊"
    },
    {
      "image": "03_The_Empress.png",
      "name": "女帝",
      "message": "やさしさと豊かさを受け取る日🌸\n自分にもあたたかくしてあげてね😊",
      "reversedMessage": "今日は誰かより、まず自分を満たしてあげよう🌸 がんばりすぎなくていいよ😊"
    },
    {
      "image": "04_The_Emperor.png",
      "name": "皇帝",
      "message": "今日は土台を整えると安心できそう😊\n小さな決めごとが力になるよ🌈",
      "reversedMessage": "全部きちんとしなくても大丈夫😊 少し力を抜いたほうが、うまく整うかも🌿"
    },
    {
      "image": "05_The_Hierophant.png",
      "name": "教皇",
      "message": "信頼できるものを大切にしてね🌿\nひとりで抱えず、やさしい知恵を受け取ろう😊",
      "reversedMessage": "“こうしなきゃ”に縛られなくて大丈夫🌈 あなたに合うやり方を選んでね😊"
    },
    {
      "image": "06_The_Lovers.png",
      "name": "恋人",
      "message": "今日は心がよろこぶ方を選んでみて💗\n小さな好きが、道しるべになるよ😊",
      "reversedMessage": "迷ったときは、誰かの正解より自分の気持ちを聞いてみて💗 心がほっとするほうで大丈夫😊"
    },
    {
      "image": "07_The_Chariot.png",
      "name": "戦車",
      "message": "流れに乗って進める日✨\n考えすぎる前に、軽く動いてみてね😊",
      "reversedMessage": "今日は無理に進まなくても大丈夫✨ いったん止まって方向を確かめよう😊"
    },
    {
      "image": "08_Strength.png",
      "name": "力",
      "message": "本当の強さは、やさしさの中にあるよ🦁\n無理せず、穏やかに進もうね😊",
      "reversedMessage": "がんばる力が出ない日は、休むことも立派な力だよ🦁 自分にやさしくしてね😊"
    },
    {
      "image": "09_The_Hermit.png",
      "name": "隠者",
      "message": "今日は少し内側を見つめる時間を🌙\n静けさの中に、大切な気づきがあるよ😊",
      "reversedMessage": "ひとりで考えすぎなくても大丈夫🌙 誰かのやさしい言葉を受け取ってみてね😊"
    },
    {
      "image": "10_Wheel_of_Fortune.png",
      "name": "運命の輪",
      "message": "流れが動き出すタイミングかも🌈\n小さなチャンスに気づいてね😊",
      "reversedMessage": "流れが止まって見えても、焦らなくて大丈夫🌈 今は次のタイミングを待つ時間かも😊"
    },
    {
      "image": "11_Justice.png",
      "name": "正義",
      "message": "今日はバランスを整える日⚖️\n自分にとって心地よい答えを選んでね😊",
      "reversedMessage": "白黒すぐに決めなくても大丈夫⚖️ まずは自分がどう感じているかを大切にしてね😊"
    },
    {
      "image": "12_The_Hanged_Man.png",
      "name": "吊るされた男",
      "message": "今は急がなくても大丈夫🌿\n見方を変えると、楽になることがあるよ😊",
      "reversedMessage": "我慢しすぎてないかな？🌿 もう十分がんばったなら、違う方法を選んでもいいよ😊"
    },
    {
      "image": "13_Death.png",
      "name": "死神",
      "message": "終わりは新しいはじまりのサイン🌈\nもう合わないものは、やさしく手放してね😊",
      "reversedMessage": "手放しにくいものがあっても大丈夫🌈 少しずつでいいから、新しい流れに場所をあけてみよう😊"
    },
    {
      "image": "14_Temperance.png",
      "name": "節制",
      "message": "今日は無理なく整える日🌿\nちょうどいいペースを大切にしてね😊",
      "reversedMessage": "ちょっと頑張りすぎているかも🌿 今日は予定や気持ちを少しゆるめて整えよう😊"
    },
    {
      "image": "15_The_Devil.png",
      "name": "悪魔",
      "message": "気づいたら、もう抜け出す力は戻ってるよ😊\n自分を責めずに、ゆるめていこう🌈",
      "reversedMessage": "もう少し自由になれそうだよ✨ あなたを縛っていたものを、ひとつずつ手放していこう😊"
    },
    {
      "image": "16_The_Tower.png",
      "name": "塔",
      "message": "変化は怖く見えても、整うきっかけになるよ⚡\n深呼吸して、今できることからで大丈夫😊",
      "reversedMessage": "大きく変えなくても大丈夫⚡ 小さな違和感に気づいたら、今のうちに少し整えておこう😊"
    },
    {
      "image": "17_The_Star.png",
      "name": "星",
      "message": "希望の光はちゃんとあるよ🌟\n今日は未来を少し信じてみてね😊",
      "reversedMessage": "希望が見えにくい日もあるよ🌟 今は小さな光をひとつ見つけるだけで十分😊"
    },
    {
      "image": "18_The_Moon.png",
      "name": "月",
      "message": "不安な時ほど、やさしく確認してね🌙\nまだ決めなくても大丈夫だよ😊",
      "reversedMessage": "少しずつ霧が晴れてきそう🌙 不安の正体をひとつずつ確認してみてね😊"
    },
    {
      "image": "19_The_Sun.png",
      "name": "太陽",
      "message": "今日は明るいエネルギーを受け取る日☀️\n笑顔になれることを大切にしてね😊",
      "reversedMessage": "元気いっぱいじゃなくても大丈夫☀️ 小さなうれしいことをひとつ味わってみてね😊"
    },
    {
      "image": "20_Judgement.png",
      "name": "審判",
      "message": "もう一度、自分の声を聞いてみて📯\n目覚めるタイミングが来ているかも😊",
      "reversedMessage": "まだ答えを決めなくても大丈夫📯 自分の本当の気持ちが聞こえるまで、少し待ってみよう😊"
    },
    {
      "image": "21_The_World.png",
      "name": "世界",
      "message": "ここまでよく来たね🌈\nひとつの流れが整って、次へ進めそうだよ😊",
      "reversedMessage": "あと少し整えたいことがあるのかも🌈 急いで終わらせず、心残りをひとつ確認してみてね😊"
    },
    {
      "image": "22_Compass.png",
      "name": "羅針盤",
      "message": "迷ったときは、心がほっとする方へ🧭\n小さな一歩が、あなたの道しるべになるよ😊",
      "reversedMessage": "どちらへ進むかわからないときは、いったん止まって大丈夫🧭 心が落ち着くまで、ゆっくり待とうね😊"
    }
  ]
};
