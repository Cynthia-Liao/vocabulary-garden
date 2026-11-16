# Vocabulary Garden

以翻轉卡片練習英文單字的輕量靜態網站。使用 HTML、CSS、原生 JavaScript 與 JSON，不需要建置工具或第三方函式庫。

## 功能

- 日常英文（daily）、學術英文（academic）、科技英文（technology）、商業英文（business），各 5 個單字。
- 點擊或觸控卡片翻面；以 Tab 選取卡片後，也能用 Enter 或空白鍵操作。
- 正面顯示英文單字，背面顯示詞性、繁體中文解釋及英文例句。
- 上一張／下一張與目前分類的張數進度；切換單字或分類時回到正面，切換分類時回到第一張。
- 支援桌面與手機版面，以及空資料與載入失敗提示。

## 本機預覽

在專案根目錄執行（需安裝 Python 3）：

```sh
python3 -m http.server 8000
```

開啟 <http://localhost:8000>。單字資料透過 `fetch()` 載入，請使用 HTTP 伺服器，不要直接以 `file://` 開啟 HTML。

## 檔案結構

```text
AGENTS.md             專案規範
README.md             使用與部署說明
index.html            語意化頁面與無障礙控制項
css/style.css         配色、卡片及響應式版面
js/app.js             資料載入、分類、翻面與導覽
data/vocabulary.json  所有單字資料
```

新增單字時，依 `AGENTS.md` 的六欄位結構更新 JSON 即可。新增分類時，在 `js/app.js` 的 `categoryNames` 加入顯示名稱；選單會依分類設定及資料自動產生。

## 部署至 GitHub Pages

1. 將專案推送至 GitHub 儲存庫。
2. 在儲存庫 **Settings → Pages → Build and deployment** 選擇 **Deploy from a branch**。
3. 選擇存放專案的分支（例如 `main`），目錄選擇 **/ (root)**，儲存設定。
4. 部署完成後開啟 Pages 提供的網址，確認四個分類、卡片翻面、導覽及進度正常。
5. 開啟該網站網址下的 `data/vocabulary.json`，確認可以讀取 JSON，並在瀏覽器開發者工具確認沒有 JavaScript 錯誤。

所有資源皆使用相對路徑，可放在 GitHub Pages 的儲存庫子路徑。
