import User from "../models/user.js";
import Count from "../models/count.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createUser = async (userData) => {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
        throw new Error("User with this email already exists");
    }
    // if(userData.password !== userData.confirmPassword){
    //     throw new Error("Password do not match");
    // }

    const hashedPassword = userData.password.startsWith("$2")
        ? userData.password
        : await bcrypt.hash(userData.password, 11);

    const user = new User({
        userName: userData.userName,
        email: userData.email,
        password: userData.hashedpassword,
        // confirmPassword: userData.confirmPassword,
    });

    await user.save();
    return user;
};


const loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }   
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        throw new Error("Invalid email or password");
    }
    const token = generateToken(user);
    return token;
};


const generateToken = (user) =>{
    const token = jwt.sign({id:user._id, email:user.email}, process.env.JWT_SECRET, {expiresIn: "1h"});
    return  token;
}


const getUser = async () => {
    const users = await User.find();
    return users;
}

const getUserById = async (id) => {
    const user = await User.findById(id);
    return user;
};

const updateUser = async (email, updateData) => {
    const user = await User.findOne({email});
    if(!user) {
        throw new Error("User not found");
    }
    if (updateData.password) {
        updateData.password = await bcrypt.hash(updateData.password, 11);
    }
     Object.assign(user, updateData);
    return await user.save();
}

// const updateUser = async (email, updateData) => {
//     const user = await User.findOne({ email });
//     if (!user) {
//         throw new Error("User not found");
//     }

//     const {
//         phoneNumber,
//         preferredLocation,
//         preferredPropertyType,
//         budgetPreference,
//         features
//     } = updateData || {};

//     if (phoneNumber !== undefined) user.phoneNumber = phoneNumber;
//     if (preferredLocation !== undefined) user.preferredLocation = preferredLocation;
//     if (preferredPropertyType !== undefined) user.preferredPropertyType = preferredPropertyType;
//     if (budgetPreference !== undefined) user.budgetPreference = budgetPreference;
//     if (features !== undefined) user.features = features;

//     return await user.save();
// };

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

const getCount = async (houseId) => {
  let counter = await Count.findOne({ houseId });

  if (!counter) {
    counter = await Count.create({ houseId });
  }

  return counter;
};

const incrementSavedCount = async (houseId) => {
  return await Count.findOneAndUpdate(
    { houseId },
    { $inc: { savedCount: 1 } },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
};

const incrementViewsCount = async (houseId) => {
  return await Count.findOneAndUpdate(
    { houseId },
    { $inc: { viewsCount: 1 } },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
};

const incrementContactCount = async (houseId) => {
  return await Count.findOneAndUpdate(
    { houseId },
    { $inc: { contactCount: 1 } },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );
};

const decrementSavedCount = async (houseId) => {
  return await Count.findOneAndUpdate(
    { houseId, savedCount: { $gt: 0 } },
    { $inc: { savedCount: -1 } },
    { new: true }
  );
};


export {
    createUser,
    loginUser,
    getUser,
    getUserById,
    updateUser,
    deleteUser,
    getUserProfile,
    getCount,
    incrementSavedCount,
    incrementViewsCount,
    incrementContactCount,
    decrementSavedCount
};      