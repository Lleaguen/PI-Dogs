const { Router } = require('express');
const { getAllDogs, getDBInfoDog, getApiInfoDog  } = require('../Controllers/Controllers')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Dog, Temperament} = require('../db')
const router = Router();
const axios = require('axios');
const {Sequelize, Model} = require('sequelize');
const e = require('express');


// Configurar los routers

router.get('/dogs', async (req,res) => { 
        const name = req.query.name
        const allDogs = await getAllDogs()
        try{
            if(name) {
                const dogSelected = allDogs.filter((dog) => dog.name.toLowerCase().includes(name.toLowerCase()))
                if (dogSelected.length){
                    return res.status(200).send(dogSelected)
                } else {
                    return res.status(404).send({error: 'The dog is at the park'})
                }
            } else {
                return res.status(201).json(allDogs)
            }
        } catch(error){
            res.status(404).send({error: 'The dog is at the park'})
        }
    })
    
    


    router.get('/dogs/:idRaza', async (req, res) => {
        const { idRaza } = req.params
        const dogsDB = await getDBInfoDog();
        const dogsAPI= await getApiInfoDog();
        try {
                const dogSelectApi = dogsAPI.filter((dog) => dog.id === Number(idRaza));
                const dogSelectDB = dogsDB.filter((dog) => dog.id === idRaza);
                
                if (dogSelectApi.length){
                    return res.status(200).send(dogSelectApi)
                }
                return res.status(200).json([{
                    name:dogSelectDB[0].dataValues.name,
                    height_min:dogSelectDB[0].dataValues.height_min,
                    height_max:dogSelectDB[0].dataValues.height_max,
                    weight_min:dogSelectDB[0].dataValues.weight_min,
                    weight_max:dogSelectDB[0].dataValues.weight_max,
                    life_span:dogSelectDB[0].dataValues.life_span,
                    image:dogSelectDB[0].dataValues.image,
                    temperament:dogSelectDB[0].dataValues.temperaments

                }])
        } catch (error) {
            return res.status(404).send({error: 'asdasd'})
        }
    });

    
    router.get('/temperaments', async (req,res) => {
     try {
            const api = await axios.get('https://api.thedogapi.com/v1/breeds')
            const perros = await api.data.map (el => el.temperament)
            let perrosSplit = await perros.join().split(',')
            let perrosTrim = await perrosSplit.map(e => e.trim())
            await perrosTrim.forEach( async (e) => {
                if(e.length > 0){
                    await Temperament.findOrCreate({
                        where : {name : e}
                    })
                }
            })
            const allTemperament = await Temperament.findAll()
            return res.status(200).json(allTemperament)
        }catch (error){
             res.status(404).send({error: 'There are not temperaments'})
         }
        })
        router.delete('/dogs/:id', async (req,res) => { 
            let { id } = req.params;
             try{
                 await Dog.destroy({
                     where: {id: id}
                 })
                 res.send('The dog was delete')
            } catch(error){
                 res.send({error:"The dog wasn't delete"})
           }
        })
    router.post('/dogs', async (req,res) => {
        // try{
            let {
                name,
                height_min,
                height_max,
                weight_min,
                weight_max,
                life_span,
                createdInDb,
                temperament,
                image
            } = req.body;
            
            const dogChecked = await Dog.findOne({
                where: { name: name }
            })
            if(dogChecked) {
                return res.status(404).send('The dog already exist')
            } else {
                let DogCreated = await Dog.create({
                    name,
                    height_min,
                    height_max,
                    weight_min,
                    weight_max,
                    life_span,
                    image,
                    createdInDb
                })
                
                let tempDeDB = await Temperament.findAll({
                    where: {name: temperament}
                }) 
                DogCreated.addTemperament(tempDeDB)
                return res.status(200).send('The dog was created')
            }
        })

router.patch('dogs/:id', async (req, res) => {
    /*const { id } = req.params;
    const { name: name, height_max: height_max, height_min: height_min, weight_max:weight_max, weight_min:weight_min, image:image } = req.body;
    try{
        await Dog.upsert({ name, height_max, height_min, weight_max, weight_min, image }, { where:  { id: id} });
        return res.send("The dog was updated");
       } catch(error){
            res.send("The dog wasn't update")
       }*/
       const { id } = req.params;
       const { name, height_max, height_min, weight_max, weight_min,n, temperaments } = req.body;
      
       const dogCheck =   await Dog.findOne({
               where: { id: id } 
       });
        if(!dogCheck){
            return res.send("The dog is not exist")
        } else{
        let editDog = await Dog.update({
            name,
            height_min,
            height_max,
            weight_min,
            weight_max,
        });

        const pushDog = await Temperament.findAll({
            where:{
                name: temperaments,
            }
        })
        await editDog.addDog(pushDog);
        return res.send("The dog was updated")
    }}
)

router.get('/breedGroups' , async (req, res) => {
    try {
        const everyDog = await getAllDogs();
    const everyBreedGroup = everyDog?.map((dog) => {
        if (!dog.breed_group) {
            "No info"
        }else { return dog.breed_group }
    });
    const eachBreedGroup = [...new Set(everyBreedGroup.flat())]
    res.status(200).json(eachBreedGroup.sort())
    } catch (error) {
        console.log(error, "Error on breeds route")
    }
});

router.get('/breedGroup' , async (req, res) => {
    const breedGroup = req.query.breedGroup;
    const everyDog = await getAllDogs();
    const dogSearchResult = everyDog.filter((dog) => {
        if(breedGroup === 'All') return everyDog
        else if (dog.breed_group !== undefined) { return (dog.breed_group.toLowerCase()).includes(breedGroup.toLowerCase()) }
    });
    res.status(200).json(dogSearchResult)
});


module.exports = router;