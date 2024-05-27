// controllers/userController.js
// const User = require('../models/ser');
import User from '../models/user.model.js'

export const makeStudentRepresentative = async (req, res) => {
  console.log("in the cont")
  // const registrationNumber = req.params.registrationNumber;
  // const registrationNumber=;
  console.log(registrationNumber) ;
  const user = await User.findOne({ enrollMentNumber: registrationNumber });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  try {
    // const u1=await User.find({})
    // console.log(u1);
    const user = await User.findOneAndUpdate(
      { registrationNumber},
      { isStudentRepresentative: true },
      { new: true } // Return the updated document
    );
    console.log(user);

    res.json({ message: 'User updated successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
export const removeStudentRepresentative = async (req, res) => {
  const { registrationNumber } = req.params;
  if(registrationNumber)
   console.log(registrationNumber)
   else
   console.log("not here")
  try {
    const user = await User.findOneAndUpdate(
      { registrationNumber },
      { isStudentRepresentative: false },
      { new: true } // Return the updated document
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User updated successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


