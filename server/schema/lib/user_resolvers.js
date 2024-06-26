const User = require('../../models/User');
const path = require('path');
const fs = require('fs');
const { v4 } = require('uuid');

const { createToken } = require('../../auth');


const user_resolvers = {
    Query: {
        authenticate(_, __, context) {
            return context.user;
        },
        async getUserById(_, { userId }) {
            try {
                const user = await User.findById(userId).populate({
                    path: 'campaigns',
                    populate: 'npcs'
                });
                return user;
            } catch (err) {
                throw new Error('could not get user');
            }
        }
    },
    Mutation: {
        async register(_, args, context) {
            try {
                const user = await User.create(args);

                const token = await createToken(user._id);

                context.res.cookie('token', token, {
                    maxAge: 480 * 60 * 1000,
                    httpOnly: true
                });

                return user;
            } catch (err) {
                let message;

                if (err.code === 11000) {
                    message = 'That email address is already in use'
                } else {
                    message = err.message
                }

                throw new Error(message);
            }
        },

        async login(_, args, context) {
            const { identifier, password } = args;

            try {
                const user = await User.findOne({
                    $or: [{ email: identifier }, { username: identifier }],
                }).populate({
                    path: 'wishlists',
                    populate: {
                        path: 'products',
                        model: 'Product',
                    },
                });

                if (!user) throw new Error('User not found');

                const pass_is_valid = await user.validatePass(password);

                if (!pass_is_valid) throw new Error('Password invalid');

                const token = await createToken(user._id);

                context.res.cookie('token', token, {
                    maxAge: 120 * 60 * 1000,
                    httpOnly: true,
                    secure: process.env.PORT ? true : false
                });

                return user;

            } catch (err) {
                throw new Error(err)
            }
        },

        logout(_, __, context) {
            context.res.clearCookie('token');

            return 'User logged out successfully'
        },

        // async uploadProfilePicture(_, args, { user }) {
        //     const { profilePicture } = args;

        //     const { file: { createReadStream, filename } } = await profilePicture;

        //     // Create a readable stream from the uploaded file
        //     const readStream = createReadStream();

        //     // Specify the path where the file should be stored within the public directory
        //     const hash = v4();
        //     const name = `${hash}.${filename}`;
        //     const filePath = path.join(__dirname, '../../public/profile_images', name);

        //     // Create a writable stream to the specified file path
        //     const writeStream = fs.createWriteStream(filePath);

        //     // Pipe the data from the readable stream to the writable stream
        //     readStream.pipe(writeStream);

        //     await User.findOneAndUpdate({ _id: user._id }, {
        //         profilePicture: `/profile_images/${name}`
        //     });

        //     // Return the file path where the image is stored
        //     return filePath;
        // }
    }
}

module.exports = user_resolvers;