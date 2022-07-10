import { Router } from 'express';
import GetByName from './Mangas/GetByName/index';
import PostManga from './Mangas/PostManga/index';
import GetFindAll from './Mangas/GetFindAll/index';
import GetById from './Mangas/GetById/index';
import DeleteById from './Mangas/DeleteById/index';
import FilterByGenre from './Mangas/FilterByGenre/index';
import PostUserCreated from './Users/PostUserCreated/index';
import PostUserinit from './Users/PostUserinit/index';
import GetByIdUser from './Users/GetByIdUser/index'
import PutByIdUser from './Users/PutByIdUser/index'
import PutByIdUserFav from './Users/PutByIdUserFav/index'
import PostProducts from './Products/PostProducts/index';
const router = Router();

router.use('/manga', FilterByGenre)
router.use('/manga', GetFindAll);
router.use('/manga', GetByName);
router.use('/manga', GetById);
router.use('/manga', PostManga);
router.use('/manga', DeleteById);

router.use('/user', PostUserCreated);
router.use('/user', PostUserinit);
router.use('/user', GetByIdUser);
router.use('/user', PutByIdUser);
router.use('/user', PutByIdUserFav);

router.use('/products', PostProducts)





export default router;