import { TableItemProps as TableItemData } from "~/components/timetable/TableItem";

type Data = {
  out: {
    day1: TableItemData[];
    day2: TableItemData[];
  };
  in: {
    day1: TableItemData[];
    day2: TableItemData[];
  };
};

// スタート時刻
// out: 11:00
// in:  09:00
const timetableData: Data = {
  // スタート時刻は10:30
  out: {
    day1: [
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 3,
        isBlank: true,
      },
      {
        eventTitle: "クラス対抗クイズ大会予選",
        description: "ジャンルを問わない問題を出題！観客も楽しめるようになっています！ぜひ立ち寄ってみてください！",
        start: "11:00",
        end: "12:00",
        time: 6,
        isBlank: false,
      },
      {
        eventTitle: "吹奏楽コンサート",
        description: "",
        start: "12:00",
        end: "13:00",
        time: 6,
        isBlank: false,
      },
      {
        eventTitle: "クラス対抗クイズ大会決勝",
        description: "ジャンルを問わない問題を出題！観客も楽しめるようになっています！ぜひ立ち寄ってみてください！",
        start: "13:00",
        end: "14:00",
        time: 6,
        isBlank: false,
      },
      {
        eventTitle: "キーワード集め・ビンゴ大会",
        description:
          "一般の方も参加可能！学校においてある問題を解き指定の場所に行くとお菓子orビンゴ参加権をもらえる！（ビンゴカードは先着順です。ご了承ください。）",
        start: "14:00",
        end: "15:50",
        time: 11,
        isBlank: false,
      },
    ],
    day2: [
      {
        eventTitle: "コスプレショー",
        description: "個性的なコスプレイヤーが出場！観客を魅了してしまうかも！？",
        start: "10:30",
        end: "11:00",
        time: 3,
        isBlank: false,
      },
      {
        eventTitle: "のど自慢",
        description: "五人が出場！昔の曲や今流行りのアーティストの曲など様々な曲を歌ってくれます！",
        start: "11:00",
        end: "12:00",
        time: 6,
        isBlank: false,
      },
      {
        eventTitle: "秘技披露",
        description: "二組が参加！どちらもダンスで盛り上げてくれること間違いなし！",
        start: "12:00",
        end: "12:30",
        time: 3,
        isBlank: false,
      },
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 3,
        isBlank: true,
      },
      {
        eventTitle: "クラス対抗ビンゴ大会",
        description: "各クラスから1人が出場！一番早く上がった方のクラスに景品を贈呈！",
        start: "13:00",
        end: "14:00",
        time: 6,
        isBlank: false,
      },
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 5,
        isBlank: true,
      },
      {
        eventTitle: "学籍番号くじ",
        description: "学生の中からランダムで選ばれ景品をもらえるイベント！高額商品もあるかも！？",
        start: "17:00",
        end: "18:00",
        time: 3,
        isBlank: false,
      },
      {
        eventTitle: "花火大会",
        description: "今年の大目玉のイベント！茨香祭のフィナーレ！",
        start: "18:00",
        end: "18:30",
        time: 3,
        isBlank: false,
      },
    ],
  },
  // スタート時刻は9:00
  in: {
    day1: [
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 6,
        isBlank: true,
      },
      {
        eventTitle: "mi media maranja",
        description: "",
        start: "10:00",
        end: "10:20",
        time: 2,
        isBlank: false,
      },
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 1,
        isBlank: true,
      },
      {
        eventTitle: "ジェリコ",
        description: "",
        start: "10:30",
        end: "10:50",
        time: 2,
        isBlank: false,
      },
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 1,
        isBlank: true,
      },
      {
        eventTitle: "ガサ入れプランクトン",
        description: "",
        start: "11:00",
        end: "11:20",
        time: 2,
        isBlank: false,
      },
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 1,
        isBlank: true,
      },
      {
        eventTitle: "Crux.wav",
        description: "",
        start: "11:30",
        end: "11:50",
        time: 2,
        isBlank: false,
      },
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 4,
        isBlank: true,
      },
      {
        eventTitle: "デジタルアーツ同好会",
        description: "",
        start: "12:30",
        end: "13:00",
        time: 3,
        isBlank: false,
      },
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 1,
        isBlank: true,
      },
      {
        eventTitle: "ダンス同好会",
        description: "",
        start: "13:10",
        end: "13:30",
        time: 2,
        isBlank: false,
      },
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 1,
        isBlank: true,
      },
      {
        eventTitle: "酒井晴渚さん",
        description: "",
        start: "13:40",
        end: "13:45",
        time: 0.5,
        isBlank: false,
      },
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 0.5,
        isBlank: true,
      },
      {
        eventTitle: "ふかづめ",
        description: "",
        start: "13:50",
        end: "14:05",
        time: 1.5,
        isBlank: false,
      },
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 1,
        isBlank: true,
      },
      {
        eventTitle: "Tusq",
        description: "",
        start: "14:15",
        end: "14:40",
        time: 2.5,
        isBlank: false,
      },
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 1,
        isBlank: true,
      },
      {
        eventTitle: "山本燎哉さん",
        description: "",
        start: "14:50",
        end: "15:20",
        time: 3,
        isBlank: false,
      },
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 1,
        isBlank: true,
      },
      {
        eventTitle: "OHMI",
        description: "",
        start: "15:30",
        end: "15:50",
        time: 2,
        isBlank: false,
      },
    ],
    day2: [
      {
        eventTitle: "ダンス同好会",
        description: "",
        start: "9:00",
        end: "9:20",
        time: 2,
        isBlank: false,
      },
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 1,
        isBlank: true,
      },
      {
        eventTitle: "OHMI",
        description: "",
        start: "9:30",
        end: "9:50",
        time: 2,
        isBlank: false,
      },
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 1,
        isBlank: true,
      },
      {
        eventTitle: "山本燎哉さん",
        description: "",
        start: "10:00",
        end: "10:30",
        time: 3,
        isBlank: false,
      },
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 1,
        isBlank: true,
      },
      {
        eventTitle: "Tusq",
        description: "",
        start: "10:40",
        end: "11:05",
        time: 2.5,
        isBlank: false,
      },
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 1,
        isBlank: true,
      },
      {
        eventTitle: "ふかづめ",
        description: "",
        start: "11:15",
        end: "11:30",
        time: 1.5,
        isBlank: false,
      },
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 1,
        isBlank: true,
      },
      {
        eventTitle: "林昇吾さん",
        description: "",
        start: "11:40",
        end: "12:00",
        time: 2,
        isBlank: false,
      },
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 3,
        isBlank: true,
      },
      {
        eventTitle: "ガサ入れプランクトン",
        description: "",
        start: "12:30",
        end: "12:50",
        time: 2,
        isBlank: false,
      },
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 1,
        isBlank: true,
      },
      {
        eventTitle: "Crux.wav",
        description: "",
        start: "13:00",
        end: "13:20",
        time: 2,
        isBlank: false,
      },
      {
        eventTitle: "",
        description: "",
        start: "",
        end: "",
        time: 1,
        isBlank: true,
      },
      {
        eventTitle: "リサイクル",
        description: "",
        start: "13:30",
        end: "13:50",
        time: 2,
        isBlank: false,
      },
    ],
  },
};

export default timetableData;
