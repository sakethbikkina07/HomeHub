import {createOwner, getOwnerById, getAllOwners, updateOwner, deleteOwner } from "../services/ownerService.js";

const createOwnerController = async (req, res) => { 
    try {
        const owner = await createOwner(req.body);
        res.status(201).json(owner);
        console.log("Owner created successfully:", owner);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
        console.error("Error creating owner:", error);
    }
};

const getOwnerByIdController = async (req, res) => {
    try {
        const owner = await getOwnerById(req.params.id);
        if (!owner) {
            return res.status(404).json({ message: "Owner not found" });
        }
        res.status(200).json(owner);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllOwnersController = async (req, res) => {
    try {
        const owners = await getAllOwners();
        res.status(200).json(owners);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateOwnerController = async (req, res) => {
    try {
        const updatedOwner = await updateOwner(req.params.id, req.body);
        res.status(200).json(updatedOwner);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteOwnerController = async (req, res) => {
    try {
        const deletedOwner = await deleteOwner(req.params.id);
        res.status(200).json(deletedOwner);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export { createOwnerController, getOwnerByIdController, getAllOwnersController, updateOwnerController, deleteOwnerController };