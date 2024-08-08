const Router = require('koa-router');
const users = require('./routes/users');
const entries = require('./routes/entries');


const router = new Router();

router.use('/users', users.routes());
router.use('/entries', entries.routes());

router.get('/', async (ctx) => {
    ctx.body = 'Hello world';
});

module.exports = router;