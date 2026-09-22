# 課題

## 問題

ユーザー情報を入力するフォームを作成し、送信後に完了ページへ移動するアプリを作成してください。

## 条件

### ページ

* `/` → Home
* `/form` → UserForm
* `/complete` → Complete

### UserForm

* 名前を入力する`input`
* メールアドレスを入力する`input`
* 「送信」ボタンを配置
* フォーム送信時に`useNavigate`を使用
* `/complete`へ移動する

### Complete

* 「送信が完了しました」と表示
* 「Homeへ戻る」ボタンを配置
* ボタンをクリックすると`/`へ移動

### 発展条件

送信完了後にブラウザの「戻る」を押してフォームへ戻らないようにしてください。

```tsx
navigate("/complete", { replace: true });