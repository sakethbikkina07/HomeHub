import {createHouse,getAllHouses,getHouseById,updateHouse,deleteHouse,filterHouses,getAvailableHouses,getHousesByOwner} from "../services/houseService.js";

const createHouseController = async (req, res) => {
    try {
        const house = await createHouse(req.body);
        res.status(201).json(house);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllHousesController = async (req, res) => {
    try {
        const houses = await getAllHouses();
        res.status(200).json(houses);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getHouseByIdController = async (req, res) => {
    try {
        const house = await getHouseById(req.params.id);
        if (!house) {
            return res.status(404).json({ message: "House not found" });
        }
        res.status(200).json(house);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateHouseController = async (req, res) => {
    try {
        const updatedHouse = await updateHouse(req.params.id, req.body);
        res.status(200).json(updatedHouse);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteHouseController = async (req, res) => {
    try {
        const deletedHouse = await deleteHouse(req.params.id);
        res.status(200).json(deletedHouse);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// const filterHousesController = async (req, res) => {
//     try {
//         const filters = req.query;
//         const houses = await filterHouses(filters);
//         res.status(200).json(houses);
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

const getAvailableHousesController = async (req, res) => {
    try {
        const houses = await getAvailableHouses();
        res.status(200).json(houses);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getHousesByOwnerController = async (req, res) => {
    try {
        const ownerId = req.params.ownerId;
        const houses = await getHousesByOwner(ownerId);
        res.status(200).json(houses);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export { createHouseController, getAllHousesController, getHouseByIdController, updateHouseController, deleteHouseController, getAvailableHousesController, getHousesByOwnerController };