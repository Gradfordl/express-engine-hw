const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const fs = require("fs");

app.engine("derp", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    const rendered = content
      .toString()
      .replace("#title#", "<title>" + options.title + "</title>")
      .replace("#head#", "<h1>" + options.head + "</h1>")
      .replace("#url#", options.url)
      .replace("#content#", "<div>" + options.content + "</div>")
      .replace("#href#", options.href);

    return callback(null, rendered);
  });
});

app.set("views", "./views");
app.set("view engine", "derp")

app.get("/", (req, res) => {

    res.render("template1", {
        title: "Llamas Llamas Llamas",
        head: "Llamas Llamas Llamas",
        url: "https://images.pexels.com/photos/2253639/pexels-photo-2253639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        content:"Welcome to Llamas Llamas Llamas where there's a llama for yo mama",
        href: "/llama/1"
    })
})

app.get("/llama/1", (req, res) => {
    res.render("template2", {
        title: "Llamas Llamas Llamas",
        head: "Llama of the day",
        url: "https://images.pexels.com/photos/1575857/pexels-photo-1575857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        content:"isn't she a beauty.",
        href: "/llama/2"
    })
})
app.get("/llama/2", (req, res) => {
    res.render("template2", {
        title: "Llamas Llamas Llamas",
        head: "Llama of the day",
        url: "https://i.imgur.com/e5Gm6Kb.jpeg",
        content:"This is Steve.",
        href: "/llama/3"
    })
})
app.get("/llama/3", (req, res) => {
    res.render("template2", {
        title: "Llamas Llamas Llamas",
        head: "Llama of the day",
        url: "https://images.pexels.com/photos/8468237/pexels-photo-8468237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        content:"he's got a big head and a little body",
        href: "/llama/4"
    })
})
app.get("/llama/4", (req, res) => {
    res.render("template2", {
        title: "Llamas Llamas Llamas",
        head: "Llama of the day",
        url: "https://images.pexels.com/photos/4720398/pexels-photo-4720398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        content:"Something's off about this one",
        href: "/llama/5"
    })
})
app.get("/llama/5", (req, res) => {
    res.render("template2", {
        title: "Llamas Llamas Llamas",
        head: "Llama of the day",
        url: "https://images.pexels.com/photos/15124678/pexels-photo-15124678/free-photo-of-llama-eating-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        content:"Not the Bayang",
        href: "/llama/6"
    })
})
app.get("/llama/6", (req, res) => {
    res.render("template2", {
        title: "Llamas Llamas Llamas",
        head: "Llama of the day",
        url: "https://images.pexels.com/photos/3947398/pexels-photo-3947398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        content:"It's cute but, is this even a llama?",
        href: "/llama/7"
    })
})
app.get("/llama/7", (req, res) => {
    res.render("template2", {
        title: "Llamas Llamas Llamas",
        head: "Llama of the day",
        url: "https://images.pexels.com/photos/7538486/pexels-photo-7538486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        content:"He's definitely a mouth-breather.",
        href: "/llama/8"
    })
})
app.get("/llama/8", (req, res) => {
    res.render("template2", {
        title: "Llamas Llamas Llamas",
        head: "Llama of the day",
        url: "https://images.pexels.com/photos/9946109/pexels-photo-9946109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        content:"PLEASE back up.",
        href: "/llama/9"
    })
})
app.get("/llama/9", (req, res) => {
    res.render("template2", {
        title: "Llamas Llamas Llamas",
        head: "Llama of the day",
        url: "https://images.pexels.com/photos/14044189/pexels-photo-14044189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        content:"rainbow llama baby",
        href: "/llamas"
    })
})
app.get("/llamas", (req, res) => {
    res.render("template1", {
        title: "Llamas Llamas Llamas",
        content: "",
        head: "<h1>THANK YOU FOR VIEWING OUR LLAMAS</h1>",
        url: "https://images.pexels.com/photos/12903917/pexels-photo-12903917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        href: "/"
    })
})


app.listen(PORT, () => {
  console.log("Running on", PORT);
});
