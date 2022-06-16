/**
   * @desc get table data as json
   * @param data
   * @param columns
   */
 const getTableDataForExport = (data, columns) => data?.map((record) => columns
 .reduce((recordToDownload, column) => (
   { ...recordToDownload, [column.Header]: record[column.accessor] }
 ), {}));
 
 /**
  * @desc make csv from given data
  * @param rows
  * @param filename
  */
 const makeCsv = async (rows, filename) => {
   const separator = ';';
   const keys = Object.keys(rows[0]);
 
 const csvContent = `${keys.join(separator)}\n${
   rows.map((row) => keys.map((k) => {
     let cell = row[k] === null || row[k] === undefined ? '' : row[k];
 
     cell = cell instanceof Date
       ? cell.toLocaleString()
       : cell.toString().replace(/"/g, '""');
 
     if (cell.search(/("|,|\n)/g) >= 0) {
       cell = `"${cell}"`;
     }
     return cell;
   }).join(separator)).join('\n')}`;
 
 const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
   if (navigator.msSaveBlob) { // In case of IE 10+
     navigator.msSaveBlob(blob, filename);
   } else {
     const link = document.createElement('a');
     if (link.download !== undefined) {
       // Browsers that support HTML5 download attribute
       const url = URL.createObjectURL(blob);
       link.setAttribute('href', url);
       link.setAttribute('download', filename);
       link.style.visibility = 'hidden';
       document.body.appendChild(link);
       link.click();
       document.body.removeChild(link);
     }
   }
 };