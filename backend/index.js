import express from "express";
import cors from "cors";
import userRoutes from "./routes/usersRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", userRoutes);

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`Server conectado na porta ${PORT}`);
});
