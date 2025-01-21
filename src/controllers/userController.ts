import { Request,Response } from "express";
import { userNameExists } from '../repository/userRepository';

//Function to create a new user
export async function createUser(req: Request, res: Response) {
    const { username,email, password } = req.body;
    //check user name exists
    const isUserNameExists =await userNameExists(username);

    //if user name exists return 400
    if(isUserNameExists) {
        res.status(400).send("User name already exists");
        return;
    }
    //check user email exists

    //if user email exists return 400

    //save user to database
    //const savedUser = await saveUser(username,email,password);
    
}