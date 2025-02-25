const multer = require('multer');
//F:/Nodejs830pm/middleware/uploads
//setting storafe for our uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file);
        // cb(null,'F:/Nodejs830pm/middleware/uploads');
        cb(null, 'uploads/resturantcoverimages');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + '-' + file.originalname)
    }
});

//instance creation for multer 
const upload = multer({ storage: storage });

module.exports = upload;