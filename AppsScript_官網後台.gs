function doGet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const menu = readRows_("菜單", 8);
  const franchise = readRows_("加盟資訊", 7);
  const settingsRows = readRows_("網站設定", 2);
  const settings = {};
  settingsRows.forEach(r => { if (r[0]) settings[r[0]] = r[1]; });
  return ContentService
    .createTextOutput(JSON.stringify({ menu, franchise, settings }))
    .setMimeType(ContentService.MimeType.JSON);
}
function readRows_(sheetName, width) {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  if (!sh || sh.getLastRow() < 2) return [];
  return sh.getRange(2, 1, sh.getLastRow() - 1, width).getDisplayValues();
}