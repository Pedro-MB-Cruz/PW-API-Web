const bcrypt = require('bcryptjs/dist/bcrypt');
const authenticateUtil = require('../src/utils/authenticate.js');

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

exports.signin = async (req, res) => {
    try{
        const {email, password}= req.body;
        const user = await prisma.user.findUnique({
            where:{
                email: email
            }
        })
        if (user){
            var passwordIsValid = password == user.password;
            if (passwordIsValid){
                const accessToken = authenticateUtil.generateAccessToken('id:user.id, name: user.name, isAdmin: user.isAdmin');
                res.status(200).json({name: user.name, token: accessToken});
            }else{
                res.status (401).send('Senha invalida');
        }
    }
}catch(error){
    res.status(401).json({msg: error.message});
}
}

exports.signup = async (req, res) => {
    try {
        const { name, email, password, isAdmin } = req.body;
        await prisma.users.create({
            data: {
                email: email,
                name: name,
                password: password,
                isAdmin: isAdmin
            },
        })
        return this.signin(req, res);
    } catch (error) {
        res.status(401).json({ msg: error.message })
    }
}
