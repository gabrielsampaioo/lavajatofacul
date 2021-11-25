const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
let user=models.User;

app.post('/login', async (req,res)=>{
  let response=await user.findOne({
    where:{cpf:req.body.cpf, password: req.body.password}
  })
  if(response === null){
    res.send(JSON.stringify('error'));
  }else{
    res.send(response);
  } 
});

/*
app.get('/read', async (req,res)=>{
  let read=await user.findAll({
    raw:true
  })
  res.send('Read!')
});

app.get('/create', async (req,res)=>{
  let create=await user.create({
    cpf: "abc",
    password: "abc",
    createdAt: new Date(),
    updateAt: new Date()
  })
  res.send('Usuário criado com sucesso!')
});

app.get('/delete', async (req,res)=>{
  user.destroy({
    where: {id:2}
  })
});

app.get('/update', async (req,res)=>{
  let update=await user.findByPk(1).then((response)=>{
    response.cpf='Gordito';
    response.password='123abc';
    response.save();
  })
});*/

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
  console.log('servidor rodando');
});