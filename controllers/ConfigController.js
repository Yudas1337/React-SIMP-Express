const Configs = require('../models/ConfigModel')
const { validateConfigs } = require('../validation/validation')

module.exports.updateConfigs = updateConfigs = async(req,res) => {
    const { error } = validateConfigs(req.body)
    if(error) return res.status(400).send({
        title: "Validation Error",
        message: error.details[0].message,
        success: false
    })
    const configs = await Configs.findByIdAndUpdate(req.params.id, req.body)
    try{
        const update = await configs.save()
        if(update) return res.status(201).send({
            title: "Validation Successfuly",
            message: "Update Data Successfuly",
            success: true
        })
       
    }catch(error){
       return res.status(500).send(error)
    }
}

module.exports.getConfigs = getConfigs = async() => {
    return await Configs.find({});
  }