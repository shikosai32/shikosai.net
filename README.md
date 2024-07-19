# shikosai.net

2022 年に開催された第 32 回茨香祭の公式サイトです。

## 技術スタック

- Next.js (Pages Router)
- Tailwind CSS

## 実行

次の実行環境を用意してください。

- Node.js v18.20.4
- yarn v4.3.1

バージョンは必ずしも一致する必要はありませんが、動作確認済みのバージョンとなります。

[Volta](https://volta.sh/) を利用するとバージョンが一致するようになっているのでおすすめです。

```bash
yarn install
yarn build
yarn start
```

### デプロイを行う場合

```bash
yarn install
yarn build
yarn export
```

`out` ディレクトリに生成されたファイル全てをデプロイしてください。
