const mongoose= require("mongoose");
mongoose.Promise=global.Promise //ES6 Promise



before( done => {
    mongoose.connect("mongodb://localhost/mongotube", { useNewUrlParser: true });

    mongoose.connection  //promiss and this need to be fullfilled
        //they both are promisses, they are listener whatever the event is happen either it is successfull or failure 
        .once("open", () => {
          //  console.log("Connected");
          done();
        })
        .on("error", error => {
            console.log("Your Error", error);
        });
});


//this is used because in some case let say we have to update something into the test but our 
//connection is not ready yet then they save update feild so in our to avoid that prolem we use 
//before() so that they make sure that we are connected before update or doing any operation;;

beforeEach(done =>{
  mongoose.connection.collections.students.drop(()=>{
      done();
  })  
})