const express = require('express');
const morgan = require('morgan');
const app = new express();
const path = require('path');

app.use(morgan('dev'));
app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.use(express.static('public'));
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname);

require('dotenv').config()
const PORT = process.env.PORT

require('./db/connection');
const nav = [{link:"/employees",name:'Home'},
    {link:'/employees/employeeAdd',name:'Add Employee'}
]
//for update
//const button = [{link:'employees/employeeUpdate/',name:'Update'}]

const employeeRoutes = require('./routes/employeeRoutes')(nav);
app.use('/employees',employeeRoutes)



app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})



//enctype=      to add image
