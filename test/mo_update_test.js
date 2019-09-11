const Student = require("../app/student")
const assert = require("assert");

describe("Update Test",()=>{
    let updater;
     beforeEach(done => {
         updater = new Student({
             name: "Updater",
             age: 18
         });
         updater.save()
             .then(() => done())
     });
    it("Set n Save",()=>{
       updater.set("name", "UpUpdater");
       updater.save()
        .then(()=> Student.find({}))
        .then( studnets =>{
           assert(studnets[0].name !=="Updater");
           //assert(studnets[0].name ==="UpUpdater");
        
        });
    });
});