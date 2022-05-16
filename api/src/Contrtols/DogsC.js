const {Dog, Temperament} = require('../db.js');
const axios = require('axios');
const {KEY_API} = process.env;

const getDogsApi= async ()=>{
    try{
        let array = []
        const apiDogs = await axios.get(`https://api.thedogapi.com/v1/breeds?key=${process.env.KEY_API}`);
        array.push(apiDogs.data);
        // array.flat().length
        const mapDogs = array.flat().map(d=>{
            return{
                id: d.id,
                name: d.name,
                // heightmax: d.heigth[1],
                // heightmin: d.heigth[0],
                height: d.height.metric,
                // weightmax: d.weight[1]?weight[1]:weight[0],
                // weightmin: d.weight[0]?weight[1]:weight[0],
                weight: d.weight.metric,
                life_span: d.life_span,
                image: d.image.url,
                temperament: d.temperament,
                description: d.description
            }
        })
        return mapDogs;

    }
    catch (e) {
        console.log(" el error esta en getDogsApi",e);
    }
}

const getDb = async()=> {
    try{
        const dbinfo = await Dog.findAll({
            include: [
                {
                model:Temperament,
                attributes:["name"],
                through: { attributes:[]}            
            }        
        ]
        })
        return dbinfo;
    }
    catch(e){
        console.log("Error en getDB",e)
    }
}

const GetAll = async()=> {
    try {
    const apiall = await getDogsApi()
    const dball = await getDb()
    const all= apiall.concat(dball)
    return all;
}
catch(e){
    console.log("Error en GetAll",e)

}
}

const GetDogs = async (req, res, next) =>{
    try{
        const {name} = req.query;
        let dogs = await GetAll();
        if(name){
            let dogsName = dogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));
            if(dogsName.length)res.status(200).send(dogsName)
            res.status(404).send("algo salio mal en en la busqueda de nombres")
        }res.status(200).json(dogs)

    }
    catch(e){
        next(e);
        console.log("Algo salio mal en el getDb")
    }
}


const GetDogsId = async(req, res, next)=>{
    try {
        const { id } = req.params;
        const infoMain = await GetAll();
        if(id){
            let idByApi = infoMain.filter(el => el.id == (id));
            idByApi.length ? 
        res.status(200).send(idByApi) :
        res.status(400).send({message: "It was not found"})
        }
    }catch(error) {
        next(error);   
    }
    // try{
    //     const ids = req.params.id;
    //     if(ids.includes("-")){
            
    //         try{
    //             const getDbdogs = await Dog.findOne({
    //                 where:{
    //                     id:ids,
    //                 },
    //                 include:[
    //                     {
    //                         model: Temperament
    //                     }
    //                 ]
    //             },);
    //             const Db ={
    //                 id:getDbdogs.id,
    //                 name:getDbdogs.name,
    //                 image:getDbdogs.image,
    //                 // height:getDbdogs.height,
    //                 // weight:getDbdogs.weight,
    //                 weight_min: parseInt(e.weight.metric.slice(0, 2).trim()),
    //                 weight_max: parseInt(e.weight.metric.slice(4).trim()),
    //                 height_min: parseInt(e.height.metric.slice(0, 2).trim()),
    //                 height_max: parseInt(e.height.metric.slice(4).trim()),
    //                 life_span:getDbdogs.life_span,
    //                 description:getDbdogs.description,
    //                 temperament: getDbdogs.temperament.map((t)=>{
    //                     return{
    //                         name: t.name
    //                     }
    //                 })
    //             }
    //             !getDbdogs? res.status(404).send("el presonaje solicitado no existe"):
    //             res.status(200).json(Db)
    //         }
    //         catch(e){
    //             // res.status(404).send("Algo salio mal en el GetDogsId",e)
    //             next(e)
    //             console.log("error en el GetDogsId", e)
    //         }
    
    //     }else{

    //         try{
    //             if(ids.length <= 3 && ids<=264){
    //                 const dateId = await axios.get(`https://api.thedogapi.com/v1/breeds/${ids}?key=${KEY_API}`);
    //                 let{id, name,image,height,weight,life_span,temperaments}=dateId.data;
    //                 return res.json({
    //                     id,
    //                     name,
    //                     image,
    //                     height,
    //                     weight,
    //                     life_span,
    //                     temperaments
    //                 })

    //             }
    //             res.status(404).send("No existe el perro")
    //             return console.log("No existe el perro")
        
        
    //         }
    //         catch(e){
    //             next(e);
    //             res.status(404).send("algo salio mal al trar el perro de la api")
    //         }
    //     }
    // }
    // catch(e){
    //     console.log(e)
    // }
}

const postDogs= async(req,res,next)=>{
    try{
        const {name, img, temperament, height, weight, life_span } = req.body;
        const createDog = await Dog.create({
            name,
            img,
            height,
            weight,
            life_span
        })
        let TemperamentDb = await Temperament.findAll({
            where:{
                name:temperament
            }
        }) 
        createDog.addTemperament(TemperamentDb);
        res.status(200).send("perro creado con exito")
        console.log(createDog);
    }
    catch(e){
        next(e)
        res.status(404).send("Algo salio mal al cargar perro")
    }
}


module.exports = {
    GetDogs,
    GetDogsId,
    postDogs

};
