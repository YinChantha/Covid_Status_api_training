import express from "express";
import { createstatus, deletestatus, getstatus, getstatuss, updatestatus } from "../controller/status.js";
const router = express.Router();

// All routes in here starting with status
router.get('/', getstatuss );
router.post('/', createstatus );
router.get('/:id', getstatus);
router.delete('/:id', deletestatus);
router.patch('/:id', updatestatus );

export default router;

