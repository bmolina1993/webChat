import "dotenv/config";
import express from "express";
import cors from "cors";
import { createServer } from "http";
import { realtimeServer } from "./realTimeServer.js";
import path from "path";
import * as url from "url";
import { routerApi } from "./routes/index.js";
import cookieParser from "cookie-parser";

const app = express();
const httpServer = createServer(app);
const pathSrc = url.fileURLToPath(new URL(".", import.meta.url));
const PORT = process.env.PORT || 3001;

app.use(cors());
// Settings
app.set("views", path.join(pathSrc, "views"));
app.use(cookieParser());

// Routes
routerApi(app);

// Public
app.use(express.static(path.join(pathSrc, "public")));

//levanta servidor express
httpServer.listen(PORT, () => {
  //console.log(`Server running at: http://localhost:${PORT}/webchat/`);
  console.log(`Server running at: http://localhost:${PORT}/`);
});

// Llama servidor Socket.io
realtimeServer(httpServer);
