<html>
<head>
    <title>Basic Table</title>
    <asset:javascript src="jquery-2.2.0.min.js"/>
    <asset:javascript src="datatables/jquery.dataTables.js"/>
    <g:javascript>
        var userList = "${createLink(controller: 'user', action: 'userList')}"
    </g:javascript>
    <asset:javascript src="userTable.js"/>

    <script>
        $(document).ready(function () {
        });
    </script>

</head>

<body>
HOOLA HOOLA<br>
<div hidden id="username" value ="${username}">${username}</div>
<div hidden id="details" value ="${details}">${details}</div>
<table id = "userdata", class="display", cellspacing = 20>

</table>
</body>
</html>