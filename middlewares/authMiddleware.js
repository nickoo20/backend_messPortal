import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email }).select("-password");
        return user;
    } catch (error) {
        console.error(`Error in getUserByEmail: ${error.message}`);
        return null;
    }
};

export const authMiddleWare = async (req, res, next) => {
    const token = req.cookies?.access_token;
    console.log('Token:', token);

    if (!token) {
        return res.status(403).json({ message: 'Unauthorized!' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await getUserByEmail(decoded.email);

        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error(`Error in authMiddleWare: ${error.message}`);
        return res.status(500).json({ error: error.message });
    }
};
export const authorize = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).send({ error: 'Access denied.' });
        }
        next();
    };
};

// Middleware to check if the user is a student representative
export const checkStudentRep = (req, res, next) => {
    if (req.user && req.user.studentRep === true) {
        next();
    } else {
        return res.status(403).json({ message: 'Forbidden: You do not have permission to perform this action.' });
    }
};
