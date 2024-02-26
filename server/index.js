import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import multer from 'multer'
import path from 'path'

const app = express();
const port = 3001;
var z;

app.use(cors());
app.use(express.json());
app.use(express.static('images'));

const storage = multer.diskStorage({
  destination: (req,file,cb) => {
    cb(null, 'public/images')
  },
  filename: (req,file,cb) => {
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
})


const upload = multer({
  storage: storage
})

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'Soham2002@',
  database: 'database2',
});


app.get('/getAvailableData', (req, res) => {
  const { dish, date, time } = req.query;
  console.log('Request Parameters:', dish, date, time);

  let query = '';

  if (dish === 'All Dishes') {
    query = 'SELECT * FROM hd WHERE Date = ? AND Time = ?';
    db.query(query, [date, time], (err, result) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.send([]);
      } else {
        console.log('Data fetched successfully:', result);
        res.send(result);
        console.log('Query:', query);
        console.log('Query Parameters:', [dish, date, time]);
      }
    });
  } else {
    query = 'SELECT * FROM hd WHERE Dish = ? AND Date = ? AND Time = ?';
    db.query(query, [dish, date, time], (err, result) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.send([]);
      } else {
        console.log('Data fetched successfully:', result);
        res.send(result);
        console.log('Query:', query);
        console.log('Query Parameters:', [dish, date, time]);
      }
    });
  }

});







app.post("/cooklogin", (req, res) => {
  const Email_id = req.body.Email_id;
  const Password = req.body.Password;
  z= Email_id;
  db.query(
    "SELECT * FROM cook_register WHERE Email_id = ? AND Password = ?",
    [Email_id, Password],
    (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send({ message: 'Internal Server Error', error: err.message });
      } else {
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send({ message: "WRONG EMAIL OR PASSWORD!" });
        }
      }
    }
  );
});




app.post('/addDetails', (req, res) => {
  const { Plates, Dish, Time, Date, Delivery } = req.body;

  const cookEmail_id = z; // Assuming you store user information in req.user after login

  // Fetch other details from cook_register table based on Email_id
  db.query("SELECT * FROM cook_register WHERE Email_id = ?", [cookEmail_id], (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send({ success: false, message: "Internal Server Error" });
    } else {
      const cookDetails = result[0];

      // Save the cook details in the 'hd' table
      db.query(
        "INSERT INTO hd (Email_id, Dish, Time, Date, Plates, Delivery, Name, Phone, Address, Experience, Specialty) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [cookEmail_id, Dish, Time, Date, Plates, Delivery, cookDetails.Name, cookDetails.Phone, cookDetails.Address, cookDetails.Experience, cookDetails.Specialty],
        (err, result) => {
          if (err) {
            console.error(err);
            res.status(400).send({ success: false, message: "Failed to add details. Check input values.", error: err.message });
          } else {
            res.status(200).send({ success: true, message: "Cook details saved successfully!" });
          }
        }
      );
    }
  });
});



app.post("/foodielogin", (req, res) => {
  const Email_id = req.body.Email_id;
  const Password = req.body.Password;

  db.query(
    "SELECT * FROM customer_register WHERE Email_id = ? AND Password = ?",
    [Email_id, Password],
    (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send({ message: 'Internal Server Error', error: err.message });
      } else {
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send({ message: "WRONG EMAIL OR PASSWORD!" });
        }
      }
    }
  );
});



app.post('/signup', (req, res) => {
  const Name = req.body.Name;
  const Email_id = req.body.Email_id;
  const Phone = req.body.Phone;
  const Password = req.body.Password;
  const Experience = req.body.Experience;
  const Specialty = req.body.Specialty;
  const Address = req.body.Address;

  db.query(
    "INSERT INTO cook_register (Name, Email_id, Phone, Password, Experience, Specialty, Address) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [Name, Email_id, Phone, Password, Experience, Specialty, Address],
    (err, result) => {
      if (err) {
        console.error(err); // Log the error to the console
        res.send({ message: "Registration failed. Please check the server logs." });
      } else {
        res.send(result);
      }
    }
  );
});


app.post('/foodiesignup', (req, res) => {
  const Name = req.body.Name;
  const Email_id = req.body.Email_id;
  const Phone = req.body.Phone;
  const Password = req.body.Password;
  const Address = req.body.Address;

  db.query("INSERT INTO customer_register (Name,Email_id,Phone, Password ,Address) VALUES (?, ? , ?, ?, ?)", [Name,Email_id,Phone, Password , Address], 
      (err, result) => {
          if(result){
              res.send(result);
          }else{
              res.send({message: "ENTER CORRECT ASKED DETAILS!"})
          }
      }
  )
})


app.post('/upload', upload.single('image') ,(req, res) => {
  // console.log(req.file);
  const image = req.file.filename;
  const sql = "INSERT INTO imgtry(Image) VALUES (?)" ;
  db.query(sql,[image],(err,result)=>{
    if(err) return res.json({Message: "Error"});
    return res.json({Status: "Success"});
  })
}) 


db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

