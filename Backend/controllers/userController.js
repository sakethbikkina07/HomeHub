import {createUser,loginUser,getUserById,updateUser,deleteUser,getUserProfile} from "../services/userService.js";

const createUserController = async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await loginUser(email, password);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateUserProfile = async (req, res) => {
    try {
        const updatedUser = await updateUser(req.params.email, req.body);
        res.status(200).json(updatedUser);
    }
    catch(error){
        res.status(400).json({ message: error.message });   
    }
};

const deleteUserController = async (req, res) => {
    try{
        const deletedUser = await deleteUser(req.params.email);
        res.status(200).json(deletedUser);
    }
    catch(error){
        res.status(400).json({ message: error.message });   
    }
};

const getUserByEmailController = async (req, res) => {
    try {
        const user = await getUserProfile(req.params.email);
        res.status(200).json(user);
    }
    catch(error){
        res.status(400).json({ message: error.message });   
    }
};

export { createUserController, loginUserController, getUser, updateUserProfile, deleteUserController, getUserByEmailController };