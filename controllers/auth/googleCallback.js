import User from "../../models/User.js";

const googleCallback = async (req, res) => {
    try {
        if (!req.user?.email) {
            throw new Error("No user email found");
        }

        let updatedUser = await User.findOneAndUpdate(
            { email: req.user.email },
            { online: true },
            { new: true }
        );

        if (!updatedUser) {
            const newUser = new User({
                email: req.user.email,
                name: req.user.name,
                lastname: req.user.lastname,
                photo: req.user.photo,
                password: req.user.password,
                online: true,
            });
            await newUser.save();
            req.user = newUser;
        }

        const responseData = {
            success: true,
            message: updatedUser ? "Signed in successfully" : "Account created successfully",
            response: {
                user: {
                    email: req.user.email,
                    name: req.user.name,
                    lastname: req.user.lastname,
                    country: req.user.country || "",
                    photo: req.user.photo,
                },
                token: req.token,
            },
        };

        const redirectURL = process.env.FRONTEND_URL || "http://localhost:5173";
        return res.redirect(
            `${redirectURL}/auth/google/callback?data=${encodeURIComponent(
                JSON.stringify(responseData)
            )}`
        );
    } catch (error) {
        console.error("Error in callback:", error);
        const errorRedirectURL = process.env.FRONTEND_URL || "http://localhost:5173";
        return res.redirect(`${errorRedirectURL}/signin?error=${encodeURIComponent(error.message)}`);
    }
};

export default googleCallback;
