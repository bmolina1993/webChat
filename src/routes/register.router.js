import { Router } from "express";
import path from "path";
import * as url from "url";

const router = Router();
const pathRoutes = url.fileURLToPath(new URL(".", import.meta.url));
const views = path.join(pathRoutes, "/../views");

router.get("/", (req, res) => {
  res.sendFile(views + "/register.html");
});

export { router as registerRouter };
