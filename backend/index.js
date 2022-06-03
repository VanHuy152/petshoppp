const express = require("express");
const app = express();

const dogs = [{"name":"Zboncak","preed":"audio","price":56975,"discription":"sit","imageUrl":"http://loremflickr.com/640/480/animals","id":"1"},{"name":"Berge","preed":"video","price":55739,"discription":"non","imageUrl":"http://loremflickr.com/640/480/food","id":"2"},{"name":"McKenzie","preed":"multipart","price":3712,"discription":"impedit","imageUrl":"http://loremflickr.com/640/480/food","id":"3"},{"name":"Wiegand","preed":"font","price":51062,"discription":"occaecati","imageUrl":"http://loremflickr.com/640/480/sports","id":"4"},{"name":"Wilkinson","preed":"font","price":25384,"discription":"non","imageUrl":"http://loremflickr.com/640/480/technics","id":"5"},{"name":"McKenzie","preed":"multipart","price":54895,"discription":"quam","imageUrl":"http://loremflickr.com/640/480/people","id":"6"},{"name":"Hodkiewicz","preed":"image","price":86604,"discription":"blanditiis","imageUrl":"http://loremflickr.com/640/480/city","id":"7"},{"name":"Powlowski","preed":"text","price":25019,"discription":"ut","imageUrl":"http://loremflickr.com/640/480/technics","id":"8"},{"name":"Orn","preed":"audio","price":63573,"discription":"nisi","imageUrl":"http://loremflickr.com/640/480/people","id":"9"},{"name":"Kunze","preed":"font","price":40696,"discription":"quia","imageUrl":"http://loremflickr.com/640/480/sports","id":"10"}]

app.get("/v1/dogs", (req, res) => {
    res.status(200).json(dogs);
});
app.listen("3000", ()=>{
    console.log("hello Huy");
})