import User from "../schema/user-schema.js";

// export const addUser = async (request, response) => {
//     const user = request.body;

//     const newUser = User(user);
//     try {
//         await newUser.save();
//         response.status(201).json(newUser);
//     } catch (error) {
//         response.status(409).json({ message: error.message });
//     }
// }

export const getUsers = async (request, response) => {
    try {
        const users = await User.find();
        response.status(200).json(users);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}

export const getUsersData = async (req, res) => {
    try {
        const data = await User.findById({ _id: req.body.id })
        res.json(data)
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}
export const deleteUser = async (req, res) => {
    try {
        // console.log(req.body)
        await User.deleteOne({ _id: req.body.id })
        res.status(201).json('success')
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
 
export const updatetUsers = async (req, res) => {
    try {
        await User.updateMany({ _id: req.body._id }, {
            $set: {
                cname: req.body.cname,
                mobile: req.body.mobile,
              
               
               
                address: req.body.address,
                adate: req.body.adate,
                
            }
        })
        res.status(201).json('successfully updated')
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

