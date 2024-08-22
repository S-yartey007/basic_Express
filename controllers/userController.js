import asyncHandler from "express-async-handler";

const getUserByID = asyncHandler(async(req,res) => {
  
        const userId = req.params.id;
        const user = await DBQuery(userId);
    
        if(!user) {

            throw new Error("User does not exit")
        }
    
        res.send(`User found: ${user.name}`)

        
    
  
})

const getUsers = asyncHandler(async(req,res)=> {
    
})

const createUser = asyncHandler(async(req,res) => {

})


export {getUserByID,getUsers,createUser};