import express from "express";
import { moviesRouter } from "./routes/movies.js";

const app = express();
app.use(express.json());
app.use("/api", moviesRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API démarrée sur http://localhost:${PORT}`);
});
