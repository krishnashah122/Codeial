const User = require('../models/users');

// render the profile page
module.exports.profile = async function(req, res){

    try{
        let user = await User.findById(req.params.id);

        return res.render('user_profile', {
            title: 'User Profile',
            profile_user: user
        });
    }
    catch(err){
        console.log('Error while rendering the profile page');
        return;
    }

}

// update the user info
module.exports.update = async function(req, res){

    if(req.user.id == req.params.id){
        try{
            let user = await User.findByIdAndUpdate(req.params.id, req.body);

            user.name = req.body.name;
            user.email = req.body.email;

            req.flash('success', 'Updated!');
            return res.redirect('back');
        }
        catch(err){
            req.flash('error', 'Unauthorized!');
            return res.status(401).send('Unauthorized');
        }
    }else{
        req.flash('error', 'Unauthorized!');
        return res.status(401).send('Unauthorized');
    }

}

// render the sign up page
module.exports.signUp = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    });
}

// render the sign in page
module.exports.signIn = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    });
}

// get the sign up data
module.exports.create = async function(req, res){

    // password and confirm password doesn't match
    if(req.body.password != req.body.confirm_password){
        req.flash('error', 'Password and Confirm Password are different!');
        return res.redirect('back');
    }

    try{
        let user = await User.findOne({email: req.body.email});

        // if user doesn't exist
        if(!user){
            await User.create(req.body);

            req.flash('success', 'User signed up successfully!');
            console.log('User successfully created');
            return res.redirect('/users/sign-in');
        }
        // if user exist
        else{
            req.flash('error', 'User already exists!');
            return res.redirect('back');
        }
    }
    catch(err){
        req.flash('error', err);
        console.log('Error while create user for signing up');
        return;
    }
    
}

// sign in and create a session for the user
module.exports.createSession = function(req, res){
    req.flash('success', 'Logged in Successfully');
    return res.redirect('/');
}

// destroying the session to logout the user
module.exports.destroySession = function(req, res){
    req.logout(function(err){
        if(err){
            console.log('Error while logging out');
        }

        req.flash('success', 'You have logged out!');
        return res.redirect('/');
    });
}