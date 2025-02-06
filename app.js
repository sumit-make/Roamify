const express=require("express");
const app = express();
const mongoose =require("mongoose");
const Listing=require("./models/listing.js");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate = require("ejs-mate");
const Review =require("./models/review.js");
const session=require("express-session");
const flash=require("connect-flash");
const passport=require("passport");
const localStrategy=require("passport-local");
const User=require("./models/user.js");



const mongo_url ="mongodb://127.0.0.1:27017/wanderlust";
main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
});
async function main() {
    await mongoose.connect(mongo_url);
    
}
app.set("view engin","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname, "public")));

const sessionOption = {
    secret: "mycode",
    resave: false,
    saveUninitialized: true, 
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    },
   
};

app.get("/",(req,res)=>{
    res.send("Hii this is root");
});

app.use(session(sessionOption));
app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new localStrategy(User.authenticate()));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
// Passport configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Signup route
app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

app.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username });
    const registeredUser = await User.register(newUser, password); 
    // req.login(registeredUser, (err) => {
    //   if (err) return next(err);
    console.log(registeredUser);
      req.flash("success", "Welcome to Wanderlust!");
      res.redirect("/listings");
   
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/listings");
  }
});

// Login route
app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.post("/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
  }),
  (req, res) => {
    req.flash("success", "Welcome back!");
    res.redirect("/listings");
  });
//signup
  // app.get("/signup", (req, res) => {
  //   res.render("signup.ejs");
  // });
  
  // app.post("/signup",
  //   passport.authenticate("local", {
  //     failureFlash: true,
  //     failureRedirect: "/signup",
  //   }),
  //   (req, res) => {
  //     req.flash("success", "Welcome back!");
  //     res.redirect("/listings");
  //   });

  

// Logout route
app.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success", "Goodbye!");
    res.redirect("/");
  });
});


app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");

    next();
});

app.get("/demouser", async (req, res) => {
    let fakeUser = new User({
      email: "student@gmail.com",
      username: "delta-student",
    });
  
    let registeredUser = await User.register(fakeUser, "helloworld");
    res.send(registeredUser);
  });
  

// index route
app.get("/listings",async (req,res)=>{
     const allListings= await Listing.find({});
     console.log(allListings)
     res.render( "listings/index.ejs",{allListings});
});


//new route
app.get("/listing/new",(req,res)=>{
  if (!req.isAuthenticated()) {
    req.flash("err","You must logged in to create listing");
   return res.redirect("/login");
    
  };
    res.render("listings/new.ejs");
});
//show route
app.get("/listings/:id", async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
    
});

//create route
app.post("/listings",async (req,res)=>{
  
  if (!req.isAuthenticated()) {
    req.flash("err","You must logged in to create listing");
   return res.redirect("/login");
    
  };
   const newListing=new Listing(req.body.listing);
   await newListing.save();
   res.redirect("/listings");
});

// Edit rout
app.get("/listings/:id/edit", async (req,res)=>{
  if (!req.isAuthenticated()) {
    req.flash("err","You must logged in to create listing");
   return res.redirect("/login");
    
  };
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
});


// update route
app.put("/listings/:id",async (req,res)=>{

  if (!req.isAuthenticated()) {
    req.flash("err","You must logged in to create listing");
   return res.redirect("/login");
    
  };
    let {id}=req.params;
   await Listing.findByIdAndUpdate(id,{...req.body.listing});
   res.redirect("/listings");
});


app.delete("/listings/:id", async (req, res) => {
  if (!req.isAuthenticated()) {
    req.flash("err","You must logged in to create listing");
   return res.redirect("/login");
    
  };
    try {
      const { id } = req.params;
      const deletedListing = await Listing.findByIdAndDelete(id); // Deletes the document
      console.log("Deleted listing:", deletedListing);
      res.redirect("/listings");
    } catch (err) {
      console.error("Error deleting listing:", err);
      res.status(500).send("Internal Server Error");
    }
  });
   
  // review
  //post route
  app.post( "/listings/:id/reviews",async(req,res)=>{
      let listing=await Listing.findById(req.params.id);
      let newReview=new Review(req.body.review);
      await newReview.save();
      await listing.save();
      
      res.redirect(`/listings/${listing._id}`);


  });
  
// app.get("/testListing", async (req,res)=>{
//     let sampleListing=new Listing({
//         title:"The villa",
//         description:"A holy place",
//         location:"calicut, kerla",
//         country:"india",
//         price:1200,
//     });
//    await sampleListing.save();
//    console.log("Sample was saved");
//    res.send("successful testing");
// });
app.listen(8080,()=>{
    console.log("server is listen on port 8080");
});