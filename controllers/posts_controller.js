const Post = require('../models/post')
const Comment = require('../models/comment');

module.exports.create = async function(req, res){
    try{
        let post = await Post.create({
            content: req.body.content,
            user: req.user._id
        });

        if(req.xhr){
            return res.status(200).json({
                data: {
                    post: post
                },
                message: "Post Created!"
            })
        }

        req.flash('success', 'Post published!');
        return res.redirect('back');
    }
    catch(err){
        req.flash('error', err);
        console.log('Error in creating a post');
        return res.redirect('back');
    };
}

module.exports.destroy = async function(req, res){

    try{
        let post = await Post.findById(req.params.id);

        // .id means converting the object id into string
        if(post.user == req.user.id){
            post.deleteOne();

            await Comment.deleteMany({post: req.params.id});

            req.flash('success', 'Post and associated comments deleted!');
            return res.redirect('back');
        }
        else{
            req.flash('error', 'You cannot delete this post!');
            return res.redirect('back');
        }
    }
    catch(err){
        req.flash('error', err);
        console.log('Error in deleting the post');
        return res.redirect('back');
    }
    
}