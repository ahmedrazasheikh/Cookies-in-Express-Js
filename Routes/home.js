import express from 'express';
const router = express.Router()
import {setCookie,deleteCookie,getCookie} from '../Controller/home.js'
console.log(Favour)
router.get('/getCookie' , getCookie)
router.get('/deleteCookie' , deleteCookie)
router.get('/setCookie' , setCookie)
export default router