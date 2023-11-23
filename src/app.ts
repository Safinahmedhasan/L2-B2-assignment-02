import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { UserRouter } from './app/modules/users/user.route';

const app: Application = express();


// parser
app.use(express.json());
app.use(cors());


app.use('/api/users' , UserRouter)


const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.send(a)
 }

app.get('/', getAController);

//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });
  


export default app
