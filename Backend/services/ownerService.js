import Owner from "../models/owner.js";

const createOwner = async (ownerData) => {
    const existingOwner = await Owner.findOne({ email: ownerData.email });
    if (existingOwner) {
        throw new Error("Owner with this email already exists");
    }

    const owner = new Owner({
        ownerName: ownerData.ownerName,
        email: ownerData.email,
        contact: ownerData.contact,
        location: ownerData.location,
        sellingPropertyType: ownerData.sellingPropertyType,
        budget: ownerData.budget
    });

    await owner.save();
    return owner;
};

const getOwnerById = async (id) => {
    const owner = await Owner.findById(id);
    return owner;
}

const getAllOwners = async () => {
    const owners = await Owner.find();
    return owners;
};

const updateOwner = async (email, updateData) => {
    const owner = await Owner.findOne({ email });
    if (!owner) {
        throw new Error("Owner not found");
    }
    Object.assign(owner, updateData);
    await owner.save();
    return owner;
};

const deleteOwner = async (email) => {
    const owner = await Owner.findOneAndDelete({ email }); 

    if (!owner) {
        throw new Error("Owner not found");
    }
    return owner;
};

export { createOwner, getOwnerById, getAllOwners, updateOwner, deleteOwner };