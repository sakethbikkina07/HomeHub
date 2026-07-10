import Admin from "../models/admin.js";
import User from "../models/user.js";   
import Owner from "../models/owner.js"; 
import House from "../models/house.js"; 

const createAdmin = async (adminData) => {
    const existingAdmin = await Admin.findOne({ email: adminData.email });
    if (existingAdmin) {
        throw new Error("Admin with this email already exists");
    }
    const admin = new Admin({
        adminName: adminData.adminName,
        email: adminData.email,
        password: adminData.password
    });
    await admin.save();
    return admin;
};

const getDashboardData = async () => {
    const totalUsers = await User.countDocuments();
    const totalHouses = await House.countDocuments();
    const totalOwners = await Owner.countDocuments();
    return {
        totalUsers,
        totalHouses,
        totalOwners
    };
};

const getAllUsers = async () => {
    return await User.find(); 
};

const getAllOwners = async () => {
    return await Owner.find(); 
};

const getAllHouses = async () => {
    return await House.find(); 
};

const deleteUser = async (email) => {
    const user = await User.findOneAndDelete({ email }); 
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};

const deleteOwner = async (email) => {
    const owner = await Owner.findOneAndDelete({ email }); 
    if (!owner) {
        throw new Error("Owner not found");
    }
    return owner;
};

const deleteHouse = async (id) => {
    const house = await House.findByIdAndDelete(id); 
    if (!house) {
        throw new Error("House not found");
    }
    return house;
};

const updateHouses = async (id, updateData) => {
    const house = await House.findById(id); 
    if (!house) {
        throw new Error("House not found");
    }
    Object.assign(house, updateData);
    await house.save();
    return house;
};

export { createAdmin, getDashboardData, getAllUsers, getAllOwners, getAllHouses, deleteUser, deleteOwner, deleteHouse, updateHouses };