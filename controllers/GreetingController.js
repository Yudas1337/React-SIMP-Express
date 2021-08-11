const Greetings = require('../models/GreetingModel')
const { validateAddGreeting } = require('../validation/validation')


module.exports.addGreetings = addGreetings = async(req,res) => {

    const { error } = validateAddGreeting(req.body)
    if(error) return res.status(400).send({
        title: "Validation Error",
        message: error.details[0].message,
        success: false
    });

    const greetings = new Greetings(req.body)

    try{
        const insert = await greetings.save()
        if(insert) return res.status(201).send({
            title: "Validation Successfuly",
            message: "Insert Greetings Successfuly",
            success: true
        });
    }catch(error){
       return res.status(500).send(error)
    }

}

module.exports.deleteGreetings = deleteGreetings = async(req,res) => {
    
    try{
        const del = await Greetings.findByIdAndDelete(req.params.id)
        if(del) return res.status(201).send({
            title: "Validation Successfuly",
            message: "Delete Greetings Successfuly",
            success: true
        });
    }catch(error){
       return res.status(500).send(error)
    }
  
}

module.exports.updateGreetings = updateGreetings = async(req,res) => {
    const { error } = validateAddGreeting(req.body)
    if(error) return res.status(400).send({
        title: "Validation Error",
        message: error.details[0].message,
        success: false
    })
    const greetings = await Greetings.findByIdAndUpdate(req.params.id, req.body)
    try{
        const update = await greetings.save()
        if(update) return res.status(201).send({
            title: "Validation Successfuly",
            message: "Update Data Successfuly",
            success: true
        })
       
    }catch(error){
       return res.status(500).send(error)
    }
}

module.exports.countGreetings = countGreetings = async() => {
    return await Greetings.estimatedDocumentCount();
}

module.exports.getAllGreetings = getAllGreetings = async() => {
    return await Greetings.find({});
  }