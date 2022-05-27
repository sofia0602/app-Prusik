import Post from "../Models/Post.js"
import fileService from "./fileService.js";


class PostService {
    async create(post, picture) {
        const fileName = await fileService.saveFile(picture);
        console.log('Pppp',picture)
        const createdPost = await Post.create({...post, picture: fileName});
        return createdPost;
    }
    
    async getAll() {
        const posts = await Post.find();
        return posts;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('ID не вказано')
        }
        const post = await Post.findById(id);
        return post;
    }

    async update(post) {
        if (!post._id) {
            throw new Error('ID не вказано')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost;
    }

    async delete(id) {
            if (!id) {
                throw new Error('ID не вказано')
            }
            const post = await Post.findByIdAndDelete(id);
            return post;
    }
}


export default new PostService();
