jQuery(function ($) {
    var myTable = $('#dynamic-table').DataTable({
        pageLength: 10,
        paging: true,
        searching: true,
        order: [[0, "asc"]]
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