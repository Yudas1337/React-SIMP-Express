const Quotes = require('../models/QuoteModel')
const { validateAddQuote } = require('../validation/validation')


module.exports.addQuotes = addQuotes = async(req,res) => {

    const { error } = validateAddQuote(req.body)
    if(error) return res.status(400).send({
        title: "Validation Error",
        message: error.details[0].message,
        success: false
    });

    const quotes = new Quotes(req.body)

    try{
        const insert = await quotes.save()
        if(insert) return res.status(201).send({
            title: "Validation Successfuly",
            message: "Insert Quote Successfuly",
            success: true
        });
    }catch(error){
       return res.status(500).send(error)
    }

}

module.exports.deleteQuotes = deleteQuotes = async(req,res) => {
    
    try{
        const del = await Quotes.findByIdAndDelete(req.params.id)
        if(del) return res.status(201).send({
            title: "Validation Successfuly",
            message: "Delete Quote Successfuly",
            success: true
        });
    }catch(error){
       return res.status(500).send(error)
    }
  
}

module.exports.updateQuotes = updateQuotes = async(req,res) => {
    const { error } = validateAddQuote(req.body)
    if(error) return res.status(400).send({
        title: "Validation Error",
        message: error.details[0].message,
        success: false
    })
    const quotes = await Quotes.findByIdAndUpdate(req.params.id, req.body)
    try{
        const update = await quotes.save()
        if(update) return res.status(201).send({
            title: "Validation Successfuly",
            message: "Update Data Successfuly",
            success: true
        })
       
    }catch(error){
       return res.status(500).send(error)
    }
}

module.exports.countQuotes = countQuotes = async() => {
    return await Quotes.estimatedDocumentCount();
}

module.exports.getAllQuotes = getAllQuotes = async() => {
    return await Quotes.find({});
  }