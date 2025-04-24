const userName = process.env.USERNAME;
const password = process.env.PASSWORD;
const mongoConnection = process.env.MONGO_CONNECTION;
if(!userName||!password){
    throw new Error("missing credentials")
}