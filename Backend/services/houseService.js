import House from "../models/house.js";
const createHouse = async (houseData) => {
    const house = new House({
        ownerId: houseData.ownerId,
        houseName: houseData.houseName,
        propertyType: houseData.propertyType,
        location: houseData.location,
        price: houseData.price,
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
        description,
        rating,
        bedrooms,
        bathrooms,
        areaSqft,
        features,
        status,
    } = updateData || {};

    if (description !== undefined) house.description = description;
    if (rating !== undefined) house.rating = rating;
    if (bedrooms !== undefined) house.bedrooms = bedrooms;
    if (bathrooms !==undefined) house.bathrooms = bathrooms;
    if (areaSqft !== undefined) house.areaSqft = areaSqft;
    if (features !== undefined) house.features = features;
    if (status !== undefined) house.status = status;
    return await house.save();
};

const deleteHouse = async (id) => {
    const house = await House.findByIdAndDelete(id);
    if (!house) {
        throw new Error("House not found");
    }
    return house;
};

// const filterHouses = async (filters) => {
//     const query = {};

//     if (filters.location) {
//         query.preferredLocation = filters.location;
//     }
//     else if (filters.propertyType) {
//         query.preferredPropertyType = filters.propertyType;
//     }
//     else if (filters.budgetPreference) {
//         query.budgetPreference = filters.budgetPreference;
//     }
//     else {
//         throw new Error("no houses");
//     }
//     return await House.find(query);
// };

const getAvailableHouses = async (status) => {
    const houses = await House.find({ status: status }); 
    return houses;
};

const getHousesByOwner = async (ownerId) => {
    const houses = await House.find({ ownerId: ownerId });
    return houses;
};

export {
    createHouse,
    getAllHouses,
    getHouseById,
    updateHouse,
    deleteHouse,
    // filterHouses,
    getAvailableHouses,
    getHousesByOwner
};