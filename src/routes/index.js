import { Router } from "express";
import { homeRouter } from "./home.router.js";
import { registerRouter } from "./register.router.js";

export const routerApi = (app) => {
  const router = Router();
  //app.use("/webchat", router);
  app.use("/", router);

  router.use("/", homeRouter);
  router.use("/register", registerRouter);
};
