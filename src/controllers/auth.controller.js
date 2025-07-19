import jwt from 'jsonwebtoken';

const default_user = {
    id: 1,
    email: "test@test.com",
    password:"123"
}

export const login = (req, res) => {
   const {email, password} = req.body;

   const user = { id: 1 };
    console.log(email, password)
   if(email == default_user.email && password == default_user.password){
    console.log('entre al if')
    const payload = { email };
    const expiration = { expiresIn: "1h" };

    const token = jwt.sign(payload, process.env.JWT_SECRET, expiration)
    console.log(token)
    res.json({token})
   }else {
    res.status(401).send();
   }

    res.json({message: "Ok"});
};