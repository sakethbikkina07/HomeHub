import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; 
import userRoutes from "./routes/userRoute.js";
import adminRoutes from "./routes/adminRoute.js";
import ownerRoutes from "./routes/ownerRoute.js";
import houseRoutes from "./routes/houseRoute.js";
import wishlistRoutes from "./routes/wishlistRoute.js";
import countRoutes from "./routes/countRoute.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/owners", ownerRoutes);

app.use("/api/houses", houseRoutes);

app.use("/api/wishlist", wishlistRoutes);

app.use("/api/count",countRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});