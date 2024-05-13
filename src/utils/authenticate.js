const jwt=require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

exports.generateAccessToken = information =>
    jwt.sign(information, secret, { expiresIn: '1d' });

exports.certifyAccessToken = token =>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token, secret, (err, decode) => {
            if (err) {
                reject(err);
            }
            resolve(decode);
        });
    }) 
}