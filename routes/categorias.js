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

router.get('/add', function(req, res,) {
  res.render('categorias-add', {resultado: {}})

 });

router.get('/listar', function(req, res,) {
  db.query('SELECT * FROM categoria', [], function(erro, listagem){
     if (erro){
     res.send(erro);
   }
   res.render('categoria-listas', {resultado: listagem});
   });
 });

 router.post('/add', function(req, res) {
  let categoria = req.body.categoria;

  
  let cmd = 'INSERT INTO categoria (Categoria) VALUES (?);';
  db.query(cmd, [categoria], function(erro, listagem) {
    if (erro) {
      res.send(erro);
    } else {
      res.redirect('/categorias/listar');  // This should be the only response
    }
  });
});


router.get('/edit/:id', function(req, res) {
  let id = req.params.id;

  let cmd = 'SELECT IdCategoria, Categoria FROM categoria WHERE IdCategoria = ?; ';
  db.query(cmd, [id], function(erro, listagem) {
    if (erro) {
      res.send(erro);
    } else {
      res.render('categorias-add', { resultado: listagem [0]});
    }
  });
});

router.put('/edit/:id', function(req, res) {
  let categoria = req.body.plataforma;
  
  let cmd = 'UPDATE categoria SET Categoria = ? WHERE IdCategoria = ?;';
  db.query(cmd, [categoria, id], function(erro, listagem) {
    if (erro) {
      res.send(erro);
    }
      res.redirect(303,'/categorias/listar');
  });
});


router.delete('/delete/:id', function(req, res) {
  let id = req.params.id;
  let cmd = 'DELETE FROM Categoria WHERE IdCategoria = ?;';
  db.query(cmd, [id], function(erro, listagem) {
    if (erro) {
      res.send(erro); 
    } else {
      res.redirect(303, '/categorias/listar');
    }
  });
});

 module.exports = router




