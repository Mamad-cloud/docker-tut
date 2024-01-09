import express, {Request, Response} from 'express'
import fs from 'fs'

const app = express()
const port = process.env.PORT ? process.env.PORT : 7777

app.get('/', (req: Request, res: Response) => {
    let html 
    
    fs.readFile('/react-docker/dist/index.html', (err, data: Buffer) => {
        html = data.toString();
        res.status(200).send(html);
    })

})


app.listen(port, ()=> {
    console.log(`app listening on port ${port}`)
})