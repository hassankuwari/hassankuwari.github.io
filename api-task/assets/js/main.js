function getBankData() {
    $.ajax({
        type: "GET",
        url: 'http://103.88.221.150:9439/api/bank/getAll',
        responseType: "json",
        success: function (response) {
            console.log("checking bank data", response);
            $.each(response, function (index, value) {
                console.log("inside loop", value.bankId);
                $("#bank-data").append(`
                <tr>
               <td>${value.bankId}</td>
               <td>${value.bankName}</td>
               <td>${value.accountNumber}</td>
               <td>${value.ifscCode}</td>
               <td>${value.ipAddress}</td>
               <td>${value.activeStatus}</td>
            </tr>
                `)
            })
        },
        complete: function() {
            $("#bank-table").DataTable();
        }

    })
}
getBankData()

