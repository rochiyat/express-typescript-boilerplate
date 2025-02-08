import { Router } from 'express';
import * as demoController from '../controllers/demo.controller';

const router = Router();

/**
 * @swagger
 * /api/demo:
 *   get:
 *     summary: Get all demo data
 *     description: Mengambil daftar semua data demo
 *     responses:
 *       200:
 *         description: Berhasil mengambil data demo
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 */
router.get('/', demoController.getDemoData);

/**
 * @swagger
 * /api/demo/{id}:
 *   get:
 *     summary: Get demo data by ID
 *     description: Mengambil data demo berdasarkan ID
 *     tags: [Demo]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *         description: ID of the demo data
 *     responses:
 *       200:
 *         description: Berhasil mengambil data demo
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 */
router.get('/:id', demoController.getDemoDataById);

export default router;
