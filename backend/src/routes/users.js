const Router = require('koa-router');
const { User } = require('../models');

const router = new Router();

// Creación de Usuario
router.post('/', async (ctx) => {
  try {
    const { username } = ctx.request.body;
    const user = await User.create({ username });
    ctx.status = 201;
    ctx.body = user;
  } catch (error) {
    ctx.status = 400;
    ctx.body = { error: error.message };
    console.log(error)
  }
});

// Listado de Usuarios
router.get('/', async (ctx) => {
  try {
    const users = await User.findAll();
    ctx.body = users;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: error.message };
    console.log(error)
  }
});

// Detalle de Usuario
router.get('/:username', async (ctx) => {
  try {
    const { username } = ctx.params;
    const user = await User.findOne({ where: { username } });
    if (user) {
      ctx.body = user;
    } else {
      ctx.status = 404;
      ctx.body = { error: 'User not found' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: error.message };
    console.log(error)
  }
});

module.exports = router