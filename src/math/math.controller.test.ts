import * as math_controller from "./math.controller"
import * as math_service from "./math.service"

// @ponicode
describe("wordCount", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new math_service.MathService()
        inst2 = new math_controller.MathController(inst)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst2.wordCount("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst2.wordCount("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst2.wordCount("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst2.wordCount("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst2.wordCount("")
        }
    
        expect(callFunction).not.toThrow()
    })
})
