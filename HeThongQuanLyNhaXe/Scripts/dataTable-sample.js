jQuery(function ($) {
    var myTable = $('#dynamic-table').DataTable({
        paging: false,
        searching: false,
        order: [[0, "asc"]],
        columnDefs: [{ orderable: false, targets: [2] }] // 6 was the highest index, not 7
    });

    new $.fn.dataTable.Buttons(myTable, {
        buttons: [
            {
                "extend": "csv",
                "text": "<i class='fa fa-database bigger-110 orange'></i> <span class='hidden'>Export to CSV</span>",
                "className": "btn btn-white btn-primary btn-bold"
            },
            {
                "extend": "print",
                "text": "<i class='fa fa-print bigger-110 grey'></i> <span class='hidden'>Print</span>",
                "className": "btn btn-white btn-primary btn-bold",
                autoPrint: false
            }
        ]
    });
    myTable.buttons().container().appendTo($('.tableTools-container'));

    $(document).on('click', '#dynamic-table .dropdown-toggle', function (e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        e.preventDefault();
    });

})