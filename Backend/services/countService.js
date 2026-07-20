import count from "../models/count.js";

const getCount = async (ownerId) => {
  let user = await count.findOne({ ownerId });

  if (!user) {
    user = await count.create({ ownerId });
  }

  return user;
};

const incrementSavedCount = async (ownerId) => {
  return await count.findOneAndUpdate(
    { ownerId },
    { $inc: { savedCount: 1 } },
    { new: true, upsert: true }
  );
};

const incrementViewsCount = async (ownerId) => {
  return await count.findOneAndUpdate(
    { ownerId },
    { $inc: { viewsCount: 1 } },
    { new: true, upsert: true }
  );
};

const incrementContactCount = async (ownerId) => {
  return await count.findOneAndUpdate(
    { ownerId },
    { $inc: { contactCount: 1 } },
    { new: true, upsert: true }
  );
};

const decrementSavedCount = async (ownerId) => {
  return await count.findOneAndUpdate(
    { ownerId },
    { $inc: { savedCount: -1 } },
    { new: true }
  );
};

export {getCount,incrementContactCount,incrementSavedCount,incrementViewsCount,decrementSavedCount};