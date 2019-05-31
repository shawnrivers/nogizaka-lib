# [Nogizaka Lib](https://shawnrivers.github.io/nogizaka-lib/)

**[Nogizaka Lib](https://shawnrivers.github.io/nogizaka-lib/)** は[乃木坂46](http://www.nogizaka46.com/)の情報をわかりやすく提示する React ベースのウェブアプリである。

本アプリのリンク: https://shawnrivers.github.io/nogizaka-lib/

README: [English](https://github.com/shawnrivers/nogizaka-lib/blob/master/README.md), [日本語](https://github.com/shawnrivers/nogizaka-lib/blob/master/README.jp.md)

## 開発環境構築

必要なパッケージをインストールする：

```bash
npm install
```

アプリを起動する：

```bash
npm start
```

## 技術

- SPA フレームワーク: `React`
- ステート管理: `Redux`
- JavaScript: `TypeScript`
- CSS: `Sass`, `CSS modules`
- バンドラー: `Webpack`
- コンパイラー: `Babel`
- リンター: `ESLint`
- テスト: `jest`, `enzyme`
- アニメーション: `react-transition-group`
- 他: `react-lazyload`

## 機能

- CD リストページ
- CD ページ
- 楽曲ページ
- メンバーリストページ
- メンバーページ
- 検索ページ（TBD）

### CD リストページ

<img src="https://user-images.githubusercontent.com/23146992/58144007-c2ac1f00-7c87-11e9-8bf4-0128d45763d0.png" alt="Cd List Page 1" width="400" /> <img src="https://user-images.githubusercontent.com/23146992/58145604-af03b700-7c8d-11e9-970c-513c322df2bb.png" alt="Cd List Page 2" width="400" />

**CD リストページ** は CD カードのグリッドを表示する。任意の CD カードをタップ・クリックすると、それと対応する **CD ページ** に遷移できる。

### CD ページ

<img src="https://user-images.githubusercontent.com/23146992/58144263-abb9fc80-7c88-11e9-957c-64d50df3b306.png" alt="Cd Page 1" width="400" /> <img src="https://user-images.githubusercontent.com/23146992/58147538-f130f680-7c95-11e9-9398-c57a4e349589.png" alt="Cd Page 2" width="400" />

**CD ページ** は CD の詳細情報を表示する。

画面上部のジャケット写真（以下「ジャケ写」と略す）の部分がスワイプ可能になっており、スワイプすることで CD の各タイプのジャケ写が見られる。

収録曲のカードのリストがジャケ写の下に表示される。任意の収録曲カードをタップ・クリックすると、それと対応する **楽曲ページ** に遷移できる。

### 楽曲ページ

<img src="https://user-images.githubusercontent.com/23146992/58145006-9befe780-7c8b-11e9-8005-d2e8acd289f8.png" alt="Song Page 1" width="400" /> <img src="https://user-images.githubusercontent.com/23146992/58145009-9e524180-7c8b-11e9-9d33-cca16c81f722.png" alt="Song Page 2" width="400" />

**楽曲ページ** は楽曲の詳細情報を表示する。

画面上部のジャケ写部分では、この楽曲が収録されている CD のジャケ写が表示される。

ジャケ写の次には、楽曲の種類や収録されている CD、作詞や MV 監督などのクリエイターの情報が表示される。

さらに、楽曲のパフォーマンスに参加したメンバー及びそのフォーメーションもこの画面に表示される。任意のメンバーカードをタップ・クリックすると、それと対応する **メンバーページ** に遷移できる。

### メンバーリストページ

<img src="https://user-images.githubusercontent.com/23146992/58145371-c8583380-7c8c-11e9-9606-306d065122e0.png" alt="Member List Page 1" width="400" /> <img src="https://user-images.githubusercontent.com/23146992/58145372-cb532400-7c8c-11e9-89dc-f8556e042489.png" alt="Member List Page 2" width="400" />

メンバーリストページは、メンバーカードのグリッドを表示する（1期生から4期生、卒業生）。任意のメンバーカードをタップ・クリックすると、それと対応する **メンバーページ** に遷移できる。

### メンバーページ

<img src="https://user-images.githubusercontent.com/23146992/58145679-f722d980-7c8d-11e9-9f04-13907a4df5c3.png" alt="Member Page 1" width="400" /> <img src="https://user-images.githubusercontent.com/23146992/58145683-fa1dca00-7c8d-11e9-99cb-5f3bb8d11927.png" alt="Member Page 2" width="400" />

**メンバーページ** はメンバーの詳細情報を表示する。

プロフィール写真の後ろにあるグラデーションは、メンバーのサイリウムカラーを表す。

プロフィール写真の下には名前・サイト・SNS アカウント・誕生日・出身地などのプロフィール情報が表示される。

**写真集/Photo Books** の部分にはメンバーの写真集とフォトブックの情報が表示される。

**Position History** では、今までのシングルの立ち位置が表示される。

- `C`: *Center*（センター）
- `F`: *Fukujin*（福神）
- `S`: *Selected*（選抜）
- `U`: *Under*（アンダー）

**Position Counter** では、上記のそれぞれの立ち位置にいた回数かがカウントされて表示されている。

- *注：* 実際では、**「センター」** は **「福神」** と **「選抜」** 両方にカウントすべきで、**「福神」** は **「選抜」** にカウントすべきだが、ここでは表記の都合上、 **「福神」** を **「センター」** の回数を除き、**「選抜」** を **「福神」** の回数を除いた結果を表示している。つまり、厳密な **「福神」** の回数は表記の `C` + `F` の結果であり（ここでは、`4 + 7 = 11`）、**「選抜」** の回数は `C` + `F` + `S` である（ここでは、`4 + 7 + 5 = 16`）。

**Gallery** では、メンバーの今までのプロフィール写真が表示される。

## ファイル構造

コンポーネント構造は [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/) を参考にしている。

### src/

アプリケーション

- `apis/`
  - API クライアント
  - API リスポンスの型定義
  - API からのリスポンスをクライアントが必要な形に変換する
- `components/`
  - `atoms/`
    - 一番小さいコンポーネント単位、単純な HTML 要素が多い
    - e.g. ボタン
  - `molecules/`
    - 一個の機能を持つ比較的に簡単な UI コンポーネントの集まり
    - e.g. CD カード、ナビゲーションバー
  - `organisms/`
    - `molecule` か `atom` からなるより複雑な UI コンポーネント
    - e.g. CD カードリスト
  - `templates/`
    - ページ単位
- `containers/`
  - `template` がグローバルステートとつないだもの
  - 機能単位で分割を行っている
    - `/Cds`
    - `/Members`
    - `/Songs`
  - それぞれの機能の `reducers` 、`actions` と `selectors`
- `stores/`
  - ストアの初期設定
- `utils/`
  - アプリ横断で使われている関数
- `models/`
  - グローバルステートの型定義
- `styles/`
  - Sass の変数やテンプレート


## Data

このアプリで使われているデータが全て [Nogizaka-lib Data](https://github.com/shawnrivers/nogizaka-data) のリポジトリーにホスティングされている。

Profile images and CD artworks © 乃木坂LLC.
