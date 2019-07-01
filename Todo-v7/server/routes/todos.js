const router = require('express').Router();
const Todo = require('../models/todo');

// Find All
router.get('/', (req, res) => {
  Todo.findAll()
    .then(todos => res.send(todos))
    .catch(err => res.status(500).send(err));
});

// Find One by id
// router.get('/id/:id', (req, res) => {
//   Todo.findOneByTodoid(req.params.id)
//     .then(todo => {
//       if (!todo) return res.status(404).send({ err: 'Todo not found' });
//       res.send(todo);
//     })
//     .catch(err => res.status(500).send(err));
// });

// Create new todo document
router.post('/', (req, res) => {
  Todo.create(req.body)
    .then(() => Todo.findAll())
    .then(todos => res.send(todos))
    .catch(err => res.status(500).send(err));
});

// Create dummy todo document
router.get('/dummy', (req, res) => {
  const todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];

  Todo.create(todos[0])
    .then(() => Todo.create(todos[1]))
    .then(() => Todo.create(todos[2]))
    .then(() => res.send(todos))
    .catch(err => res.status(500).send(err));
});

// Update All
router.patch('/', (req, res) => {
  Todo.updateAll(req.body)
    .then(() => Todo.findAll())
    .then(todos => res.send(todos))
    .catch(err => res.status(500).send(err));
});

// Update by id
router.patch('/:id([0-9]+)', (req, res) => {
  Todo.updateByTodoid(req.params.id, req.body)
    .then(() => Todo.findAll())
    .then(todos => res.send(todos))
    .catch(err => res.status(500).send(err));
});

// Delete by id
router.delete('/:id([0-9]+)', (req, res) => {
  Todo.deleteByTodoid(req.params.id)
    .then(() => Todo.findAll())
    .then(todos => res.send(todos))
    .catch(err => res.status(500).send(err));
});

// Delete by completed
router.delete('/completed', (req, res) => {
  Todo.deleteByCompleted()
    .then(() => Todo.findAll())
    .then(todos => res.send(todos))
    .catch(err => res.status(500).send(err));
});

module.exports = router;
