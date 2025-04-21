import {Router} from "express"
import { signUp, signIn } from "../controllers/auth.controller";

const router = Router();

/**
 * @swagger
 *   tags:
 *     name: Auth
 *     description: Endpoints for sign-in sign-up
 */

/**
 * @swagger
 * /auth/sign-up:
 *   post:
 *     summary: Register new user
 *     description: Creates new user in DB
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "who.@gmail.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 example: "666"
 *     responses:
 *       201:
 *         description: Пользователь создан
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "507f1f77bcf86cd799439011"
 *                 username:
 *                   type: string
 *                   example: "Никто"
 *                 email:
 *                   type: string
 *                   example: "none.@gmail.com"
 *       400:
 *         description: Неверные данные
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Email is required"
 *       500:
 *         description: Ошибка сервера
 */
router.post("/sign-up", signUp);

/**
 * @swagger
 * /auth/sign-in:
 *   post:
 *     summary: Authenticate user
 *     description: Authenticate user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [username, password]
 *             properties:
 *               username:
 *                 type: string
 *                 minLength: 3
 *                 maxLength: 30
 *                 example: "Кто-то там"
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 example: "666"
 *     responses:
 *       201:
 *         description: Пользователь создан
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "507f1f77bcf86cd799439011"
 *                 username:
 *                   type: string
 *                   example: "Никто"
 *                 email:
 *                   type: string
 *                   example: "none.@gmail.com"
 *       400:
 *         description: Неверные данные
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Email is required"
 *       500:
 *         description: Ошибка сервера
 */
router.post("/sign-in", signIn)

export default router;