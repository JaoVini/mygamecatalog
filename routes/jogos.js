
let express = require('express');
let db = require('../utils/db')
let router = express.Router();

router.get('/listagem', function(req, res) {
  let cmd = 'SELECT NomeJogo, IdJogo, Preço, Categoria, NoPlataforma ';
  cmd += 'FROM tbjogo ';
  cmd += 'INNER JOIN plataformas ON tbjogo.IdPlataforma = plataformas.IdPlataforma ';
  cmd += 'INNER JOIN categoria ON tbjogo.IdCategoria = categoria.IdCategoria ';
  cmd += 'ORDER BY IdJogo';

  db.query(cmd, [], function(erro, listagem) {
    if (erro) {
      res.send(erro);
    } else {
      res.render('jogos-listas', { resultado: listagem });
    }
  });
});


 router.get('/add', function(req, res,) {
  res.render('jogos-add', {resultado: {}})

 });

 router.get('/listar', function(req, res,) {
  db.query('SELECT * FROM categoria', [], function(erro, listagem){
     if (erro){
     res.send(erro);
   }
   res.render('jogos-listas', {resultado: listagem});
   });
 });
 


 
 router.post('/add', function(req, res) {
  let nome = req.body.nome;
  let preço = req.body.preço;
  let categoria = req.body.categoria;
  let plataforma = req.body.plataforma;
  
  let cmd = 'INSERT INTO tbjogo (NomeJogo, Preço ,IdPlataforma, IdCategoria) VALUES (?, ?, ?, ?);';
  db.query(cmd, [nome, preço, categoria, plataforma], function(erro, listagem) {
    if (erro) {
      res.send(erro);
    } else {
      res.redirect('/jogos/listagem');  // This should be the only response
    }
  });
});




router.get('/edit/:id', function(req, res) {
  let id = req.params.id;

  let cmd = 'SELECT NomeJogo, IdJogo, Preço, IdCategoria, IdPlataforma FROM tbjogo WHERE IdJogo = ?; ';
  db.query(cmd, [id], function(erro, listagem) {
    if (erro) {
      res.send(erro);
    } else {
      res.render('jogos-add', { resultado: listagem [0]});
    }
  });
});

router.put('/edit/:id', function(req, res) {
  let id = req.params.id;
  let nome = req.body.nome;
  let preço = req.body.preço;
  let categoria = req.body.categoria;
  let plataforma = req.body.plataforma;
  
  let cmd = 'UPDATE tbjogo SET NomeJogo = ?, Preço = ?, IdPlataforma = ?, IdCategoria = ? WHERE IdJogo = ?;';
  db.query(cmd, [nome, preço, plataforma, categoria, id], function(erro, listagem) {
    if (erro) {
      res.send(erro);
    }
      res.redirect(303,'/jogos/listagem');
  });
});


router.delete('/delete/:id', function(req, res) {
  let id = req.params.id;
  let cmd = 'DELETE FROM tbjogo WHERE IdJogo = ?;';
  db.query(cmd, [id], function(erro, listagem) {
    if (erro) {
      res.send(erro); 
    } else {
      res.redirect(303, '/jogos/listagem');
    }
  });
});


module.exports = router;
