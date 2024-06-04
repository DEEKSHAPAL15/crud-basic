const User = require('../models/userModel');

const getAllUsers = async (req, res) =>{

    // DB QUERY FOR GETTING ALL DOCUMENTS
    const users = await User.find()
    res.json(users);
};


const getUser = async (req, res) => {

    // DB QUERY FOR GETTING SINGLE DOCUMENTS BY ID
   const user = await User.findById(req.params.id)

   if(!user){
    res.status(404);
    res.json({
        msg : "User Not Found"
    });
   }

   res.json(user)
};


const addUser = async (req, res) =>{

    const {name, email, post , age, isMarried, contact} = req.body

    if(!name || !email || !post || !age || !isMarried || !contact) {
        res.json({error: "Please Fill All Details"})
    };

       // DB QUERY FOR CREATING SINGLE DOCUMENTS 

    const user = await User.create({
        name,
        email,
        post, 
        age, 
        contact,
        isMarried
    })

    if(!user){
        res.json({
            error : "Error in creating User"
        })
    }
    res.json(user)
};

const updateUser = async (req, res) =>{
    
       // DB QUERY FOR UPDATING SINGLE DOCUMENTS 

    const updateUser = await User.findByIdAndUpdate(req.params.id , req.body,{
        new : true,
    });
    res.json(updateUser)
};

const removeUser = async (req, res) =>{
    
       // DB QUERY FOR REMOVING SINGLE DOCUMENTS 

const removeUser = await User.findByIdAndDelete(req.params.id);

res.json({
    msg : "User Removed!",
 });

};


module.exports ={getAllUsers , addUser, getUser, updateUser , removeUser};