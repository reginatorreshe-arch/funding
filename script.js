function doPost(e) {
  const hoja = SpreadsheetApp.openById('1MgFy4g2_xfE7XLRJp3Eg5mmB1j2ljMv6yqWbqgBZQhU')
                              .getSheets()[0];
  
  // Encabezados si la hoja está vacía
  if (hoja.getLastRow() === 0) {
    hoja.appendRow(['Fecha','Nombre','Apellido','Correo','Edad','Sexo',
                    'País','Estado','Motivación','Monto','Frecuencia']);
  }

  const d = JSON.parse(e.postData.contents);
  hoja.appendRow([
    new Date().toLocaleString('es-MX'),
    d.nombre, d.apellido, d.correo, d.edad, d.sexo,
    d.pais, d.estado, d.motivacion, d.monto, d.frecuencia
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
