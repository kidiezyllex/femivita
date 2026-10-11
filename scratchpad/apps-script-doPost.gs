function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var phone = data.phone || "";

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    sheet.appendRow([
      new Date(),
      data.name || "",
      phone ? "'" + phone : "",
      data.product || "",
      data.address || "",
      data.source || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
