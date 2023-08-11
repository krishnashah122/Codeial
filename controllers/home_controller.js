const Post = require('../models/post');

const User = require('../models/users');

// module.exports.actionName = function(req, res){}

module.exports.home = async function(req, res){

    try{
        // populate the user of each post
        let post = await Post.find({})
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        });

        let user = await User.find({});

        return res.render('home', {
            title: 'Codeial | Home',
            posts: post,
            all_users: user
        });
    }
    catch(err){
        console.log('Error in finding the post');
        return;
    }
    
}