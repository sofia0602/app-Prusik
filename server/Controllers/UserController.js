//import User from "./User.js";
import UserService from "../Services/UserService.js";

class UserController {
    
    async create(req, res) {
        try {
            const user = await UserService.create(req.body)
            res.json(user) 
        } catch (e) {
            res.status(500).json(e)
        }
    }
    
    async getAll(req, res) {
        try {
            const users = await UserService.getAll();
            return res.json(users);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const user = await UserService.getOne(req.params.id)
            return res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedUser = await UserService.update(req.body);
            return res.json(updatedUser);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const user = await UserService.delete(req.params.id);
            return res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new UserController();
