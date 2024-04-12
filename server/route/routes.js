import express from 'express';
import multer from 'multer';
import User from '../schema/user-schema.js';
import { getUsers, getUsersData,deleteUser,updatetUsers} from '../controller/user-controller.js'
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

router.post('/add', upload.single('image'), async (req, res) => {
    const user = new User()
    user.cname = req.body.cname
    user.mobile = req.body.mobile
    
    user.address = req.body.address
    user.adate = req.body.adate
    
    user.image = req.file.originalname
    user.save()
    res.status(201).json('success')
});
router.get('/all', getUsers);

router.post('/getUser', getUsersData);
router.post('/updateUser', updatetUsers)
router.post('/deleteUser', deleteUser);

export default router;
