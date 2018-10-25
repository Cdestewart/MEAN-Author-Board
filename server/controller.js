const Authors = require("./models.js")
module.exports = {
    home: (req,res)=>Authors.find({}).sort({Author:1})
                            .then(data=>res.json(data))
                            .catch(errs=>res.json(errs)),
    addAuthor: (req,res)=>Authors.create(req.body)
                            .then(data=>{console.log("ADDING AUTHOR",data);res.json(data)})
                            .catch(errs=>{console.log("ERRS");res.json(errs)}),
    edit: (req,res)=>Authors.find({_id:req.params.id})
                            .then(data=>{console.log("edit Controller");res.json(data)})
                            .catch(errs=>{console.log(errs);res.json(errs)}),
    updateAuthor:(req,res)=>Authors.update({_id:req.params.id},req.body, {runValidators:true} )
                            .then(data=>res.json(data))
                            .catch(errs=>res.json(errs)),
    deleteAuthor:(req,res)=>Authors.remove({_id:req.params.id})
                            .then(data=>res.json(data))
                            .catch(errs=>res.json(errs))
}


