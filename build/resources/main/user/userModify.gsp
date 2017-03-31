<html>
<head>
    <title> User Modify Page </title>
</head>
<body>
    LOGGED IN USER IS ${username}<br>
    <br>
    Please add a new instrument for the User - ${username}.
    <g:form action="displayInfo" controller="user" params="[username:username]">
        <div>
            <label>Instrument: </label><input type = "text" name = "instrument"><br>
            <label>Amplifier:  </label><input type = "text" name = "amplifier"><br>
            <label>Strings:    </label><input type = "text" name = "strings"><br>
            <label>&nbsp</label><input type = "Submit" value="Display Info">
        </div>
    </g:form>
</body>
</html>