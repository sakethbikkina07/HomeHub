import {
  getCount,
  incrementSavedCount,
  incrementViewsCount,
  incrementContactCount,
  decrementSavedCount,
} from "../services/countService.js";

const getOwnerCount = async (req, res) => {
  try {
    const { ownerId } = req.params;

    const data = await getCount(ownerId);

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
    const { ownerId } = req.body;

    const data = await incrementSavedCount(ownerId);

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
    const { ownerId } = req.body;

    const data = await decrementSavedCount(ownerId);

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
    const { ownerId } = req.body;

    const data = await incrementViewsCount(ownerId);

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
    const { ownerId } = req.body;

    const data = await incrementContactCount(ownerId);

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
  getOwnerCount,
  increaseSaved,
  decreaseSaved,
  increaseViews,
  increaseContacts,
};