import { Router } from "express";
import path from "path";
import * as url from "url";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";

const router = Router();
const pathRoutes = url.fileURLToPath(new URL(".", import.meta.url));
const views = path.join(pathRoutes, "/../views");

router.get("/", isLoggedIn, (req, res) => {
  res.sendFile(views + "/index.html");
});

export { router as homeRouter };
