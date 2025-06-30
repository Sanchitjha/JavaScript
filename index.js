import express from 'express';
const app = express();
const users = [];

app.use(express.json());

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});

app.post('/users',(req,res)=>{
   users.push(req.body);
   res.status(201).json({
    success:true,
    data:users,
    meassage:"User created successfully"

   });
    console.log("New user added:", req.body.name);

});

app.get('/users',(req,res)=>{
res.status(200).json({
    success: true,
    data: users
});
});
app.patch('/users/:name', (req, res) => {
    const name = req.params.name;
    const newData = req.body;

    const user = users.find(u => u.name === name);
    if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
    }

    Object.assign(user, newData);

    res.json({
        success: true,
        message: "User updated successfully",
        data: user
    });
});
app.delete('/users/:name', (req, res) => {
    const name = req.params.name;
    const index = users.findIndex(u => u.name === name);

    if (index === -1) {
        return res.status(404).json({ success: false, message: "User not found" });
    }

    users.splice(index, 1);

    res.json({
        success: true,
        message: "User deleted successfully"
    });
});

