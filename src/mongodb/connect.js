import mongoose from 'mongoose'

export const connect = () => {

    let url = 'mongodb+srv://notetaker:notetaker@cluster0.uv7vj.mongodb.net/test'
    mongoose.connect(url, (err) => {
        err ? console.log(err) : console.log('db connected');
    })

}



