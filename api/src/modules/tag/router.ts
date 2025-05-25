import { Router } from "express";
import {
  CreateTagController,
  GetTagsController,
  GetTagController,
  UpdateTagController,
  DeleteTagController,
} from "./controller";
import { CreateTagDto, UpdateTagDto } from "./dto";
import { validate } from "src/middleware/validation";
const router = Router();

/**
 * @swagger
 * /tags:
 *   post:
 *     summary: Create a new tag
 *     tags: [Tags]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tag created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", validate(CreateTagDto), CreateTagController);

/**
 * @swagger
 * /tags:
 *   get:
 *     summary: Get all tags
 *     tags: [Tags]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of tags
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/", GetTagsController);

/**
 * @swagger
 * /tags/{id}:
 *   get:
 *     summary: Get a tag by ID
 *     tags: [Tags]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tag details
 *       404:
 *         description: Tag not found
 */
router.get("/:id", GetTagController);

/**
 * @swagger
 * /tags/{id}:
 *   put:
 *     summary: Update a tag
 *     tags: [Tags]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tag updated successfully
 *       404:
 *         description: Tag not found
 */
router.put("/:id", validate(UpdateTagDto), UpdateTagController);

/**
 * @swagger
 * /tags/{id}:
 *   delete:
 *     summary: Delete a tag
 *     tags: [Tags]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tag deleted successfully
 *       404:
 *         description: Tag not found
 */
router.delete("/:id", DeleteTagController);

export default router;
