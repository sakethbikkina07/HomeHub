import { createAdmin, deleteAdmin, updateAdmin} from "../services/adminService.js";

const createAdminController = async (req, res) => {
    try {
        const { adminName, email, password } = req.body;
        const admin = await createAdmin({ adminName, email, password });
        res.status(201).json(admin);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// const getDashboardDataController = async (req, res) => {
//     try {
//         const dashboardData = await getDashboardData();
//         res.status(200).json(dashboardData);
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// const getAllUsersController = async (req, res) => {
//     try {
//         const users = await getAllUsers();
//         res.status(200).json(users);
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// const getAllOwnersController = async (req, res) => {
//     try {
//         const owners = await getAllOwners();
//         res.status(200).json(owners);
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// const getAllHousesController = async (req, res) => {
//     try {
//         const houses = await getAllHouses();
//         res.status(200).json(houses);
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

const deleteAdminController = async (req, res) => {
    try {
        const deletedAdmin = await deleteAdmin(req.params.email);
        res.status(200).json(deletedAdmin);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// const deleteOwnerController = async (req, res) => {
//     try {
//         const deletedOwner = await deleteOwner(req.params.email);
//         res.status(200).json(deletedOwner);
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// const deleteHouseController = async (req, res) => {
//     try {
//         const deletedHouse = await deleteHouse(req.params.id);
//         res.status(200).json(deletedHouse);
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

const updateAdminController = async (req, res) => {
    try {
        const updatedAdmin = await updateAdmin(req.params.id, req.body);
        res.status(200).json(updatedAdmin);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export { createAdminController, deleteAdminController, updateAdminController };