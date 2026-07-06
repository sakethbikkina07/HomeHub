import House from "../models/house.js";

const createHouse = async (houseData) => {
    const house = new House({
        title: houseData.title, 
        description: houseData.description, 
        price: houseData.price, 
        location: houseData.location, 
        propertyType: houseData.propertyType, 
        features: houseData.features
    });
    await house.save();
    return house;
};

const getAllHouses = async () => {
    const houses = await House.find();
    return houses;
};

const getHouseById = async (id) => {
    const house = await House.findById(id);
    return house;
};

const updateHouse = async (id, updateData) => {
    const house = await House.findById(id);
    if (!house) {
        throw new Error("House not found");
    }

    const {
        title,
        description,
        price,
        location,
        propertyType,
        features
    } = updateData || {};

    if (title !== undefined) house.title = title;
    if (description !== undefined) house.description = description;
    if (price !== undefined) house.price = price;
    if (location !== undefined) house.location = location;
    if (propertyType !== undefined) house.propertyType = propertyType;
    if (features !== undefined) house.features = features;

    return await house.save();
};

const deleteHouse = async (id) => {
    const house = await House.findByIdAndDelete(id);
    if (!house) {
        throw new Error("House not found");
    }
    return house;
};

const filterHouses = async (filters) => {
    const query = {};

    if (filters.location) {
        query.preferredLocation = filters.location;
    }
    else if (filters.propertyType) {
        query.preferredPropertyType = filters.propertyType;
    }
    else if (filters.budgetPreference) {
        query.budgetPreference = filters.budgetPreference;
    }
    else {
        throw new Error("no houses");
    }
    return await House.find(query);
};

const getAvailableHouses = async () => {
    const houses = await House.find({ available: true });
    return houses;
};

const getHousesByOwner = async (ownerId) => {
    const houses = await House.find({ owner: ownerId });
    return houses;
};

export {
    createHouse,
    getAllHouses,
    getHouseById,
    updateHouse,
    deleteHouse,
    filterHouses,
    getAvailableHouses,
    getHousesByOwner
};