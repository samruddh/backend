const { set } = require("mongoose");
const Got = require("../models/got");
const { where } = require("../models/got");

exports.list = (req, res)=>{
    
    Got.find((err, data)=>{
        if(err){
            res.json(err);
        }
        else{
            var a =[];
            for(let i=0; i<data.length; i++)
            {
                a.push(data[i].location);
                var uni=[...new Set(a)]
            }
            res.json(uni);
        }
    });
}

exports.count = (req, res)=>{
    
    Got.find((err, data)=>{
        if(err){
            res.json(err);
        }
        else{
           var last = data.length;
            res.json(last);
        }
    });
}

exports.search = (req, res)=>{
    var temp={};
    try{
        const query = {}
        if(req.query && req.query.king){
            query.attacker_king= req.query.king
        }
        if(req.query && req.query.location){
            query.location= req.query.location
        }

        if(req.query && req.query.type){
            query.battle_type= req.query.type
        }

        Got.find(query)
        .exec((err, data)=>{
        if(err){
            res.json(err);
        }
        else{
            temp.Attacker=data;
           
        }
    });
    }
    catch{(e)=>{
        // error condition
        res.send({})
    } }

    try{
        const query = {}
        if(req.query && req.query.king){
            query.defender_king= req.query.king
        }
        if(req.query && req.query.location){
            query.location= req.query.location
        }

        if(req.query && req.query.type){
            query.battle_type= req.query.type
        }

        Got.find(query)
        .exec((err, data)=>{
        if(err){
            res.json(err);
        }
        else{
            temp.Defender=data;
        if(req.query && req.query.king){
            res.json(temp);
            
        }
        else if(req.query.location){
            res.json(temp.Attacker);
        }
        }
    });
    }
    catch{(e)=>{
        // error condition
        res.send({})
    } }
        var temp={};
}


