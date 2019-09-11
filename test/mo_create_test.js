
const Student = require("../app/student")
const assert = require("assert");

describe("Create Tests", () => {
    it("Create a user in DB", () => {
        //  assert(true);
        const sam = new Student({name:"Sam",age:20})
        sam.save()
            .then(() => {
                assert(!sam.isNew)
            })
            .catch(() => {
                console.log("error")
            });
    });
});

