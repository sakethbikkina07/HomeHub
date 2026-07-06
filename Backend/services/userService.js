import User from "../models/user.js";

const createUser = async (userData) => {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
        throw new Error("User with this email already exists");
    }
    if(userData.password !== userData.confirmPassword){
        throw new Error("Password do not match");
    }

    const user = new User({
        userName: userData.userName,
        email: userData.email,
        password: userData.password,
    });

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

const getUserById = async (id) => {
    const user = await User.findById(id);
    return user;
};

const updateUser = async (email, updateData) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }

    const {
        phoneNumber,
        preferredLocation,
        preferredPropertyType,
        budgetPreference,
        features
    } = updateData || {};

    if (phoneNumber !== undefined) user.phoneNumber = phoneNumber;
    if (preferredLocation !== undefined) user.preferredLocation = preferredLocation;
    if (preferredPropertyType !== undefined) user.preferredPropertyType = preferredPropertyType;
    if (budgetPreference !== undefined) user.budgetPreference = budgetPreference;
    if (features !== undefined) user.features = features;

    return await user.save();
};

const deleteUser = async (email) => {
    const user = await User.findOneAndDelete({ email });
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};

const getUserProfile = async (email) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};

export {
    createUser,
    loginUser,
    getUserById,
    updateUser,
    deleteUser,
    getUserProfile
};      