(function () {

    document.getElementById("downloadButton").onclick = function () { ExportToExcel()};

    function ExportToExcel(type, fn, dl) {
        const elt = document.getElementById('tbl_exporttable_to_xls');
        let wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
        return dl ?
            XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
            XLSX.writeFile(wb, fn || ('MySchedule.' + (type || 'xlsx')));
    }

})();
