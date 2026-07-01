import { registerUser,loginUser,getUsers,getUserById,getUserByEmail,getUserByName,updateProfile,deleteUser} from "../services/userService.js";

const createUser = async(req,res) => {
    try{
        const user = await registerUser(req.body);
        res.status(201).json({ message: "User registered successfully", user });    
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
};

const loginUserController = async(req,res) => {
    try{
        const { email, password } = req.body;
        const user = await loginUser(email, password);
        res.status(200).json({ message: "Login successful", user });
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
};

const getAllUsers = async(req,res) => {
    try{
        const users = await getUsers();
        res.status(200).json({ message: "Users retrieved successfully", users });
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            message: "User retrieved successfully",
            user
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const getUserByEmailController = async (req, res) => {
    try{
        const {email} = req.params;
        const user = await getUserByEmail(email);

        if (!user) {
            return res.status(404).json({message: "User not found"});
        }
        res.status(200).json({message: "User retrieved successfully",user});
    } 
    catch (error) {
        res.status(400).json({message: error.message});
    }
};

const getUserByNameController = async (req, res) => {
    try{
        const {userName} = req.params;
        const user = await getUserByName(userName);
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        res.status(200).json({message: "User retrieved successfully",user});
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
};

const updateUserProfile = async (req, res) => {
    try {
        const { email } = req.params;
        const updateUser = await updateProfile(email, req.body);
        res.status(200).json({ message: "User profile updated successfully", updateUser });
    }
    catch(error){
        const statusCode = error.message === "User not found" ? 404 : 400;
        res.status(statusCode).json({ message: error.message });
    }
};

const deleteUserController = async (req, res) => {

    try {

        const { email } = req.params;

        await deleteUser(email);

        res.status(200).json({
            message: "User deleted successfully"
        });

    } catch (error) {

        res.status(404).json({
            message: error.message
        });

    }
};

export { createUser,loginUserController,getAllUsers,getUser,getUserByEmailController,getUserByNameController,updateUserProfile,deleteUserController};