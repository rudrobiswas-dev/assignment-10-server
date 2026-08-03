// // const dns = require("node:dns");
// // dns.setServers(["1.1.1.1", "1.0.0.1"]);

// // const express = require("express");
// // const dontenv = require("dotenv");
// // const cors = require("cors");
// // const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// // const { createRemoteJWKSet, jwtVerify } = require("jose-cjs");
// // dontenv.config();

// // const uri = process.env.MONGODB_URI;

// // const app = express();
// // const PORT = process.env.PORT;

// // app.use(
// //   cors({
// //     credentials: true,
// //     origin: [process.env.CLIENT_URL],
// //   }),
// // );
// // app.use(express.json());

// // const client = new MongoClient(uri, {
// //   serverApi: {
// //     version: ServerApiVersion.v1,
// //     strict: true,
// //     deprecationErrors: true,
// //   },
// // });

// // const JWKS = createRemoteJWKSet(
// //   new URL(`${process.env.CLIENT_URL}/api/auth/jwks`),
// // );

// // const verifyToken = async (req, res, next) => {
// //   const authHeader = req.headers.authorization;

// //   if (!authHeader || !authHeader.startsWith("Bearer ")) {
// //     res.status(401).send({ msg: "Unauthorized" });
// //   }
// //   // "Bearer zjxashsahjdhj".split(" ") // ["Bearer", "xsghagshsf"]
// //   const token = authHeader.split(" ")[1];
// //   if (!token) {
// //     res.status(401).send({ msg: "Unauthorized" });
// //   }

// //   try {
// //     const { payload } = await jwtVerify(token, JWKS);
// //     req.user = payload
// //     next();
// //   } catch (error) {
// //     console.log(error);
// //     res.status(401).send({ msg: "Unauthorized" });
// //   }

// // };

// // async function run() {
// //   try {
// //     await client.connect();
// //     const db = client.db("tech-bazaar");
// //     const subscriptionCollection = db.collection("subscription");
// //     const paymentCollection = db.collection("payment");
// //     const userCollection = db.collection("user");
// //     const productCollection = db.collection("products");

// //     app.post("/subscription", async (req, res) => {
// //       const { user, session_id } = req.body;

// //       const isExistSession = await subscriptionCollection.findOne({
// //         session_id,
// //       });
// //       if (isExistSession) {
// //         return res.status(400).send({ message: "Session already exist" });
// //       }

// //       const subs_result = await subscriptionCollection.insertOne({
// //         userId: new ObjectId(user.id),
// //         session_id,
// //       });

// //       const user_result = await userCollection.updateOne(
// //         { _id: new ObjectId(user.id) },
// //         { $set: { plan: "pro" } },
// //       );

// //       res.send({ subs_result, user_result });
// //     });

// //     app.post("/payment", async (req, res) => {
// //       const { price, userId, title, productId, session_id } = req.body;

// //       const isExistSession = await paymentCollection.findOne({ session_id });
// //       if (isExistSession) {
// //         return res.status(400).send({ message: "Session already exist" });
// //       }

// //       const pay_result = await paymentCollection.insertOne({
// //         userId,
// //         session_id,
// //         price: Number(price),
// //         title,
// //         productId,
// //       });

// //       res.send({ pay_result });
// //     });

// //     app.post("/product", verifyToken, async (req, res) => {
// //       const data = req.body;
// //       const result = await productCollection.insertOne({
// //         ...data,
// //         price: Number(data.price),
// //         quantity: Number(data.quantity),
// //       });
// //       res.send(result);
// //     });

// //     /**
// //      *     query = {title: {$regex: searchText, $options: "i"}}
// //      *
// //      */

// //     app.get("/products", async (req, res) => {
// //       const searchText = req.query.search || "";
// //       let query = {};
// //       query.$or = [
// //         { title: { $regex: searchText, $options: "i" } },
// //         { description: { $regex: searchText, $options: "i" } },
// //       ];

// //       const result = await productCollection.find(query).toArray();

// //       res.send(result);
// //     });

// //     /**
// //      * 1. total_page = Math.ceil(total_data/limit)
// //      * 2. skip = (page-1) * limit
// //      */

// //     app.get("/seller/products", verifyToken,  async (req, res) => {
// //       const limit = Number(req.query.limit) || 10;
// //       const page = Number(req.query.page) || 1;
// //       const user = req.user

// //       const total_data = await productCollection.countDocuments();
// //       const total_page = Math.ceil(total_data / limit);

// //       const skip = (page - 1) * limit;

// //       const data = await productCollection
// //         .find({userId: user.id})
// //         .skip(skip)
// //         .limit(limit)
// //         .toArray();

// //       res.send({ total_page, skip, page, data });
// //     });

// //     app.get("/product/:id", async (req, res) => {
// //       const { id } = req.params;
// //       const result = await productCollection.findOne({ _id: id });
// //       res.send(result);
// //     });

// //     await client.db("admin").command({ ping: 1 });
// //     console.log(
// //       "Pinged your deployment. You successfully connected to MongoDB!",
// //     );
// //   } finally {
// //     // Ensures that the client will close when you finish/error
// //     // await client.close();
// //   }
// // }
// // run().catch(console.dir);

// // app.get("/", (req, res) => {
// //   res.send("Server is running fine!");
// // });

// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });

// ///// sdasdasd

// const dns = require("node:dns");
// dns.setServers(["1.1.1.1", "1.0.0.1"]);

// const express = require("express");
// const dontenv = require("dotenv");
// const cors = require("cors");
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const { createRemoteJWKSet, jwtVerify } = require("jose-cjs");
// dontenv.config();

// const uri = process.env.MONGODB_URI;

// const app = express();
// const PORT = process.env.PORT;

// app.use(
//   cors({
//     credentials: true,
//     origin: [process.env.CLIENT_URL],
//   }),
// );
// app.use(express.json());

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// const JWKS = createRemoteJWKSet(
//   new URL(`${process.env.CLIENT_URL}/api/auth/jwks`),
// );

// // const verifyToken = async (req, res, next) => {
// //   const authHeader = req.headers.authorization;

// //   if (!authHeader || !authHeader.startsWith("Bearer ")) {
// //     res.status(401).send({ msg: "Unauthorized" });
// //   }
// //   // "Bearer zjxashsahjdhj".split(" ") // ["Bearer", "xsghagshsf"]
// //   const token = authHeader.split(" ")[1];
// //   if (!token) {
// //     res.status(401).send({ msg: "Unauthorized" });
// //   }

// //   try {
// //     const { payload } = await jwtVerify(token, JWKS);
// //     req.user = payload
// //     next();
// //   } catch (error) {
// //     console.log(error);
// //     res.status(401).send({ msg: "Unauthorized" });
// //   }

// // };
// const verifyToken = async (req, res, next) => {

//   const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).send({
//       msg: "Unauthorized"
//     });

//   }
//   const token = authHeader.split(" ")[1];
//   if (!token) {
//     return res.status(401).send({
//       msg: "Unauthorized"
//     });

//   }
//   try {
//     const { payload } = await jwtVerify(
//       token,
//       JWKS
//     );
//     req.user = payload;
//     next();
//   } catch(error){
//     console.log(error);
//     return res.status(401).send({
//       msg:"Invalid Token"
//     });
//   }
// };

// async function run() {
//   try {
//     await client.connect();
//     const db = client.db("blacksmith");
//     const subscriptionCollection = db.collection("subscription");
//     const paymentCollection = db.collection("payment");
//     const userCollection = db.collection("user");
//     const productCollection = db.collection("products");
//     const forumCollection = db.collection("forumPosts");

    
//     // Create forum post
// app.post("/forum-posts", async (req, res) => {

//   try {

//     const data = req.body;


//     const post = {
//       title:data.title,
//       category:data.category,
//       description:data.description,
//       image:data.image,
//       authorName:data.authorName,
//       authorEmail:data.authorEmail,
//       authorRole:data.authorRole,
//       createdAt:new Date()
//     };


//     const result = await forumCollection.insertOne(post);


//     res.send(result);


//   } catch(error){

//     console.log(error);

//     res.status(500).send({
//       message:"Failed to create forum post"
//     });

//   }

// });

// // Get all forum posts
// app.get("/forum-posts", async (req, res) => {
//   try {

//     const result = await forumCollection
//       .find()
//       .sort({
//         createdAt: -1,
//       })
//       .toArray();


//     res.send(result);

//   } catch(error){

//     console.log(error);

//     res.status(500).send({
//       message:"Failed to get forum posts"
//     });

//   }
// });

// // Get single forum post
// app.get("/forum-posts/:id", async(req,res)=>{

//   try{

//     const {id}=req.params;


//     if(!ObjectId.isValid(id)){
//       return res.status(400).send({
//         message:"Invalid post id"
//       });
//     }


//     const post = await forumCollection.findOne({
//       _id:new ObjectId(id)
//     });


//     if(!post){
//       return res.status(404).send({
//         message:"Post not found"
//       });
//     }


//     res.send(post);


//   }catch(error){

//     console.log(error);

//     res.status(500).send({
//       message:"Server error"
//     });

//   }

// });

// app.patch("/forum-posts/:id", verifyToken, async(req,res)=>{

//   const {id}=req.params;

//   const data=req.body;


//   const result = await forumCollection.updateOne(
//     {
//       _id:new ObjectId(id)
//     },
//     {
//       $set:data
//     }
//   );


//   res.send(result);

// });

// app.delete("/forum-posts/:id", verifyToken, async(req,res)=>{

//  const {id}=req.params;


//  const result = await forumCollection.deleteOne({
//     _id:new ObjectId(id)
//  });


//  res.send(result);

// });
    
    
    
    
    
//     // ok
//     app.post("/subscription", async (req, res) => {
//       const { user, session_id } = req.body;

//       const isExistSession = await subscriptionCollection.findOne({
//         session_id,
//       });
//       if (isExistSession) {
//         return res.status(400).send({ message: "Session already exist" });
//       }

//       const subs_result = await subscriptionCollection.insertOne({
//         userId: new ObjectId(user.id),
//         session_id,
//       });

//       const user_result = await userCollection.updateOne(
//         { _id: new ObjectId(user.id) },
//         { $set: { plan: "pro" } },
//       );

//       res.send({ subs_result, user_result });
//     });

//     app.post("/payment", async (req, res) => {
//       const { price, userId, title, productId, session_id } = req.body;

//       const isExistSession = await paymentCollection.findOne({ session_id });
//       if (isExistSession) {
//         return res.status(400).send({ message: "Session already exist" });
//       }

//       const pay_result = await paymentCollection.insertOne({
//         userId,
//         session_id,
//         price: Number(price),
//         title,
//         productId,
//       });

//       res.send({ pay_result });
//     });

//     app.post("/product", verifyToken, async (req, res) => {
//       const data = req.body;
//       const result = await productCollection.insertOne({
//         ...data,
//         price: Number(data.price),
//         quantity: Number(data.quantity),
//       });
//       res.send(result);
//     });

//     /**
//      *     query = {title: {$regex: searchText, $options: "i"}}
//      *
//      */

//     app.get("/products", async (req, res) => {
//       const searchText = req.query.search || "";
//       let query = {};
//       query.$or = [
//         { title: { $regex: searchText, $options: "i" } },
//         { description: { $regex: searchText, $options: "i" } },
//       ];

//       const result = await productCollection.find(query).toArray();

//       res.send(result);
//     });

//     /**
//      * 1. total_page = Math.ceil(total_data/limit)
//      * 2. skip = (page-1) * limit
//      */

//     app.get("/seller/products", verifyToken,  async (req, res) => {
//       const limit = Number(req.query.limit) || 10;
//       const page = Number(req.query.page) || 1;
//       const user = req.user

//       const total_data = await productCollection.countDocuments();
//       const total_page = Math.ceil(total_data / limit);

//       const skip = (page - 1) * limit;

//       const data = await productCollection
//         .find({userId: user.id})
//         .skip(skip)
//         .limit(limit)
//         .toArray();

//       res.send({ total_page, skip, page, data });
//     });

//     app.get("/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Validate ObjectId
//     if (!ObjectId.isValid(id)) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid product id",
//       });
//     }

//     const result = await productCollection.findOne({
//       _id: new ObjectId(id),
//     });

//     if (!result) {
//       return res.status(404).json({
//         success: false,
//         message: "Product not found",
//       });
//     }

//     res.status(200).json(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// });

//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!",
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);

// app.get("/", (req, res) => {
//   res.send("Server is running fine!");
// });

// if (require.main === module) {
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// }

// module.exports = app;



const dns = require("node:dns");
dns.setServers(["1.1.1.1", "1.0.0.1"]);

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const { createRemoteJWKSet, jwtVerify } = require("jose-cjs");

dotenv.config();

const app = express();


// Middleware
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "https://assignment-10-client-sand.vercel.app"
    ],
  })
);

app.use(express.json());



// MongoDB
const client = new MongoClient(
  process.env.MONGODB_URI,
  {
    serverApi:{
      version:ServerApiVersion.v1,
      strict:true,
      deprecationErrors:true
    }
  }
);


let database;


async function connectDB(){

  if(database){
    return database;
  }


  await client.connect();

  console.log("MongoDB Connected");


  database = client.db("blacksmith");


  return database;

}




// JWT
const JWKS = createRemoteJWKSet(
  new URL(
    `${process.env.CLIENT_URL}/api/auth/jwks`
  )
);



const verifyToken = async(req,res,next)=>{


  const authHeader = req.headers.authorization;


  if(
    !authHeader ||
    !authHeader.startsWith("Bearer ")
  ){

    return res.status(401).send({
      message:"Unauthorized"
    });

  }



  const token =
    authHeader.split(" ")[1];



  try{


    const {payload}=await jwtVerify(
      token,
      JWKS
    );


    req.user=payload;


    next();


  }catch(error){


    console.log(error);


    res.status(401).send({
      message:"Invalid Token"
    });

  }

};





// HOME
app.get("/",(req,res)=>{
  res.send("Server is running fine!");
});



// TEST
app.get("/test",(req,res)=>{
  res.send("API working");
});






// ================= FORUM =================



// Create forum post

app.post("/forum-posts",async(req,res)=>{


try{


const db = await connectDB();

const forumCollection =
db.collection("forumPosts");



const result =
await forumCollection.insertOne({

title:req.body.title,

category:req.body.category,

description:req.body.description,

image:req.body.image,

authorName:req.body.authorName,

authorEmail:req.body.authorEmail,

authorRole:req.body.authorRole,

createdAt:new Date()

});



res.send(result);



}catch(error){

console.log(error);


res.status(500).send({
message:"Failed to create post"
});


}



});





// Get all forum posts

app.get("/forum-posts",async(req,res)=>{


try{


const db = await connectDB();


const forumCollection =
db.collection("forumPosts");



const result =
await forumCollection
.find()
.sort({
createdAt:-1
})
.toArray();



res.send(result);



}catch(error){


console.log(error);


res.status(500).send({
message:"Failed to get posts"
});


}



});





// Single forum post

app.get("/forum-posts/:id",async(req,res)=>{


try{


const db = await connectDB();


const forumCollection =
db.collection("forumPosts");



const {id}=req.params;



if(!ObjectId.isValid(id)){

return res.status(400).send({
message:"Invalid id"
});

}



const post =
await forumCollection.findOne({

_id:new ObjectId(id)

});



res.send(post);



}catch(error){


console.log(error);


res.status(500).send(error);


}


});






// Delete forum post

app.delete(
"/forum-posts/:id",
verifyToken,
async(req,res)=>{


try{


const db = await connectDB();


const forumCollection =
db.collection("forumPosts");



const result =
await forumCollection.deleteOne({

_id:new ObjectId(req.params.id)

});



res.send(result);



}catch(error){

res.status(500).send(error);

}


});









// ================= PRODUCTS =================



app.get("/products",async(req,res)=>{


const db = await connectDB();


const products =
db.collection("products");


const search =
req.query.search || "";



const result =
await products.find({

$or:[

{
title:{
$regex:search,
$options:"i"
}
},

{
description:{
$regex:search,
$options:"i"
}
}

]

}).toArray();



res.send(result);



});






app.post(
"/product",
verifyToken,
async(req,res)=>{


const db =
await connectDB();


const products =
db.collection("products");



const result =
await products.insertOne({

...req.body,

price:Number(req.body.price),

quantity:Number(req.body.quantity)

});



res.send(result);



});






app.get("/product/:id",async(req,res)=>{


const db =
await connectDB();


const products =
db.collection("products");



const result =
await products.findOne({

_id:new ObjectId(req.params.id)

});



res.send(result);



});







// Vercel
module.exports = app;





// Local
if(require.main === module){


app.listen(
process.env.PORT || 5000,
()=>{

console.log(
`Server running on ${process.env.PORT || 5000}`
);

});


}
