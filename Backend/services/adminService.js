import Admin from "../models/admin.js";

const createAdmin = async (adminData) => {
    const existingAdmin = await Admin.findOne({ email: adminData.email });
    if (existingAdmin) {
        throw new Error("Admin with this email already exists");
    }
    const admin = new Admin({
        userName: adminData.userName,
        email: adminData.email,
        password: adminData.password
    });
    await admin.save();
    return admin;
};

const getDashboardData = async () => {
    const totalUsers = await Admin.countDocuments();
    const totalHouses = await Admin.countDocuments();
    const totalOwners = await Admin.countDocuments();
    return {
        totalUsers,
        totalHouses,
        totalOwners
    };
};

const getAllUsers = async () => {
    const users = await Admin.find();
    return users;
};

const getAllOwners = async () => {
    const owners = await Admin.find();
    return owners;
};

const getAllHouses = async () => {
    const houses = await Admin.find();
    return houses;
};

const deleteUser = async (email) => {
    const user = await Admin.findOneAndDelete({ email });
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};

const deleteOwner = async (email) => {
    const owner = await Admin.findOneAndDelete({ email });
    if (!owner) {
        throw new Error("Owner not found");
    }
    return owner;
};

const deleteHouse = async (id) => {
    const house = await Admin.findByIdAndDelete(id);
    if (!house) {
        throw new Error("House not found");
    }
    return house;
};

const updateHouses = async (id, updateData) => {
    const house = await Admin.findById(id); 
    if (!house) {
        throw new Error("House not found");
    }
    Object.assign(house, updateData);
    await house.save();
    return house;
};

export { createAdmin, getDashboardData, getAllUsers, getAllOwners, getAllHouses, deleteUser, deleteOwner, deleteHouse, updateHouses };