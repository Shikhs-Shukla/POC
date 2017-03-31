package loginddrive

import grails.converters.JSON


class UserController {


    def index() {

    }

    def alternate(){

    }

    def submit() {

        def user = Users.where{
            (username == params.username) && (password == params.password)
        }
        if(user){
            def userboy = Users.get(params.username)
            userboy.logincount += 1
            println (userboy.logincount + "  LOGINCOUNT")
            redirect(action: "userModify", params: [username : params.username])
        }
        else {
            redirect action: "index"
        }
    }

    def userModify() {
        def username = params.username
        render(view: "userModify", model: [username:username])
    }

    def userList() {
        def user = Users.get(params.username)
        def fullList = []

        for(spec in user.specs) {
            def newMap = [:]
            newMap.put('instrument', spec.instrument)
            newMap.put('amplifier', spec.amplifier)
            newMap.put('strings', spec.strings)
            fullList.add(newMap)
        }
        def shikharGutkha = ['shikhar' : fullList]
        println(shikharGutkha)
        render(view:"displayInfo", model:[details: shikharGutkha, username : params.username])




        int max = params.int('length') ?: 50
        int offset = params.int('start') ?: 0
        String sort = params.sort ?: ''
        String direction = params.direction ?: 'desc'
//        switch (sort) {
//            case "type":
//                sort = "templateType"
//                break
//            case "owner.fullName":
//                sort = "fullName"
//                break
//            case "category":
//                sort = "categoryName"
//                break
//        }
        String searchString = params.searchString?.trim()
        println("+++++++1337++++ " + searchString)
//        List<Long> idsForUser = ReportTemplate.findAllIdsBySearchString(searchString, currentUser).list([max: max, offset: offset, sort: sort, order: direction]).collect {
//            it.first()
//        }
//        int recordsFilteredCount = ReportTemplate.countRecordsBySearchString(searchString, currentUser).get()
//        List<ReportTemplate> reportTemplateList = idsForUser ? ReportTemplate.getAll(idsForUser) : []
//        int recordsTotal = ReportTemplate.ownedByUser(currentUser).count()
//        render([aaData: reportTemplateList, recordsTotal: recordsTotal, recordsFiltered: recordsFilteredCount] as JSON)
    }

    def displayInfo() {
        def user = Users.get(params.username)
        boolean isExist = Specs.where{
            (instrument == params.instrument) && (amplifier == params.amplifier) && (strings == params.strings)
        }
        if(isExist){
            user.addToSpecs(Specs.get(params.instrument))
        }
        else{
            def spec = new Specs(instrument: params.instrument, amplifier: params.amplifier, strings: params.strings)
            user.addToSpecs(spec)
        }
        def fullList = []

        for(spec in user.specs) {
            def newMap = [:]
            newMap.put('instrument', spec.instrument)
            newMap.put('amplifier', spec.amplifier)
            newMap.put('strings', spec.strings)
            fullList.add(newMap)
        }
        println(fullList)
        def columnData = [:]
        columnData.put('shikhar', fullList)
        columnData.put('headerSize', 2)
        columnData.put('totalColumnCount', 3)
        println(columnData)
        render(view:"displayInfo", model:[details: columnData as JSON, username : params.username])
//        render(view:"displayInfo", model:[username : params.username])
    }

    def logout() {
        session.user = null
        redirect(action: 'index')
    }
}
