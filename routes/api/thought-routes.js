console.log('Thought controller path:', require.resolve('../../controllers/thought-controller'));
const router = require('express').Router();
const thoughtController = require('../../controllers/thought-controller');
console.log('Thought controller:', thoughtController);

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;