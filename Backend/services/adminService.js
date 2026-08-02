import Admin from "../models/admin.js";
// import User from "../models/user.js";   
// import Owner from "../models/owner.js"; 
// import House from "../models/house.js"; 

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

// const getDashboardData = async () => {
//     const totalUsers = await User.countDocuments();
//     const totalHouses = await House.countDocuments();
//     const totalOwners = await Owner.countDocuments();
//     return {
//         totalUsers,
//         totalHouses,
//         totalOwners
//     };
// };

// const getAllUsers = async () => {
//     return await User.find(); 
// };

// const getAllOwners = async () => {
//     return await Owner.find(); 
// };

// const getAllHouses = async () => {
//     return await House.find(); 
// };

const deleteAdmin = async (email) => {
    const admin = await Admin.findOneAndDelete({ email }); 
    if (!admin) {
        throw new Error("Admin not found");
    }
    return admin;
};

// const deleteOwner = async (email) => {
//     const owner = await Owner.findOneAndDelete({ email }); 
//     if (!owner) {
//         throw new Error("Owner not found");
//     }
//     return owner;
// };

// const deleteHouse = async (id) => {
//     const house = await House.findByIdAndDelete(id); 
//     if (!house) {
//         throw new Error("House not found");
//     }
//     return house;
// };

const updateAdmin = async (id, updateData) => {
    const admin = await Admin.findById(id);
    if (!admin) {
        throw new Error("Admin not found");
    }
    Object.assign(admin, updateData);
    await admin.save();
    return admin;
};

export { createAdmin, deleteAdmin, updateAdmin };