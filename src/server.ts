import 'reflect-metadata';
import express from 'express';
import './database';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);


// app.get("/", (req, res) => {
//   return res.json({ message: "Hello World /o/" });
// });

// app.post("/", (req, res) => {
//   return res.json({ message: "success!" });
// });

app.listen(3333, () => console.log("Server is running!")); 



//npx tsc --init { cria o tsconfig.json no npm }
//npx typeorm migration:create -n CreateUsers { cria migrations com npm }