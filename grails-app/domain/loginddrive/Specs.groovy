package loginddrive

class Specs {

    String instrument
    String amplifier
    String strings

    static constraints = {
        instrument unique: true
        instrument blank: false
    }

    static belongsTo = Users

    static hasMany = [users : Users]

    static mapping = {
        version false
        id name: 'instrument', generator: 'assigned'
    }
}
