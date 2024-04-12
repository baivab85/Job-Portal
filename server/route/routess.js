import express from 'express';
import multer from 'multer';
import bcrypt from 'bcrypt';
import User1 from '../schema/users_schema.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// User registration route
router.post('/addd', upload.single('image'), async (req, res) => {
    try {
        const { cname, mobile, address, adate,uname } = req.body;

        // Check if the username (cname) already exists in the database
        const existingUser = await User1.findOne({ cname });

        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash the password (adate) before storing it in the database
        const hashedPassword = await bcrypt.hash(adate, 10);

        // Create a new user object
        const newUser = new User1({
            cname,
            mobile,
            address,
            uname,
            adate: hashedPassword, // Store hashed password in the database
            image: req.file.originalname // Assuming you're storing the filename of the uploaded image
            
        });

        // Save the new user to the database
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'An error occurred while registering user. Please try again.' });
    }
});

// User login route
router.post('/login', async (req, res) => {
    try {
        const { uname, adate } = req.body;

        // Find the user by username (cname)
        const user = await User1.findOne({ uname });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the provided password (adate) with the hashed password stored in the database
        const isPasswordValid = await bcrypt.compare(adate, user.adate);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Password is valid, return success response
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'An error occurred while logging in. Please try again.' });
    }
});

router.post('/logout', (req, res) => {
    try {
        // Clear user session or token here
        // For example, if using sessions:
        req.session.destroy((err) => {
            if (err) {
                console.error('Error destroying session:', err);
                res.status(500).json({ message: 'An error occurred while logging out. Please try again.' });
            } else {
                res.status(200).json({ message: 'Logout successful' });
            }
        });
    } catch (error) {
        console.error('Error logging out:', error);
        res.status(500).json({ message: 'An error occurred while logging out. Please try again.' });
    }
});

export default router;
