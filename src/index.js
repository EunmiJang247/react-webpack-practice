const express = require('express');

app.use(express.static("public"))
app.get('*', (req,res)=>{
  res.send('Hi')
})
app.listen(4000, ()=>{
  console.log('서버 구동 중')
})