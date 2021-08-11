const jwt = require('jsonwebtoken')

module.exports.generateToken = generateToken = (user) => {
    return jwt.sign({
        _id: user._id,
        username:user.username,
        email: user.email
    }, process.env.JWT_SECRET,{ expiresIn: '60m' })
}

module.exports.verifyToken = verifyToken = (req,res) => {
    try{
        const bearerToken = req.headers['authorization']
        if(typeof bearerToken !== 'undefined'){
            const bearer = bearerToken.split(' ')
            const token = bearer[1]
            try{
                const verified = jwt.verify(token,process.env.JWT_SECRET)
                if(verified){
                    return res.status(200).send({
                        error: true,
                        message: 'Auth Token is Valid',
                        status: 200
                      })
                }
            }catch(error){
                return res.status(403).send({
                    error: true,
                    message: 'Auth Token is Invalid',
                    status: 403
                  })
            }
        } else{
           return res.status(403).send({
                error: true,
                message: 'Auth Token is missing',
                status: 403
              })
        }
    }catch(error){
       return res.status(500).send(error)
    }
}