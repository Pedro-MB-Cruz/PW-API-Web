const authenticator1= require('../src/utils/authenticate.js');

module.exports= async (req, res, next) => {
    const accessToken = req.headers['authorization'];
    if (!accessToken) {
        return res.status(401).send('Não esta autorizado');
    }
    try {
        const bearer = accessToken.split(' ');
        const bearerToken = bearer[1];

        const result = await authenticator1.certifyAccessToken(bearerToken);
        req.body.loggeUserName = result.Name;
        return next();   
    }catch(err){
        return res.status(401).send('Não esta autorizado');
    }
    }