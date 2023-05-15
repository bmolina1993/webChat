import { Router } from "express";
import { homeRouter } from "./home.router.js";

export const routerApi = (app) => {
  const router = Router();
  app.use("/webchat", router);

  router.use("/", homeRouter);
};
