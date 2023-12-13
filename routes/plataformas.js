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


router.delete('/delete/:id', function(req, res) {
  let id = req.params.id;
  let cmd = 'DELETE FROM plataformas WHERE IdPlataforma = ?;';
  db.query(cmd, [id], function(erro, listagem) {
    if (erro) {
      res.send(erro); 
    } else {
      res.redirect(303, '/plataformas/listar');
    }
  });
});



router.get('/edit/:id', function(req, res) {
  let id = req.params.id;

  let cmd = 'SELECT IdPlataforma, NoPlataforma FROM plataformas WHERE IdPlataforma = ?; ';
  db.query(cmd, [id], function(erro, listagem) {
    if (erro) {
      res.send(erro);
    } else {
      res.render('plataformas-add', { resultado: listagem [0]});
    }
  });
});

router.put('/edit/:id', function(req, res) {
  let plataforma = req.body.plataforma;
  
  let cmd = 'UPDATE plataformas SET NoPlataforma = ? WHERE IdPlataforma = ?;';
  db.query(cmd, [plataforma, id], function(erro, listagem) {
    if (erro) {
      res.send(erro);
    }
      res.redirect(303,'/plataformas/listar');
  });
});




module.exports = router;