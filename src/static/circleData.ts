import { CircleItemProps as CircleItemData } from "~/components/circle/CircleItem";

type Data = {
  classify: string[];
  content: {
    firstGrade: CircleItemData[][];
    secondGrade: CircleItemData[][];
    thirdGrade: CircleItemData[][];
    fourthGrade: CircleItemData[][];
    act: CircleItemData[][];
    club: CircleItemData[][];
  };
};

const circleData: Data = {
  classify: ["1学年", "2学年", "3学年", "4学年", "部活動", "同好会"],
  content: {
    firstGrade: [
      [
        {
          circleTitle: "1-1",
          organization: "1-1",
          placement: "8号館3階 1-1教室",
          circleImagePth: "/image/circle/circle/1-1.jpg",
          description: "1－1では縁日をやっているよ！中には豪華景品も…⁉8号館3階へGO！",
          aboutCircle:
            "こんにちは。1－1です。私たちは8号館3階の階段を上がったところで縁日系を実施します。ぜひ来てください！",
          mapImagePth: "/image/circle/map/8.png",
        },
        {
          circleTitle: "たむたむぷりん",
          organization: "1-2",
          placement: "8号館3階 1-2教室",
          circleImagePth: "/image/circle/circle/1-2.jpg",
          description: "コスプレできます！黒板使って遊んだり休憩スペースにもどうぞ！！",
          aboutCircle: "ぜひ来てください！！！",
          mapImagePth: "/image/circle/map/8.png",
        },
        {
          circleTitle: "石井牧場",
          organization: "1-3",
          placement: "8号館3階 1-3教室",
          circleImagePth: "/image/circle/circle/1-3.jpg",
          description: "プラ板を使って、キーホルダーやアクセサリー等を作ることができます。",
          aboutCircle: "",
          mapImagePth: "/image/circle/map/8.png",
        },
        {
          circleTitle: "CG検定",
          organization: "1-4",
          placement: "8号館3階 1-4教室",
          circleImagePth: "/image/circle/circle/1-4.png",
          description:
            "いろいろな“プチギネス”をできます！TVで見たあんなギネスや、こんなギネスに挑んでみませんか？挑む勇気がある人は、１－４組まで！",
          aboutCircle: "",
          mapImagePth: "/image/circle/map/8.png",
        },
        {
          circleTitle: "1の5",
          organization: "1-5",
          placement: "8号館3階 1-5教室",
          circleImagePth: "/image/circle/circle/1-5.png",
          description: "私たちはサークルで脱出ゲームを企画し、いくつかのアクティビティなアトラクションを用意しています",
          aboutCircle: "",
          mapImagePth: "/image/circle/map/8.png",
        },
      ],
    ],
    secondGrade: [
      [
        {
          circleTitle: "大和魂",
          organization: "2-1",
          placement: "8号館2階 2-1教室",
          circleImagePth: "/image/circle/circle/2-1.png",
          description: "",
          aboutCircle: "",
          mapImagePth: "/image/circle/map/8.png",
        },
      ],
      [
        {
          circleTitle: "伊東モータース∞結び目サーキット",
          organization: "2-2",
          placement: "8号館2階 2-2教室",
          circleImagePth: "/image/circle/circle/2-2.png",
          description: "自分たちで作成したコースを使用し、レースを開催。ミニ四駆の貸出、販売も行います。",
          aboutCircle: "",
          mapImagePth: "/image/circle/map/8.png",
        },
      ],
      [
        {
          circleTitle: "縁日って200種類あんねん",
          organization: "2-3",
          placement: "8号館2階 2-3教室",
          circleImagePth: "/image/circle/circle/2-3.jpg",
          description: "夜の神社へようこそ。レトロな雰囲気をお楽しみください。景品・参加賞あり",
          aboutCircle: "",
          mapImagePth: "/image/circle/map/8.png",
        },
      ],
      [
        {
          circleTitle: "「2年4組」商標登録しました",
          organization: "2-4",
          placement: "8号館2階 2-4教室",
          circleImagePth: "/image/circle/circle/2-4.png",
          description: "写真映えスポットや人工イクラ作りなどの体験スペースを設置予定です！",
          aboutCircle: "",
          mapImagePth: "/image/circle/map/8.png",
        },
      ],
      [
        {
          circleTitle: "大川のクラス気持ち良すぎだろ!",
          organization: "2-5",
          placement: "8号館2階 2-5教室",
          circleImagePth: "/image/circle/circle/2-5.jpg",
          description: "なんで2-5にボドゲがあんだよ、教えはどうなってんだ教えは。無料なのかよ!?",
          aboutCircle: "",
          mapImagePth: "/image/circle/map/8.png",
        },
      ],
    ],
    thirdGrade: [
      [
        {
          circleTitle: "Official 3M dism",
          organization: "3M1",
          placement: "8号館1階 3M1教室",
          circleImagePth: "/image/circle/circle/3M1.jpg",
          description: "起伏に富んだコースに並べたピンをパターで狙うゲームです！高得点者には景品あり！",
          aboutCircle: "",
          mapImagePth: "/image/circle/map/8.png",
        },
      ],
      [
        {
          circleTitle: "3M2",
          // TODO:サークル名 要確認
          organization: "3M2",
          placement: "8号館1階 3M2教室",
          circleImagePth: "/image/circle/circle/3M2.png",
          description: "みんな大好き射的がバージョンアップして大変身！ぜひ遊びに来てください！",
          aboutCircle: "",
          mapImagePth: "/image/circle/map/8.png",
        },
      ],
      [
        {
          circleTitle: "3E",
          organization: "3E",
          placement: "8号館1階 3E教室",
          circleImagePth: "/image/circle/circle/3E.jpg",
          description: "おもしろいメンバーとイライラ棒で遊ぼう！挑戦者向けのコースクリアは出るか⁉",
          aboutCircle: "",
          mapImagePth: "/image/circle/map/8.png",
        },
      ],
      [
        {
          circleTitle: "3C",
          organization: "3C",
          placement: "8号館2階 3C教室",
          circleImagePth: "/image/circle/circle/3C.jpg",
          description: "研究室をテーマとしたお化け屋敷。次に実験体になるのは貴方かも...？",
          aboutCircle: "",
          mapImagePth: "/image/circle/map/8.png",
        },
      ],
      [
        {
          circleTitle: "OZ",
          organization: "3I",
          placement: "1号館2階マルチメディア室",
          circleImagePth: "/image/circle/circle/3I.png",
          description: "可愛いキャラクターと一緒に、テーブルゲームにチャレンジ",
          aboutCircle:
            "プログラミングがメインのクラスです！今回は習った内奥を用いたサイトを作ってみました！是非遊びに来てください",
          mapImagePth: "/image/circle/map/1.png",
        },
      ],
    ],
    fourthGrade: [
      [
        {
          circleTitle: "リアル脱出ゲーム",
          organization: "4I",
          placement: "7号館3階 4I教室と5I教室",
          circleImagePth: "/image/circle/circle/4I.png",
          description: "君は，この謎が解けるか――？",
          aboutCircle: "",
          mapImagePth: "/image/circle/map/7.png",
        },
      ],
    ],
    act: [
      [
        {
          circleTitle: "吹奏学部",
          organization: "吹奏楽部",
          placement: "時計台下ステージ",
          circleImagePth: "/image/circle/circle/suisogaku.jpg",
          description: "野外ステージで演奏します！皆さんおなじみのあの曲も…",
          aboutCircle:
            "毎週火～金の放課後にSCS室で活動しています。楽器を吹いたことがない方も大歓迎です！いつでも見学に来てください！",
          mapImagePth: "/image/circle/map/suisogaku.png",
        },
      ],
      [
        {
          circleTitle: "的当て",
          organization: "弓道部",
          placement: "グラウンド",
          circleImagePth: "/image/circle/circle/kyudo.png",
          description: "本物の和弓を使って的あてに挑戦！たくさんあてれば豪華賞品も!?",
          aboutCircle:
            "弓道部では、「文武両道」を目標に掲げ活動しています。多くの部員は高専に入ってから始めた初心者です。弓道をやってみたい人、大歓迎です！",
          mapImagePth: "/image/circle/map/ground.png",
        },
      ],
      [
        {
          circleTitle: "茶道部",
          organization: "茶道部",
          placement: "グラウンド",
          circleImagePth: "/image/circle/circle/sado.png",
          description: "お点前を披露します。お茶菓子も用意しているのでぜひお越しください！",
          aboutCircle:
            "茶道部では、お点前や着付けのお稽古をしています。おいしいお茶菓子も食べられるので、ぜひお越しください。",
          mapImagePth: "/image/circle/map/ground.png",
        },
      ],
      [
        {
          circleTitle: "ラジオ部",
          organization: "ラジオ部",
          placement: "7号館2階 電子工学実験室",
          circleImagePth: "/image/circle/circle/radio.png",
          description: "ラジオアンテナを針金で作ってもらい、その性能と美しさを競います。",
          aboutCircle:
            "無線、電気工作を中心に幅広い活動を行っています。自由で楽しい部活なので気になった方はぜひ参加を。",
          mapImagePth: "/image/circle/map/7.png",
        },
      ],
      [
        {
          circleTitle: "テニススナイパー",
          organization: "テニス部",
          placement: "テニスコート",
          circleImagePth: "/image/circle/circle/tennis.jpg",
          description: "テニスラケットを使ってコートの決められた場所にボールを打つゲームです！景品もあります！",
          aboutCircle: "",
          mapImagePth: "/image/circle/map/tennis.png",
        },
      ],
      [
        {
          circleTitle: "サッカー部",
          organization: "サッカー部",
          placement: "3号館と1号館の間の道路",
          circleImagePth: "/image/circle/circle/soccer.png",
          description: "「ストリートサッカーPANNA」と「的あてby Foot」を開催!!ぜひ来てね！",
          aboutCircle:
            "サッカー部は高体連県大会出場、全国高専大会ベスト4を目指して日々練習に取り組んでいます!!私たちと一緒に楽しくサッカーしませんか!?",
          mapImagePth: "/image/circle/map/soccer.png",
        },
      ],
      [
        {
          circleTitle: "天文部",
          organization: "天文部",
          placement: "1号館2階 物理第1実験室",
          circleImagePth: "/image/circle/circle/tenmon.png",
          description:
            "自作したプラネタリウムの展示を行います。また、現在一年生を中心として研究している、ロケットの展示・動画の上映を行います。",
          aboutCircle:
            "天文部では、星の観測だけでなく、各人の興味関心についての研究も行っています。先生方の支援を受けながら、日々、スキルを増やしています。",
          mapImagePth: "/image/circle/map/1.png",
        },
      ],
    ],
    club: [
      [
        {
          circleTitle: "軽音学同好会",
          organization: "軽音楽同好会",
          placement: "体育館ステージ",
          circleImagePth: "/image/circle/circle/keion.png",
          description: "ようこそ、ライブへ！情熱にあふれたバンド演奏を、ぜひ聴きに来てください！",
          aboutCircle:
            "バンド演奏の練習や、個人の演奏技術を高めるための練習などをしています！ライブも積極的に行なっていきたいです。",
          mapImagePth: "/image/circle/map/gym.png",
        },
      ],
      [
        {
          circleTitle: "デジタルアーツ同好会",
          organization: "デジタルアーツ同好会",
          placement: "体育館ステージ",
          circleImagePth: "/image/circle/circle/arts.png",
          description: "ステージ上でバーチャルライブ上映を行います!!詳しくはこちら>>https://negiduction.studio.site/",
          aboutCircle: "",
          mapImagePth: "/image/circle/map/gym.png",
        },
      ],
      [
        {
          circleTitle: "滝沢〇三同好会",
          organization: "滝沢〇三同好会",
          placement: "8号館1階ラウンジ",
          circleImagePth: "/image/circle/circle/takizawa.png",
          description: "正面顔がうまくいけば検知します。精度はよくないです。",
          aboutCircle: "顔はめパネルを展示しています",
          mapImagePth: "/image/circle/map/8.png",
        },
      ],
      [
        {
          circleTitle: "ダンス同好会",
          organization: "ダンス同好会",
          placement: "体育館ステージ",
          circleImagePth: "/image/circle/circle/dance.png",
          description: "ステージ上でK-pop、J-pop、アニメなど、幅広いジャンルの曲を踊ります。",
          aboutCircle:
            "毎週水曜日の16:00~17:30の間活動をしています。半数以上の部員が初心者なので興味のある方は武道場へ見学に来てみてください。",
          mapImagePth: "/image/circle/map/gym.png",
        },
      ],
      [
        {
          circleTitle: "新友館4F1年",
          organization: "新友館4F1年",
          placement: "グラウンド",
          circleImagePth: "",
          description: "寮のメンバーで食品系サークルをやります。アイスの販売を行います。",
          aboutCircle: "",
          mapImagePth: "/image/circle/map/ground.png",
        },
      ],
      [
        {
          circleTitle: "EV制作サークル",
          organization: "EV制作サークル",
          placement: "有朋寮施設周辺",
          circleImagePth: "/image/circle/circle/EV.png",
          description: "地球に優しいEV(電気自動車)を製作中!!全国大会出場経験もある「手作りEV」に試乗してみては!?",
          aboutCircle:
            "電気・電子系の有志の学生で電気自動車を製作しており、毎年大会にも出場し、高速化と高効率化を目指して日々製作に取り組んでいます。興味がある方はぜひ見学にお越しください!!",
          mapImagePth: "/image/circle/map/ev.png",
        },
      ],
      [
        {
          circleTitle: "園芸・環境同好会 園芸班",
          organization: "園芸・環境同好会 園芸班",
          placement: "グラウンド",
          circleImagePth: "/image/circle/circle/engei.png",
          description: "育てた野菜の販売を行います。安心安全無農薬です。ぜひ！！ ※雨天中止",
          aboutCircle:
            "季節ごとにいろんな野菜を育てています。お花も育てています。梅干し作ったり、干し芋も作ろうと思っています！",
          mapImagePth: "/image/circle/map/ground.png",
        },
      ],
      [
        {
          circleTitle: "園芸・環境同好会 環境班",
          organization: "園芸・環境同好会 環境班",
          placement: "1号館3階中会議室",
          circleImagePth: "/image/circle/circle/kankyo.png",
          description:
            "海洋プラスチックなどの廃プラスチックを利用した、小物やアクセサリー作りのワークショップを行います！既製品も販売します！",
          aboutCircle: "プラスチックごみ問題などの環境問題の調査やそれについての議論、環境保全に取り組んでいます！",
          mapImagePth: "/image/circle/map/1.png",
        },
      ],
      [
        {
          circleTitle: "DTM同好会",
          organization: "DTM同好会",
          placement: "1号館3階 5S教室",
          circleImagePth: "/image/circle/circle/DTM.jpg",
          description: "9号館共同実験室にて、DJプレイと同好会オリジナルCDを配布します！",
          aboutCircle:
            "各人が好きなように楽曲を作成しています。放課後の集まりは月1！少しでも興味があったら声をかけてください",
          mapImagePth: "/image/circle/map/1.png",
        },
      ],
      [
        {
          circleTitle: "漫画研究同好会",
          organization: "漫画研究同好会",
          placement: "1号館3階 語学演習室",
          circleImagePth: "/image/circle/circle/manga.png",
          description: "私たちのイラストをまとめた部誌を頒布します。",
          aboutCircle: "皆で集まってイラストを日々書いています。ぜひ私たちのサークルに遊びに来てください。",
          mapImagePth: "/image/circle/map/1.png",
        },
      ],
      [
        {
          circleTitle: "パーティーゲーム同好会",
          organization: "パーティーゲーム同好会",
          placement: "7号館2階 3I教室",
          circleImagePth: "",
          description: "パーティーゲーム同好会で研究して、面白かったボードゲームを体験してもらいます！",
          aboutCircle:
            "今年は初めての活動により研究結果によるボードゲームの作成はできませんでしたが、毎週2回楽しく活動しています！",
          mapImagePth: "/image/circle/map/7.png",
        },
      ],
      [
        {
          circleTitle: "OHMI",
          organization: "OHMI",
          placement: "体育館ステージ",
          circleImagePth: "/image/circle/circle/OHMI.png",
          description: "オリジナルのCGと豪華な照明が音楽と連動して演出するDJショー",
          aboutCircle: "",
          mapImagePth: "/image/circle/map/gym.png",
        },
      ],
      [
        {
          circleTitle: "HRI",
          organization: "HRI",
          placement: "グラウンド",
          circleImagePth: "/image/circle/circle/HRI.jpg",
          description: "あなたの、私の夢がハリボテになって走ります！",
          aboutCircle: "あなたの夢は、本命か、大穴か。私の夢は、トリプル二連単です。",
          mapImagePth: "/image/circle/map/ground.png",
        },
      ],
    ],
  },
};

export default circleData;
