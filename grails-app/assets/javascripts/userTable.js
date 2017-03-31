$(document).ready(function () {
    // var details = $('#details').html();
    // var jsonDetails = $.parseJSON(details)
    // console.log("lol " + jsonDetails);
    var aOOOColumns = function() {
        console.log("Hahahahahaha");
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
            }, {
                "title" : "Belt",
                "value" : "belt",

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
                    colArray[j] = colArray[j] + "+'<br>'+" + finalData;
                }
                else
                {
                    colArray[j] = finalData;
                }
                i++;
            }
        }

        var renderFun = function (i) {
            console.log(i)
            console.log(colArray)
            return colArray[i]
        }
        var aOOColumnsArr = new Array();
        for(i=0;i<colPerRow;i++){
            var a = {
                "sWidth": "33%",
                "mRender": "function (data, type, row){"+"return  }+"
            }

            aOOColumnsArr.push(a);
        }
        console.log(aOOColumnsArr);
        console.log(JSON.stringify(aOOColumnsArr));

        // var username =  $('#username').html();
        return aOOColumnsArr;
    }

    var logTable = $('#userdata').DataTable({
        "ajax" : {
            "url" : "pocCode"
        },
        "sortable": false,
        "paging": true,
        "searching": true,
        "aLengthMenu": [[5, 10, 20, 50, -1], [5, 10, 20, 50, "Saare"]],
        "aoColumns": aOOOColumns()

    });

    var ascend = true;
});