import {createUser,loginUser,getUser,getUserById,updateUser,deleteUser,getUserProfile,getCount,incrementSavedCount,incrementViewsCount,incrementContactCount,decrementSavedCount} from "../services/userService.js";

const createUserController = async (req, res) => {
    try {
        const { userName, email, password, confirmPassword } = req.body;
        const newUser = await createUser({ userName, email, password, confirmPassword });
        res.status(201).json(newUser);
    } 
    catch (error) {
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

const getUserController = async (req, res) => {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getUserByIdController = async (req, res) => {
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

const getHouseCount = async (req, res) => {
  try {
    const { houseId } = req.params;

    const data = await getCount(houseId);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const increaseSaved = async (req, res) => {
  try {
    const { houseId } = req.body;

    const data = await incrementSavedCount(houseId);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const decreaseSaved = async (req, res) => {
  try {
    const { houseId } = req.body;

    const data = await decrementSavedCount(houseId);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const increaseViews = async (req, res) => {
  try {
    const { houseId } = req.body;

    const data = await incrementViewsCount(houseId);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const increaseContacts = async (req, res) => {
  try {
    const { houseId } = req.body;

    const data = await incrementContactCount(houseId);

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export { 
    createUserController, 
    loginUserController, 
    getUserController, 
    getUserByIdController, 
    updateUserProfile, 
    deleteUserController, 
    getUserByEmailController,
    getHouseCount,
    increaseSaved,
    decreaseSaved,
    increaseViews,
    increaseContacts
};