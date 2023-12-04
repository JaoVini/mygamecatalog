let express = require('express');
let db = require('../utils/db')
let router = express.Router();


router.get('/listagem', function(req, res) {
  let cmd = 'SELECT IdPlataforma, NoPlataforma FROM plataformas ORDER BY NoPlataforma';
  db.query(cmd, [], function(erro, listagem) {
    if (erro) {
      res.send(erro);
    } else {
      res.json({ resultado: listagem });
    }
  });
});


router.get('/add', function(req, res,) {
  res.render('plataformas-add', {resultado: {}})

 });

router.get('/listar', function(req, res,) {
  db.query('SELECT * FROM plataformas', [], function(erro, listagem){
     if (erro){
     res.send(erro);
   }
   res.render('plataformas-listas', {resultado: listagem});
   });
 });


 
 router.post('/add', function(req, res) {

  let plataforma = req.body.plataforma;  
  let cmd = 'INSERT INTO plataformas (NoPlataforma) VALUES (?);';
  console.log(cmd)
  db.query(cmd, [plataforma], function(erro, listagem) {
    if (erro) {
      res.send(erro);
    } else {
      res.redirect('/plataformas/listar');  // This should be the only response
    }
  });
});




module.exports = router;