const Student = require("../app/student")
const assert = require("assert");

describe("Delete Tests", () => {
    let deleter;

    beforeEach(done => {
        deleter = new Student({ name: "Deleter",age:0 });
        deleter.save()
            .then(() => done())
    });
    it("Delete a Test : Deleter", done => {
        Student.findByIdAndDelete(deleter._id)
            .then(() => Student.findOne({
                name: "Deleter"
            }))
            .then(student => {
                assert(student === null);
                done();
            })
    })
})