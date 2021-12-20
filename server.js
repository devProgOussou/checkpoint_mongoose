const mongoose = require('mongoose') ;
const Person = require('./models/Person.model') ;

const person1 = new Person ({
    name : "Eric Diouf" ,
    age : 24 ,
    favoriteFoods : ['Poulet Pané' , 'kaldou' , 'mbaxal Saloum'] ,
    phone : 771654622
})
//saved the person was created
person1.save()
.then (()=> console.log('person saved'))
.cath ((err)=> console.error(err) )

//Creation Many Records with model.create()
// arrugement fonction arrayofpoeple
const arrayofpoeple = [
    {
        name : "Ousmane Fall",
        age : 26 ,
        favoriteFoods :['mbaxalou saloum' , 'mbroxé'],
        phone : 773930616
    },
    {
        name : "Galo Diokhane",
        age : 26 ,
        favoriteFoods :['Pooding' , 'maxon'],
        phone : 773591434
    }
]
//using model.create()
Person.create(arrayofpoeple)
.then (()=> console.log('persons added'))
.cath ((err)=> console.error(err) )

//Use model.find() to Search a persons in our Database
Person.find()
.then ((doc)=> console.log('all persons' , doc))
.cath ((err)=> console.error(err) )

//Using model.findOne() to Search someone in our Database
Person.findOne({phone : 771654622})
.then((doc)=> console.log('its' , doc.name))
.catch((err)=> console.error(err))

//Using model.findById() to Search someone in our Database with her _id
Person.findById({_id : "61545fc7c79c6512fad429b4"})
.then((doc)=> console.log(doc))
.catch((err)=> console.error(err))

//Perform Classic Updates by Running Find, Edit, then Save
Person.find({id: "61545fc7c79c6512fad429b4"}, function (err, docs) {
    if (err){
        return err
    }else{    
        docs.favoriteFoods.push('humburger').save() 
    }

});

// Perform New Updates on a Document Using model.findOneAndUpdate()
Person.findOneAndUpdate({name: 'Ousmane Fall' },{age:20}, {new : true} )
.then(doc=>console.log("update",doc))
.catch(err=>console.log(err))

// Delete One Document Using model.findByIdAndRemove
Person.findByIdAndRemove({_id: "61545fc7c79c6512fad429b4" })
.then(doc=>console.log("remove",doc))
.catch(err=>console.log(err))

//MongoDB and Mongoose - Delete Many Documents with model.remove()
Person.remove({name : 'Marie'}, function(err) {
    if(err){
        return err ;
    }else{
        console.log('Removed succes');
    }
    // where removed is the count of removed documents
 });

 Person.find({favoriteFoods:{$in:["buritos"]}})
 .limit(2)
 .select("-age")
 .sort({name:"asc"})
 .exec()
 .then(docs=>console.log(docs,"docs"))
 .catch(err=>console.log(err))