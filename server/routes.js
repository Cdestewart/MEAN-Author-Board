const {addAuthor, home, edit,updateAuthor,deleteAuthor} = require("./controller.js");

function router(app){
    app.get('/api/author/:id',edit),
    app.get('/api/author',home),
    app.post('/api/author',addAuthor),
    app.put('/api/author/:id',updateAuthor),
    app.delete('/api/author/:id',deleteAuthor)
}

module.exports = router;