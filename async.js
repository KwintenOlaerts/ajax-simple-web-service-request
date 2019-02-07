$.get("https://thatsthespir.it/api", function(data){
 $("#quote").text(data.quote)
console.log(data)
});
console.log("test");

