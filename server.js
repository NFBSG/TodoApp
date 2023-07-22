import { app } from "./app.js";
import {commectDB} from "./data/database.js";
commectDB();
app.listen(4000, ()=>{
    console.log(`Server is working on port:${process.env.PORT} in ${process.env.NODE_ENV}`);
})
