const mongoose = require("mongoose")
require('dotenv').config();
mongoose.connect('mongodb+srv://bookkeeping:BwSVGOQktY0rwoxm@cluster0.thrxl.mongodb.net/bookkeeping', {
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true, useNewUrlParser: true
}).then(() => {
    console.log('Congurates')
})
    .catch(() => {
        console.log('Sorry ! Try again')
    })

