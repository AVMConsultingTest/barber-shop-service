import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { root } from "./routes";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;
const environment = app.get('env');
dotenv.config();

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
// app.use(express.json());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/public')));
app.use("/api/v1/", root);


// app.use(express.static(path.join(__dirname, '.well-known')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",  "https://www.techcafehub.com/");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// let ALLOWED_ORIGINS = ["http://barbershop.com.s3-website-us-east-1.amazonaws.com", "http://www.techcafehub.com/"];
// app.use((req, res, next) => {
//     let origin = req.headers.origin || '';
//     let theOrigin = (ALLOWED_ORIGINS.indexOf(origin) >= 0) ? origin : ALLOWED_ORIGINS[0];
//     res.header("Access-Control-Allow-Origin", theOrigin);
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

//     next();
// })


app.listen(port, ()=> {
    console.log(`Listening on the port ${port}`);
})