import {Router} from "express"
import { getUsers, createUser, deleteUser } from "../controllers/users.controller";

const router = Router();
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Создать пользователя
 *     description: Добавляет нового пользователя в систему
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [username, email, password]
 *             properties:
 *               username:
 *                 type: string
 *                 minLength: 3
 *                 maxLength: 30
 *                 example: "Кто-то там"
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
// Добавить пользователя
router.post("/", createUser);
/**
 * @swagger
 *  /users:
 *    get:
 *      summary: Получить список пользователей
 *      description: Возвращает список пользователей
 *      tags: [Users]
 *      responses:
 *        201: 
 *          description: Успешный ответ
 *          content: 
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: string
 *                      example: 67f4c70441b7447c466a53ab
 *                    username:
 *                      type: string
 *                      example: Никто
 *                    email:
 *                      type: string
 *                      example: nothing.@gmail.com
 *        500:
 *         description: Ошибка сервера. Не удалось получить данные.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal Server Error"
 */
// Получить всех пользователей
router.get("/", getUsers);
/**
 * @swagger
 * /users:
 *   delete:
 *     summary: Удалить пользователя
 *     description: Удаляет пользователя по ID
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [userId]
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "507f1f77bcf86cd799439011"
 *     responses:
 *       200:
 *         description: Успешное удаление
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User deleted successfully"
 *       404:
 *         description: Пользователь не найден
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "User not found"
 *       500:
 *         description: Ошибка сервера
 */
// Удалить пользователя
router.delete("/", deleteUser);
export default router;