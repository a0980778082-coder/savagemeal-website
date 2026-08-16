小野人餐盒製造所｜官網 V2 多頁正式版

網站頁面：
首頁 index.html
菜單 menu/index.html
企業訂餐 business/index.html
加盟專區 franchise/index.html
關於小野人 about/index.html

已完成：
- 首頁不再塞完整加盟內容，只保留加盟入口
- 加盟專區獨立頁面
- 菜單獨立頁面
- 企業／會議訂餐獨立頁面
- 「今天的胃，就交給小野人。」
- 正確使用「碳烤野菇時蔬」得獎餐盒照片
- Google Sheet 動態菜單／加盟方案架構
- SEO title / description / sitemap / robots 基礎

Google Sheet 官網後台：
「小野人餐盒製造所｜官網後台」
試算表 ID：
1liyzNFp2ec7-vqkF4gxWtHoFgQP5gD0_EtVl5rkBYho

正式連線：
1. 打開該 Google Sheet
2. 擴充功能 → Apps Script
3. 把 AppsScript_官網後台.gs 貼上
4. 部署 → 新增部署作業 → 網頁應用程式
5. 執行身分：我；誰可以存取：任何人
6. 複製部署後 /exec 網址
7. 貼到 config.js 的 apiUrl
8. 上傳整包網站內容到 GitHub Pages

正式網域確定後，再把 robots.txt / sitemap.xml 的 YOUR-DOMAIN.example 改為正式網域。
