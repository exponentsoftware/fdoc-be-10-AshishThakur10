const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            daName: 'todolist'
        };
        await mongoose.connect(
            "mongodb+srv://Ash1:Ash1@cluster0.pbef3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
            connectionParams
        )    
        .then(()=> {
            console.log('Mongodb connected……');
            });
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};


mongoose.connect('mongodb+srv://Ash1:Ash1@cluster0.pbef3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
        
    }
    )


