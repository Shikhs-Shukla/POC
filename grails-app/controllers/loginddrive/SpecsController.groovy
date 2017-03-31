package loginddrive

import static org.springframework.http.HttpStatus.*
import grails.transaction.Transactional

@Transactional(readOnly = true)
class SpecsController {

    def scaffold = Specs

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond Specs.list(params), model:[specsCount: Specs.count()]
    }

    def show(Specs specs) {
        respond specs
    }

    def create() {
        respond new Specs(params)
    }

    @Transactional
    def save(Specs specs) {
        if (specs == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (specs.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond specs.errors, view:'create'
            return
        }

        specs.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'specs.label', default: 'Specs'), specs.id])
                redirect specs
            }
            '*' { respond specs, [status: CREATED] }
        }
    }

    def edit(Specs specs) {
        respond specs
    }

    @Transactional
    def update(Specs specs) {
        if (specs == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        if (specs.hasErrors()) {
            transactionStatus.setRollbackOnly()
            respond specs.errors, view:'edit'
            return
        }

        specs.save flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'specs.label', default: 'Specs'), specs.id])
                redirect specs
            }
            '*'{ respond specs, [status: OK] }
        }
    }

    @Transactional
    def delete(Specs specs) {

        if (specs == null) {
            transactionStatus.setRollbackOnly()
            notFound()
            return
        }

        specs.delete flush:true

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'specs.label', default: 'Specs'), specs.id])
                redirect action:"index", method:"GET"
            }
            '*'{ render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'specs.label', default: 'Specs'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }
}
