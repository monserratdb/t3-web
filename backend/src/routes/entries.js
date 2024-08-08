const Router = require('koa-router');
const { Entry } = require('../models');

const router = new Router();

//COPIAR LINK 

// Creación de Registro (ESTE NO FUNCIONA EN LA PAGINA)
router.post('/', async (ctx) => {
  try {
    const { title, body, date, username } = ctx.request.body;
    const entry = await Entry.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = entry;
  } catch (error) {
    ctx.status = 400;
    ctx.body = { error: error.message };
  }
});

// Listado de Registros
router.get('/', async (ctx) => {
  try {
    // findAll se usaba en la ayudantía, se habló de esto en una issue y no entendí la respuesta en verdad
    const entries = await Entry.findAll();
    ctx.body = entries;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: error.message };
    console.log(error)
  }
});

// Listado de Registros por Usuario
router.get('/user/:username', async (ctx) => {
  try {
    const { username } = ctx.params;
    // Corrige la consulta para usar la columna username en lugar de userId
    const entries = await Entry.findAll({ where: { username } });
    ctx.body = entries;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: error.message };
    console.log(error);
  }
});

// Detalle de una Registro
router.get('/:id', async (ctx) => {
  try {
    const { id } = ctx.params;
    const entry = await Entry.findByPk(id);
    if (entry) {
      ctx.body = entry;
    } else {
      ctx.status = 404;
      ctx.body = { error: 'Entry not found' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: error.message };
    console.log(error)
  }
});

// Actualización de una Registro REVISAR
router.patch('/:id', async (ctx) => {
  try {
    const { id } = ctx.params;
    const { title, body, date, userId } = ctx.request.body;
    const entry = await Entry.findByPk(id);
    if (entry) {
      await entry.update({ title, body, date, userId });
      ctx.body = entry;
    } else {
      ctx.status = 404;
      ctx.body = { error: 'Entry not found' };
      console.log(error)
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: error.message };
  }
});

// Eliminación de una Registro
router.delete('/:id', async (ctx) => {
  try {
    const { id } = ctx.params;
    const entry = await Entry.findByPk(id);
    if (entry) {
      await entry.destroy();
      ctx.status = 204;
    } else {
      ctx.status = 404;
      ctx.body = { error: 'Entry not found' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: error.message };
    console.log(error)
  }
});

module.exports = router;