import { CircleItemProps as CircleItemData } from "~/components/circle/CircleItem";

type Data = {
  classify: string[];
  ids: string[];
  contents: CircleItemData[][];
};

const circleData: Data = {
  classify: ["1学年", "2学年", "3学年", "4学年", "部活動", "同好会"],
  ids: ["1st", "2nd", "3rd", "4th", "club", "assoc"],
  contents: [
    [
      {
        circleName: "1-1",
        orgName: "1-1",
        place: "8号館3階 1-1教室",
        circleImgPath: "/image/circle/circle/1-1.jpg",
        description: "1-1では縁日をやっているよ！中には豪華景品も…⁉8号館3階へGO！",
        aboutCircle:
          "こんにちは。1-1です。私たちは8号館3階の階段を上がったところで縁日系を実施します。ぜひ来てください！",
        mapImgPath: "/image/circle/map/8.png",
      },
      {
        circleName: "1-2",
        orgName: "1-2",
        place: "8号館3階 1-2教室",
        circleImgPath: "/image/circle/circle/1-2.jpg",
        description: "休憩スペースとしてどうぞ！飲み物買えます！素敵な音楽でお出迎えします",
        aboutCircle: "ぜひ来てください！！！",
        mapImgPath: "/image/circle/map/8.png",
      },
      {
        circleName: "石井牧場",
        orgName: "1-3",
        place: "8号館3階 1-3教室",
        circleImgPath: "/image/circle/circle/1-3.jpg",
        description: "プラ板を使って、キーホルダーやアクセサリー等を作ることができます。",
        aboutCircle: "",
        mapImgPath: "/image/circle/map/8.png",
      },
      {
        circleName: "CG検定団",
        orgName: "1-4",
        place: "8号館3階 1-4教室",
        circleImgPath: "/image/circle/circle/1-4.png",
        description:
          "いろいろな“プチギネス”をできます！TVで見たあんなギネスや、こんなギネスに挑んでみませんか？挑む勇気がある人は、1-4まで！",
        aboutCircle: "",
        mapImgPath: "/image/circle/map/8.png",
      },
      {
        circleName: "1-5",
        orgName: "1-5",
        place: "8号館3階 1-5教室",
        circleImgPath: "/image/circle/circle/1-5.png",
        description: "私たちはサークルで脱出ゲームを企画し、いくつかのアクティビティなアトラクションを用意しています",
        aboutCircle: "",
        mapImgPath: "/image/circle/map/8.png",
      },
    ],
    [
      {
        circleName: "大和魂",
        orgName: "2-1",
        place: "8号館2階 2-1教室",
        circleImgPath: "/image/circle/circle/2-1.png",
        description: "射的とチンチロ",
        aboutCircle: "",
        mapImgPath: "/image/circle/map/8.png",
      },
      {
        circleName: "伊藤モータース∞結び目サーキット",
        orgName: "2-2",
        place: "8号館2階 2-2教室",
        circleImgPath: "/image/circle/circle/2-2.png",
        description: "私達が作成したコースを使用し、レースを開催！ミニ四駆の貸出・販売も行います！",
        aboutCircle: "",
        mapImgPath: "/image/circle/map/8.png",
      },
      {
        circleName: "縁日って200種類あんねん。",
        orgName: "2-3",
        place: "8号館2階 2-3教室",
        circleImgPath: "/image/circle/circle/2-3.jpg",
        description: "夜の神社へようこそ。レトロな雰囲気をお楽しみください。景品・参加賞あり",
        aboutCircle: "",
        mapImgPath: "/image/circle/map/8.png",
      },
      {
        circleName: "「2年4組」商標登録しました。",
        orgName: "2-4",
        place: "8号館2階 2-4教室",
        circleImgPath: "/image/circle/circle/2-4.png",
        description: "写真映えスポットや人工イクラ作りなどの体験スペースを設置予定です！",
        aboutCircle: "",
        mapImgPath: "/image/circle/map/8.png",
      },
      {
        circleName: "大川のクラス気持ち良すぎだろ!",
        orgName: "2-5",
        place: "8号館2階 2-5教室",
        circleImgPath: "/image/circle/circle/2-5.jpg",
        description: "なんで2-5にボドゲがあんだよ、教えはどうなってんだ教えは。金取らねぇのかよ!?",
        aboutCircle: "",
        mapImgPath: "/image/circle/map/8.png",
      },
    ],
    [
      {
        circleName: "Official 3M dism",
        orgName: "3M1",
        place: "8号館1階 3M1教室",
        circleImgPath: "/image/circle/circle/3M1.jpg",
        description: "起伏に富んだコースに並べたピンをパターで狙うゲームです！高得点者には景品あり！",
        aboutCircle: "",
        mapImgPath: "/image/circle/map/8.png",
      },
      {
        circleName: "イカした射的で遊んでみなイカ!?",
        orgName: "3M2",
        place: "8号館1階 3M2教室",
        circleImgPath: "/image/circle/circle/3M2.png",
        description: "みんな大好き射的がバージョンアップして大変身！ぜひ遊びに来てください！",
        aboutCircle: "",
        mapImgPath: "/image/circle/map/8.png",
      },
      {
        circleName: "3E",
        orgName: "3E",
        place: "8号館1階 3E教室",
        circleImgPath: "/image/circle/circle/3E.jpg",
        description: "おもしろいメンバーとイライラ棒で遊ぼう！挑戦者向けのコースクリアは出るか⁉",
        aboutCircle: "",
        mapImgPath: "/image/circle/map/8.png",
      },
      {
        circleName: "OZ",
        orgName: "3I",
        place: "1号館2階マルチメディア室",
        circleImgPath: "/image/circle/circle/3I.png",
        description: "レクリエーションとインターネットの超融合⁉沢山遊んで景品をゲット！",
        aboutCircle:
          "プログラミングがメインのクラスです！今回は習った内容を用いたサイトを作ってみました！是非遊びに来てください",
        mapImgPath: "/image/circle/map/1.png",
      },
      {
        circleName: "3C",
        orgName: "3C",
        place: "8号館1階 3C教室",
        circleImgPath: "/image/circle/circle/3C.jpg",
        description: "研究室をテーマとしたお化け屋敷。次に実験体になるのは貴方かも...？",
        aboutCircle: "",
        mapImgPath: "/image/circle/map/8.png",
      },
    ],
    [
      {
        circleName: "リアル脱出ゲーム",
        orgName: "4I",
        place: "7号館3階 4I教室",
        circleImgPath: "/image/circle/circle/4I.png",
        description: "君は，この謎が解けるか――？",
        aboutCircle: "",
        mapImgPath: "/image/circle/map/7.png",
      },
    ],
    [
      {
        circleName: "吹奏学部",
        orgName: "吹奏楽部",
        place: "時計台下ステージ 10/22(土) 12:00 ~ 13:00",
        circleImgPath: "/image/circle/circle/suisogaku.jpg",
        description: "野外ステージで演奏します！皆さんおなじみのあの曲も…",
        aboutCircle:
          "毎週月～金の放課後にSCS室で活動しています。楽器を吹いたことがない方も大歓迎です！いつでも見学に来てください！",
        mapImgPath: "/image/circle/map/suisogaku.png",
      },
      {
        circleName: "的当て",
        orgName: "弓道部",
        place: "グラウンド",
        circleImgPath: "/image/circle/circle/kyudo.png",
        description: "本物の和弓を使って的あてに挑戦！たくさんあてれば豪華賞品も！？",
        aboutCircle:
          "弓道部では、「文武両道」を目標に掲げ活動しています。多くの部員は高専に入ってから始めた初心者です。弓道をやってみたい人、大歓迎です！",
        mapImgPath: "/image/circle/map/ground.png",
      },
      {
        circleName: "茶道部",
        orgName: "茶道部",
        place: "グラウンド",
        circleImgPath: "/image/circle/circle/sado.png",
        description: "お点前を披露します。お茶菓子も用意しているのでぜひお越しください！",
        aboutCircle:
          "茶道部では、お点前や着付けのお稽古をしています。おいしいお茶菓子も食べられるので、ぜひお越しください。",
        mapImgPath: "/image/circle/map/ground.png",
      },
      {
        circleName: "ラジオ部",
        orgName: "ラジオ部",
        place: "7号館2階 電子工学実験室",
        circleImgPath: "/image/circle/circle/radio.png",
        description: "ラジオアンテナを針金で作ってもらい、その性能と美しさを競います。",
        aboutCircle: "無線、電気工作を中心に幅広い活動を行っています。自由で楽しい部活なので気になった方はぜひ参加を。",
        mapImgPath: "/image/circle/map/7.png",
      },
      {
        circleName: "テニススナイパー",
        orgName: "テニス部",
        place: "テニスコート",
        circleImgPath: "/image/circle/circle/tennis.jpg",
        description: "テニスラケットを使ってコートの決められた場所にボールを打つゲームです！景品もあります！",
        aboutCircle: "",
        mapImgPath: "/image/circle/map/tennis.png",
      },
      {
        circleName: "サッカー部",
        orgName: "サッカー部",
        place: "3号館と1号館の間の道路",
        circleImgPath: "/image/circle/circle/soccer.png",
        description: "「ストリートサッカーPANNA」と「的あてby Foot」を開催!!ぜひ来てね！",
        aboutCircle:
          "サッカー部は高体連県大会出場、全国高専大会ベスト4を目指して日々練習に取り組んでいます!!私たちと一緒に楽しくサッカーしませんか!?",
        mapImgPath: "/image/circle/map/soccer.png",
      },
      {
        circleName: "天文部",
        orgName: "天文部",
        place: "1号館2階 物理第1実験室",
        circleImgPath: "/image/circle/circle/tenmon.png",
        description:
          "自作したプラネタリウムの展示を行います。また、現在一年生を中心として研究している、ロケットの展示・動画の上映を行います。",
        aboutCircle:
          "天文部では、星の観測だけでなく、各人の興味関心についての研究も行っています。先生方の支援を受けながら、日々、スキルを増やしています。",
        mapImgPath: "/image/circle/map/1.png",
      },
    ],
    [
      {
        circleName: "軽音学同好会",
        orgName: "軽音楽同好会",
        place: "体育館ステージ",
        circleImgPath: "/image/circle/circle/keion.png",
        description: "ようこそ、ライブへ！情熱にあふれたバンド演奏を、ぜひ聴きに来てください！",
        aboutCircle:
          "バンド演奏の練習や、個人の演奏技術を高めるための練習などをしています！ライブも積極的に行なっていきたいです。",
        mapImgPath: "/image/circle/map/gym.png",
      },
      {
        circleName: "デジタルアーツ同好会",
        orgName: "デジタルアーツ同好会",
        place: "体育館ステージ 10/22(土) 12:30~13:00",
        circleImgPath: "/image/circle/circle/arts.png",
        description: "ステージ上でバーチャルライブ上映を行います!!詳しくはこちら>>https://negiduction.studio.site/",
        aboutCircle: "",
        mapImgPath: "/image/circle/map/gym.png",
      },
      {
        circleName: "滝沢〇三同好会",
        orgName: "滝沢〇三同好会",
        place: "8号館1階ラウンジ",
        circleImgPath: "/image/circle/circle/takizawa.png",
        description: "正面顔が、うまくいけば検知します。",
        aboutCircle: "顔はめパネルを展示しています",
        mapImgPath: "/image/circle/map/8.png",
      },
      {
        circleName: "ダンス同好会",
        orgName: "ダンス同好会",
        place: "体育館ステージ 10/22(土) 13:10~13:30, 10/23(日) 9:00~9:20",
        circleImgPath: "/image/circle/circle/dance.png",
        description: "ステージ上でK-pop、J-pop、アニメなど、幅広いジャンルの曲を踊ります。",
        aboutCircle:
          "毎週水曜日の16:00~17:30の間活動をしています。半数以上の部員が初心者なので興味のある方は武道場へ見学に来てみてください。",
        mapImgPath: "/image/circle/map/gym.png",
      },
      {
        circleName: "新友館4F1年",
        orgName: "新友館4F1年",
        place: "グラウンド",
        circleImgPath: "",
        description: "寮のメンバーで食品系サークルをやります。アイスの販売を行います。",
        aboutCircle: "",
        mapImgPath: "/image/circle/map/ground.png",
      },
      {
        circleName: "EV制作サークル",
        orgName: "EV制作サークル",
        place: "有朋寮施設周辺",
        circleImgPath: "/image/circle/circle/EV.png",
        description: "地球に優しいEV(電気自動車)を製作中!!全国大会出場経験もある「手作りEV」に試乗してみては!?",
        aboutCircle:
          "電気・電子系の有志の学生で電気自動車を製作しており、毎年大会にも出場し、高速化と高効率化を目指して日々製作に取り組んでいます。興味がある方はぜひ見学にお越しください!!",
        mapImgPath: "/image/circle/map/ev.png",
      },
      {
        circleName: "茨城高専の八百屋さん",
        orgName: "園芸・環境同好会 園芸班",
        place: "グラウンド",
        circleImgPath: "/image/circle/circle/engei.png",
        description: "育てた野菜の販売を行います。安心安全無農薬です。ぜひ！！ ※雨天中止",
        aboutCircle:
          "季節ごとにいろんな野菜を育てています。お花も育てています。梅干し作ったり、干し芋も作ろうと思っています！",
        mapImgPath: "/image/circle/map/ground.png",
      },
      {
        circleName: "園芸・環境同好会 環境班",
        orgName: "園芸・環境同好会 環境班",
        place: "1号館3階中会議室",
        circleImgPath: "/image/circle/circle/kankyo.png",
        description: "海洋プラスチックなどを利用した、小物やアクセサリー作りのワークショップを行います。",
        aboutCircle: "プラスチックごみ問題などの環境問題の調査やそれについての議論、環境保全に取り組んでいます！",
        mapImgPath: "/image/circle/map/1.png",
      },
      {
        circleName: "DTM同好会",
        orgName: "DTM同好会",
        place: "1号館3階 5S教室",
        circleImgPath: "/image/circle/circle/DTM.jpg",
        description: "1号館3階にて、DJプレイと同好会オリジナルCDを配布します！",
        aboutCircle:
          "各人が好きなように楽曲を作成しています。放課後の集まりは月1！少しでも興味があったら声をかけてください",
        mapImgPath: "/image/circle/map/1.png",
      },
      {
        circleName: "漫画研究同好会",
        orgName: "漫画研究同好会",
        place: "1号館3階 語学演習室",
        circleImgPath: "/image/circle/circle/manga.png",
        description: "1号館3階で私達のイラストをまとめた部誌を頒布します。",
        aboutCircle: "皆で集まってイラストを日々書いています。ぜひ私たちのサークルに遊びに来てください。",
        mapImgPath: "/image/circle/map/1.png",
      },
      {
        circleName: "パーティーゲーム同好会",
        orgName: "パーティーゲーム同好会",
        place: "7号館2階 3I教室",
        circleImgPath: "",
        description: "パーティーゲーム同好会で研究して、面白かったボードゲームを体験してもらいます！",
        aboutCircle:
          "今年は初めての活動により研究結果によるボードゲームの作成はできませんでしたが、毎週2回楽しく活動しています！",
        mapImgPath: "/image/circle/map/7.png",
      },
      {
        circleName: "OHMI",
        orgName: "OHMI",
        place: "体育館ステージ 10/22(土) 15:30~15:50, 10/23(日)9:30~9:50",
        circleImgPath: "/image/circle/circle/OHMI.png",
        description: "オリジナルのCGと豪華な照明が音楽と連動して演出するDJショー",
        aboutCircle: "",
        mapImgPath: "/image/circle/map/gym.png",
      },
      {
        circleName: "HRI ハリボテレーシング",
        orgName: "HRI",
        place: "グラウンド",
        circleImgPath: "/image/circle/circle/HRI.jpg",
        description: "あなたの、私の夢がハリボテになって走ります！",
        aboutCircle: "あなたの夢は、本命か、大穴か。私の夢は、トリプル二連単です。",
        mapImgPath: "/image/circle/map/ground.png",
      },
    ],
  ],
};

export default circleData;
