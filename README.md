---
title: Vue.js學習筆記
tags: JS,Vue
notebook: 10前端筆記
---

## 常用屬性：

`v-bind` 可以簡寫成 `:` 用來設定標籤內的屬性，如 `<a :href="arr.url">`

`v-on` 就是事件監聽，可簡寫為 `@` 如 `@click` 可以參考 DOM Event 服用

`v-model` 用於表單元件雙向監聽，其實就等於 `:value="data"` 及 `@input="methods"` 的組合

### `v-model` 補充說明：
1. 用於 `<textarea>` 文字區塊時，雖然變數內會存入斷行符號但若需輸出時，需要使用 `<pre>` 或在 CSS 中對需要的標籤設定 `white-space : pre`
2. 用於下拉選單時是使用在 `<select>` 標籤而不是 `<option>`
3. 不可用於 `<input type="file">` 檔案上傳的狀況
```HTML
<select v-model="selected"> <!-- 綁定在<select>標籤 -->
    <option disabled>選擇</option> <!-- 選項不可選 -->
    <option>1</option> <!-- 值為1 -->
    <option value="2">1</option> <!-- 值為2 -->
</select>
```

----

### 修飾符

修飾符可以用於在如 `@keydown` 等事件後方，套用修飾符可以有效減少許多設定上的麻煩，例如不希望點擊 `<a>` 標籤跳轉頁面，原本需要在監聽事件的 funtion 中使用 `Event.preventDefault();` 方法來取消預設動作，但是透過 `<a @click.prevent>` 就可以讓這個 `<a>` 標籤不進行頁面跳轉

#### 常用修飾符

>監聽事件的修飾符
1. `.stop` 停止事件冒泡傳遞，事件會停留在自己本身
2. `.self` 監聽事件只在自己物件本身，上層若有覆蓋其他物件則無效
3. `.once` 該監聽僅動作一次
4. `.prevent` 取消事件預設動作
5. `@keydown.enter`、`@keyup.13` 鍵盤事件可以直接使用 KeyCode 或是按鍵名稱來做為修飾符，僅監聽該按鍵

>`v-model`的修飾符
1. `.lazy` 在表單元件中的內容完成，指標離開元素後才進行資料寫入
2. `.number` 將表單元件要寫入資料的 value 值轉型成 Number 型態
3. `.trim` 去除前後空白

---

## Vue實體內的各項物件

```JS
const vm = new Vue({
    el: "", //設定掛載，可用 CSS 選擇器的邏輯來選中物件
    data: {}, //宣告使用的變數，可在 HTML 中直接使用
    computed: {}, //用以動態計算並變更物件的數值
    methods: {}, //可寫各種 funtions 供其他物件使用
    watch: {}, //可監聽數值變化來執行動作
})
```
特別注意：
1. 如需在 `computed`、`methods`、`watch` 中使用變數，需使用 `this.`
2. 只要可以用 `computed` 的狀況，就別用 `watch`

---

## Vue.js 生命週期
![](https://1.bp.blogspot.com/-mp38f47eIX4/WP3KF8j14FI/AAAAAAAAFSs/754uOg2DnYI1aiFqLNLoyBSer7qyePqPgCLcB/s1600/vue-lifecycle.png)