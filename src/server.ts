import express from 'express';
const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Hello World /o/" });
});

app.post("/", (req, res) => {
  return res.json({ message: "success!" });
});


app.listen(3333, () => console.log("Server is running!")); 



//npx tsc --init { cria o tsconfig.json no npm}