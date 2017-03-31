$(document).ready(function () {
    var details = $('#details').html();
    var jsonDetails = $.parseJSON(details)
    console.log("lol " + jsonDetails);
    // $('#userdata tfoot th').each( function () {
    //     var title = $(this).text();
    //     $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    // } );

    var columnNames = [
        {
            "title" : "Custom Guitar",
            "value" : "customGuitar"
        },
        {
            "title" : "Tube Amplifier",
            "value" : "tubeAmplifier"
        },
        {
            "title" : "Ernie Ball Strings",
            "value" : "ballStrings"
        }, {
            "title" : "Pick",
            "value" : "pick"
        }
    ];
    var colLayout = 2;
    var colPerRow = colLayout;
    var columnCount = columnNames.length;
    var pointer = 0;
    var numHeaders = Math.floor(columnCount/colPerRow);
    var overflowHeaders = columnCount%colPerRow;
    $('#userdata').append('<thead id = "mainHead"></thead>');
    for(i = 0 ; i < numHeaders + overflowHeaders; i++) {
        var newId = (i).toString();
        $('#mainHead').append('<tr id ="'+newId+'" ></tr>');
        for(j = 0; j < colPerRow ; j++) {
            if(pointer<columnCount) {
                var newColName = columnNames[pointer];
                var newerColName = newColName["title"];
                $('#' + newId).append('<th id = "'+newerColName+'">'+newerColName+'</th>');
                pointer++;
            } else {
                $('#' + newId).append('<th></th>');
            }
        }
    }
    var colArray = [];
    // for(i=0;i<colPerRow;i++){
    //     colArray[i] = "";
    // }
    for(i=0;i<columnCount;)
    {
        for(j=0;j<colPerRow;j++) {
            if (i >= columnCount) {
                break;
            }
            var data = columnNames[i];
            var finalData = data["value"];
            if (colArray[j] != undefined){
                colArray[j] = colArray[j] + '<br>' + finalData;
            }
            else
            {
                colArray[j] = finalData;
            }
            i++;
        }
    }
    var aOOColumns = new Array;
    for(i=0;i<colPerRow;i++){
        alert(colArray[i])
        var a = {
            "sWidth": "33%",
            "mRender": function(data, type, row){
                return colArray[i];
            }
        }
        aOOColumns.push(a);
    }
    console.log(aOOColumns);
    var username =  $('#username').html();
    var logTable = $('#userdata').DataTable({

        // "ajax": {
        //     "url": userList,
        //     "data": {
        //         username: username
        //     },
        //     "dataSrc" : "shikhar"
        //
        // },
        "sortable": false,
        "paging": true,
        "searching": true,
        "aLengthMenu": [[5, 10, 20, 50, -1], [5, 10, 20, 50, "Saare"]],
        "aoColumns": [
            aOOColumns
        ]


    });

    // logTable.columns().every( function () {
    //     var that = this;
    //     $( 'input', this.footer() ).on( 'keyup change', function () {
    //             // console.log("ABC " + JSON.stringify(this.footer) + " DEF " + this.value)
    //         // console.log(logTable.search("aaa"))
    //         //console.log(that.search(this.value))
    //             that
    //                 .search( this.value )
    //                 .draw();
    //     } );
    // } );

    function myFunc(){
        alert('It works');
    }

    var ascend = true;

    // $('#userdata thead th').click(function () {
    //     // alert($('#userdata thead th').index(this))
    //     // alert(typeof $(this).index())
    //     var orderColNum = $('#userdata thead th').index(this)
    //     alert(orderColNum)
    //     if(ascend){
    //         logTable.order([orderColNum, 'asc']).draw();
    //         ascend = !ascend
    //     }
    //     else{
    //         logTable.order([orderColNum, 'desc']).draw();
    //         ascend = !ascend
    //     }
    // })


    // logTable.order([2, 'asc']).draw();

});