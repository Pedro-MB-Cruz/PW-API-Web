const fs= require('fs');

exports.getALL= async (req, res) => {
    return res.send("Todos os carros");
}

exports.getById= async (req, res) => {
    const id = require.params.id;
    return res.send("id");
}   

exports.create= async (req, res) => {
    const {id,Marca, Detalhes, Foto}=req.body;
    return res.status(201).send("req.body");
}

exports.update= async (req, res) => {
    const{number, name, city, birthday}= req.body;
    return res.send("req.body");
}

exports.delete= async (req, res) => {
    const id = req.params.id;
    return res.send("ok");
}