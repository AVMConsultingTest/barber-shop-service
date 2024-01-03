"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = require("./routes");
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const environment = app.get('env');
dotenv_1.default.config();
app.use((0, cors_1.default)({
    origin: '*'
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: false
}));
// app.use(express.json());
// view engine setup
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'pug');
// app.use(helmet());
app.use((0, morgan_1.default)('dev'));
app.use(body_parser_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '/public')));
app.use("/api/v1/", routes_1.root);
// app.use(express.static(path.join(__dirname, '.well-known')));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://www.techcafehub.com/");
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
app.listen(port, () => {
    console.log(`Listening on the port ${port}`);
});
