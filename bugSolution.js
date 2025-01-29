```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field1:1}});
//Alternative solution: Check if the field is a number before incrementing
db.collection('myCollection').findOne({"_id":ObjectId("someId")}).then(doc => {
if(typeof doc.field2 === 'number'){
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field2:1}});
}else{
console.log("field2 is not a number")
}
})
```