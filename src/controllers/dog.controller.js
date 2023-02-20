const Dog  = require('./../models/dog.model');
const Status = require('./../configs/StatusCodes');

const list = (req, res) => {
    Dog.findAll({}).then((d)=>{
        if(d == null || d == undefined)
            res.status(Status.not_found.code).json(Status.not_found);
        res.status(Status.success.code).json(d);
    }).catch((e)=>{
        res.status(Status.server_error.code).json(e);
    })
//    const dogs = await dog.findAll();
//    if(dogs == null || dogs == undefined)
//        res.status(Status.not_found.code).json(Status.not_found);
}

const get = (req, res) => {
  if(req.params.id == undefined || req.params.id == null)
      res.status(Status.bad_request.code).json(Status.bad_request);
  Dog.findAll({where: {id: req.params.id}}).then((dog)=>{
      if(dog == null || dog == undefined || dog.length < 1)
          res.status(Status.not_found.code).json(Status.not_found);
      res.status(Status.success.code).json(dog);
  }).catch((e)=>{
      res.status(Status.server_error.code).json(Status.server_error);
  })
}

const edit = (req, res) => {
    Dog.update(req.body, {where: {lastName: req.params.id}}).then((dog)=>{
        res.status(Status.success.code).json(dog);
    }).catch((e)=>{
        res.status(Status.server_error.code).json(Status.server_error);
    });
//    const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
//    console.log("Jane's auto-generated ID:", jane.id);
}

const create = (req,res)=>{
   if(validateDog(req.body)) 
       return res.status(Status.bad_request.code).json(Status.bad_request);
    Dog.create(req.body).then((dog)=>{
        return res.status(Status.created.code).json(dog);
    }).catch((e)=>{
        return res.status(Status.server_error.code).json({"status":Status.server_error,"err":e});
    })
}


const remove = (req, res) => {
    Dog.destroy({where: {id: req.params.id}}).then((dog)=>{
         return res.status(Status.success.code).json(dog);
    }).catch((e)=>{
        return res.status(Status.server_error.code).json(Status.server_error);
    });
}

const validateDog = (dog) => {
    return ((dog == null || dog == undefined) ||
            (dog.name == null || dog.name == undefined) ||
            (dog.height_min == null || dog.height_min == undefined) ||
            (dog.height_max == null || dog.height_max == undefined) ||
            (dog.weight_max == null || dog.weight_max == undefined) ||
            (dog.weight_min == null || dog.weight_min == undefined) ||
            (dog.yearsOfLife == null || dog.yearsOfLife == undefined)
           );
}

module.exports = {list,get,edit,create,remove}
