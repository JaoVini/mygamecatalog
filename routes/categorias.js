let express = require('express');
let db = require('../utils/db')
let router = express.Router();

router.get('/listagem', function(req, res) {
  let cmd = 'SELECT IdCategoria, Categoria FROM categoria ORDER BY Categoria';
  db.query(cmd, [], function(erro, listagem) {
    if (erro) {
      res.send(erro);
    } else {
      res.json({ resultado: listagem });
    }
  });
});


router.get('/listar', function(req, res,) {
  db.query('SELECT * FROM categoria', [], function(erro, listagem){
     if (erro){
     res.send(erro);
   }
   res.render('categoria-listas', {resultado: listagem});
   });
 });


 module.exports = router




