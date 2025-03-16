import express , {Request, Response} from "express"
import mongoose from "mongoose"
import User from "./models/user"
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

mongoose.connect("mongodb://admin:1234@localhost:27017/ivtb-22?authSource=admin")
.then(()=>console.log("DB connected!"))
.catch((err)=>console.error(err))


app.set("view engine", "ejs")
app.get('/ejs-pages', (req: Request, res: Response) => {
  res.render('layout', {title: "ejs-pages", message: "Hi, user!", content: "index", content2: "about"})
})

app.get('/about', (req: Request, res: Response) => {
  res.render('layout', {title: "about", content: "about"})
})

app.get('/', (req: Request, res: Response) => {y
  res.render('layout', {title: "Main", content: "main"})
})

app.post('/', (req: Request, res: Response) => {
  console.log(req.body)
  console.log(req.headers)
  res.send('Hello World!')
})

// Получить всех пользователей
app.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (e) {
    res.status(400).json({message: (e as Error).message})
  }
})

// Удалить пользователя 
app.delete("/users", async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const result = await User.deleteOne(req.body);
    res.status(201).json(result);
  } catch (e) {
    res.status(400).json({message: (e as Error).message})
  }
})

// Добавить пользователя
app.post('/users', async (req: Request, res: Response)=> {
  try{
    console.log(req.body)
    const user = new User(req.body)
    await user.save()
    res.status(201).json(user)
  }catch (e){
    res.status(400).json({message: (e as Error).message})
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})