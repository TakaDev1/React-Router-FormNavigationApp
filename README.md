# React Router - フォーム送信後のページ遷移

React Routerの`useNavigate`を使用して、フォーム送信後に完了ページへ遷移する方法を学習する練習用アプリです。

## 目次

* [概要](#概要)
* [学習内容](#学習内容)
* [ページ構成](#ページ構成)
* [機能](#機能)
* [発展機能](#発展機能)
* [使用技術](#使用技術)
* [ディレクトリ構成](#ディレクトリ構成)
* [実装のポイント](#実装のポイント)
* [起動方法](#起動方法)

## 概要

ユーザー情報を入力するフォームを作成し、フォーム送信後に完了ページへ移動するアプリです。

React Routerの`useNavigate`を使用して、ユーザー操作によるプログラムからのページ遷移を実装します。

## 学習内容

* `useNavigate`の基本的な使い方
* フォームの`onSubmit`処理
* `event.preventDefault()`によるフォームのデフォルト動作の制御
* フォーム送信後のページ遷移
* `navigate()`によるページ移動
* `replace: true`による履歴の置き換え

## ページ構成

| URL         | ページ      | 内容           |
| ----------- | -------- | ------------ |
| `/`         | Home     | ホーム画面        |
| `/form`     | UserForm | ユーザー情報入力フォーム |
| `/complete` | Complete | 送信完了画面       |

## 機能

### Home

ホーム画面を表示します。

### UserForm

以下の入力項目を持つフォームを表示します。

* 名前
* メールアドレス
* 送信ボタン

フォームを送信すると、`useNavigate`を使用して`/complete`へ移動します。

```tsx
const navigate = useNavigate();

const handleComplete = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  navigate("/complete", { replace: true });
};
```

フォームには`onSubmit`でイベントハンドラーを指定します。

```tsx
<form onSubmit={handleComplete}>
```

### Complete

送信完了後のページです。

以下を表示します。

* 「送信が完了しました」
* 「Homeへ戻る」ボタン

「Homeへ戻る」ボタンをクリックすると`/`へ移動します。

## 発展機能

フォーム送信後の遷移に以下を指定します。

```tsx
navigate("/complete", { replace: true });
```

`replace: true`を指定することで、現在の履歴を`/complete`で置き換えます。

そのため、

```text
/form
  ↓ 送信
/complete
```

と遷移した後にブラウザの「戻る」を押しても、送信前の`/form`へ戻らないようにできます。

## 使用技術

* React
* TypeScript
* React Router
* Vite

## ディレクトリ構成

```text
src/
├── pages/
│   ├── Home.tsx
│   ├── UserForm.tsx
│   └── Complete.tsx
├── App.tsx
└── main.tsx
```

## 実装のポイント

### useNavigate

`useNavigate`は、プログラムからページ遷移を行うためのReact Routerのフックです。

```tsx
const navigate = useNavigate();

navigate("/complete");
```

### replace: true

`replace: true`を指定すると、ブラウザの履歴に新しいエントリを追加するのではなく、現在の履歴を置き換えます。

```tsx
navigate("/complete", { replace: true });
```

フォーム送信後に、ユーザーがブラウザの「戻る」操作で送信フォームへ戻ることを防ぐ用途などで使用できます。

### event.preventDefault()

フォーム送信時のブラウザ標準のページリロードを防ぎます。

```tsx
const handleComplete = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  navigate("/complete", { replace: true });
};
```

## 起動方法

依存関係をインストールします。

```bash
npm install
```

開発サーバーを起動します。

```bash
npm run dev
```

表示されたURLをブラウザで開きます。

```text
http://localhost:5173
```
