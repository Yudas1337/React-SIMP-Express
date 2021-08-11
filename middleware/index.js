const jwt = require('jsonwebtoken')

module.exports.verifyBearerToken = verifyBearerToken = (req, res, next) => {

    try{
        const bearerToken = req.headers['authorization']
        if(typeof bearerToken !== 'undefined'){
            const bearer = bearerToken.split(' ')
            const token = bearer[1]
            try{
                const verified = jwt.verify(token,process.env.JWT_SECRET)
                if(verified){
                    req.user = verified
                    next();
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

module.exports.verifyApiToken = verifyApiToken = (req, res, next) => {
    try{
        const apiToken = req.headers['api_token']
        if(typeof apiToken !== 'undefined'){
            if(process.env.API_TOKEN === apiToken){
                res.status(200)
                next()
            } else{
                return res.status(403).send({
                    error: true,
                    message: 'Api Token does not match',
                    status: 403
                  })
            }
        } else{
            return res.status(403).send({
                error: true,
                message: 'Api Token is missing',
                status: 403
              })
        }
    }catch(error){
       return res.status(500).send(error)
    }
}