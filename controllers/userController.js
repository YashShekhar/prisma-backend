const prisma = require('../prisma/index')
const cookieToken = require('../utils/cookieToken')

exports.signup = async(req, res, next) => {
    try {
        const {name, email, password} = req.body;
        console.log(name);
        console.log(email);
        console.log(password);


        if(!name || !email || !password) {
            throw new Error("Please provide all fields[name, email, password]");
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })
        console.log('=====user=====')
        console.log(user);
        console.log('=====user=====')

        cookieToken(user, res)

    } catch (error) {
        throw new Error(error)    
    }
}