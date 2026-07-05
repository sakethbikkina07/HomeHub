import User from "../models/user.js";

const createUser = async (userData) => {
    const user = new User(userData);
    await user.save();
    return user;
};

const loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }   
    else if (user.password !== password) {
        throw new Error("Invalid email or password");
    }
    return user;
};