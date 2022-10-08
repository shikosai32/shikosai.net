import { TableItemProps as TableItemData } from "~/components/timetable/TableItem";

type Data = {
  day1: {
    timeInfo: string[];
    out: TableItemData[][];
    in: TableItemData[][];
  };
  day2: {
    timeInfo: string[];
    out: TableItemData[][];
    in: TableItemData[][];
  };
};

const timetableData: Data = {
  day1: {
    timeInfo: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
    out: [
      [],
      [
        {
          eventTitle: "クラス対抗クイズ大会予選",
          description: "ジャンルを問わない問題を出題！観客も楽しめるようになっています！ぜひ立ち寄ってみてください！",
          start: "11:00",
          end: "12:00",
        },
      ],
      [{ eventTitle: "吹奏楽コンサート", description: "", start: "12:00", end: "13:00" }],
      [
        {
          eventTitle: "クラス対抗クイズ大会決勝",
          description: "ジャンルを問わない問題を出題！観客も楽しめるようになっています！ぜひ立ち寄ってみてください！",
          start: "13:00",
          end: "14:00",
        },
      ],
      [
        {
          eventTitle: "キーワード集め・ビンゴ大会",
          description:
            "一般の方も参加可能！学校においてある問題を解き指定の場所に行くとお菓子orビンゴ参加権をもらえる！（ビンゴカードは先着順です。ご了承ください。）",
          start: "14:00",
          end: "15:50",
        },
      ],
    ],
    in: [
      [
        {
          eventTitle: "mi media maranja",
          description: "あなたがいなきゃ、私は完成しない",
          start: "10:00",
          end: "10:20",
        },
        {
          eventTitle: "ｼﾞｪﾘｺ",
          description: "女々しい彼の思い出はあの日のｼﾞｪﾘｺでした",
          start: "10:30",
          end: "10:50",
        },
      ],
      [
        {
          eventTitle: "ガサ入れプランクトン",
          description: "あなたの心をガサ入れ！YOASOBI等のバンド演奏！",
          start: "11:00",
          end: "11:20",
        },
        {
          eventTitle: "Crux.wav",
          description: "僕たちと一緒に、リミッター外しちゃえ。",
          start: "11:30",
          end: "11:50",
        },
      ],
      [
        {
          eventTitle: "デジタルアーツ同好会",
          description: "ステージ上でバーチャルライブを行います！",
          start: "12:30",
          end: "13:00",
        },
      ],
      [
        {
          eventTitle: "ダンス同好会",
          description: "様々なジャンルの曲を踊ります！",
          start: "13:10",
          end: "13:30",
        },
        {
          eventTitle: "AEINZ",
          description: "作詞作曲、演奏と歌唱。全部私がやります！",
          start: "13:40",
          end: "13:45",
        },
        {
          eventTitle: "ふかずめ",
          description: "Let me make some noise.",
          start: "13:50",
          end: "14:05",
        },
      ],
      [
        {
          eventTitle: "Tusq",
          description: "DJとドラムが融合したライブになります",
          start: "14:15",
          end: "14:40",
        },
        {
          eventTitle: "燎哉の弾き語り",
          description: "有名な曲3割、自分が好きな曲7割。",
          start: "14:50",
          end: "15:20",
        },
      ],
      [
        {
          eventTitle: "OHMI",
          description: "曲と演出がリンクしたDJパフォーマンス",
          start: "15:30",
          end: "15:50",
        },
      ],
    ],
  },
  day2: {
    timeInfo: ["09:00", "10:00", "11:00", "12:00", "13:00", "17:00", "18:00"],
    out: [
      [],
      [
        {
          eventTitle: "コスプレショー",
          description: "個性的なコスプレイヤーが出場！観客を魅了してしまうかも！？",
          start: "10:00",
          end: "11:00",
        },
      ],
      [
        {
          eventTitle: "のど自慢",
          description: "五人が出場！昔の曲や今流行りのアーティストの曲など様々な曲を歌ってくれます！",
          start: "11:00",
          end: "12:00",
        },
      ],
      [
        {
          eventTitle: "秘技披露",
          description: "二組が参加！どちらもダンスで盛り上げてくれること間違いなし！",
          start: "12:00",
          end: "12:30",
        },
      ],
      [
        {
          eventTitle: "クラス対抗ビンゴ大会",
          description: "各クラスから1人が出場！一番早く上がった方のクラスに景品を贈呈！",
          start: "13:00",
          end: "14:00",
        },
      ],
      [
        {
          eventTitle: "学籍番号くじ",
          description: "学生の中からランダムで選ばれ景品をもらえるイベント！高額商品もあるかも！？",
          start: "17:00",
          end: "18:00",
        },
      ],
      [
        {
          eventTitle: "花火大会",
          description: "今年の大目玉のイベント！茨香祭のフィナーレ！",
          start: "18:00",
          end: "18:30",
        },
      ],
    ],
    in: [
      [
        { eventTitle: "ダンス同好会", description: "様々なジャンルの曲を踊ります！", start: "9:00", end: "9:20" },
        {
          eventTitle: "OHMI",
          description: "曲と演出がリンクしたDJパフォーマンス",
          start: "9:30",
          end: "9:50",
        },
      ],
      [
        { eventTitle: "燎哉の弾き語り", description: "有名な曲3割、自分が好きな曲7割。", start: "10:00", end: "10:30" },
        { eventTitle: "Tusq", description: "DJとドラムが融合したライブになります。", start: "10:40", end: "11:05" },
      ],
      [
        {
          eventTitle: "ふかずめ",
          description: "Let me make some noise.",
          start: "11:15",
          end: "11:30",
        },
        { eventTitle: "田山と林", description: "みんなが知ってる邦ロックやります。", start: "11:40", end: "12:00" },
      ],
      [
        {
          eventTitle: "ガサ入れプランクトン",
          description: "あなたの心をガサ入れ！YOASOBI等のバンド演奏！",
          start: "12:30",
          end: "12:50",
        },
      ],
      [
        { eventTitle: "Crux.wav", description: "僕たちと一緒に、リミッター外しちゃえ。", start: "13:00", end: "13:20" },
        { eventTitle: "リサイクル", description: "バンド演奏します！", start: "13:30", end: "13:50" },
      ],
    ],
  },
};

export default timetableData;
