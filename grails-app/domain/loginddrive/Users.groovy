package loginddrive

class Users {

    String username
    String password
    int logincount

    static constraints = {
        username unique: true
        username blank:false
        password blank:false

    }

    static hasMany = [specs : Specs]

    static mapping = {
        table 'users'
        version false
        id name: 'username', generator: 'assigned'
    }
}
