# daily-paid-credit-card-fee
![omori_futan_man](https://user-images.githubusercontent.com/26818923/208406392-93e82352-fb06-44a5-85b3-d922ef8ea8db.png)


一日あたりに支払っているクレジットカード会社への金額を算出するやつ  

自分自身が抱え込んでいる借金によって毎日何円を無駄に失っているのか  
この金額を意識すると借金を残しているのが馬鹿らしく思えるので、簡単に見れるモノを作りたいと思った

# 計算方法
借金額 * 年利 / 365(1年) = 1日あたりの支払額

### ピーク時(2022/8/25)の俺の例
```
console.log("1日あたりに" + 924757 * 0.15 / 365 + "円をクレカ会社に払ってる");
// => 1日あたりに380.0371232876712円をクレカ会社に払ってる
// 毎日グラコロを1個クレカ会社に奢っているような状態
```

### 今日(2022/12/19)の俺
```
console.log("1日あたりに" + 481024 * 0.15 / 365 + "円をクレカ会社に払ってる");
// => 1日あたりに197.68109589041094円をクレカ会社に払ってる
// 毎日レッドブルを1本クレカ会社に奢っているような状態
```

あ ほ く さ  
こんな浪費するなら、友人にl4d2(最安値202円)をギフトで送ってマルチプレイする方が有意義でしょ  
3日分の利息分の金があればマルチプレイに誘うためのゲームが揃えられるじゃん  

# 動かし方

## 単体テスト
```
cd *project-root-dir*
yarn jest
```
