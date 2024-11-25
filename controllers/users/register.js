import User from '../../models/User.js'

let register = async (req, res, next) => {
    try {
        let user = req.body;
        user.online = true;

        let newUser = await User.create(user);

        return res.status(201).json({
            success: true,
            response: {
                user: {
                    email: newUser.email,
                    name: newUser.name, 
                    lastname: newUser.lastname,
                    photo: newUser.photo,
                    country: newUser.country,
                    online: true
                },
                token: req.token
            },
            message: 'Usuario registrado exitosamente'
        });
    } catch (error) {
        next(error);
    }
};



export default register;
