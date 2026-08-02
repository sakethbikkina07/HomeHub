import House from "../models/house.js";
const createHouse = async (houseData) => {
    const house = new House({
        
        houseName: houseData.houseName,
        propertyType: houseData.propertyType,
        location: houseData.location,
        price: houseData.price,
        rating: houseData.rating,
        image: houseData.image,
    });
    await house.save();
    return house;
};

const houseDetails = async (houseData) => {
    const house = new House({
        description: houseData.description,
        bedrooms: houseData.bedrooms,
        bathrooms: houseData.bathrooms,
        areaSqft: houseData.areaSqft,
        features: houseData.features,
        status: houseData.status,
    });
    await house.save();
    return house;
}

const houseOwner = async (ownerData) => {
    const house = new House({
        ownerName: ownerData.ownerName,
        phoneNumber: ownerData.phoneNumber,
        email: ownerData.email,
    });
    await house.save();
    return house;
}

const getAllHouses = async () => {
    const houses = await House.find();
    return houses;
};

const getHouseById = async (id) => {
    const house = await House.findById(id);
    return house;
};

const updateDetails = async (id, updateData = {}) => {
    const house = await House.findById(id);
    if (!house) {
        throw new Error("House not found");
    }
    Object.assign(house, updateData);
    return await house.save();
};

// const updateHouse = async (id, updateData) => {
//     const house = await House.findById(id);
//     if (!house) {
//         throw new Error("House not found");
//     }

//     const {
//         description,
//         rating,
//         bedrooms,
//         bathrooms,
//         areaSqft,
//         features,
//         status,
//     } = updateData || {};

//     if (description !== undefined) house.description = description;
//     if (rating !== undefined) house.rating = rating;
//     if (bedrooms !== undefined) house.bedrooms = bedrooms;
//     if (bathrooms !==undefined) house.bathrooms = bathrooms;
//     if (areaSqft !== undefined) house.areaSqft = areaSqft;
//     if (features !== undefined) house.features = features;
//     if (status !== undefined) house.status = status;
//     return await house.save();
// };

const deleteHouse = async (id) => {
    const house = await House.findByIdAndDelete(id);
    if (!house) {
        throw new Error("House not found");
    }
    return house;
};

const getAvailableHouses = async (status) => {
    const houses = await House.find({ status: status }); 
    return houses;
};

export {
    createHouse,
    houseDetails,
    houseOwner,
    getAllHouses,
    getHouseById,
    updateDetails,
    deleteHouse,
    getAvailableHouses,
};