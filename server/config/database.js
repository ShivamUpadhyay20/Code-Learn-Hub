// const mongoose = require("mongoose");
// require("dotenv").config();

// const { MONGODB_URI } = process.env;

// exports.connect = () => {
//     mongoose
//         .connect(MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         })
//         .then(() => console.log(`DB Connection Success`))
//         .catch((err) => {
//             console.error(`DB Connection Failed`);
//             console.error(err);
//             process.exit(1);
//         });
// };

const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;

const connect = () => {
    mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log(`DB Connection Success`))
    .catch((err) => {
        console.error(`DB Connection Failed`);
        console.error(err);
        process.exit(1);
    });
};

module.exports = { connect };
