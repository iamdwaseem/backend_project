const express=require('express');
const app=express();
app.use(express.json());
let students=[{
    "id":1,
    "name":"Waseemuddin",
    "dept":"CSE"
}]
app.get('/student',(req,res)=>{
    return res.json(students)
})

app.post('/student',(req,res)=>{
    const student=req.body;
    if(!student){
        return res.json({
            "message":"Invalid Format"
        })
    }
    students.push(student);
    return res.json(student)
})
app.put('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = students.findIndex(s => s.id === id);
    if (index === -1) return res.status(404).json({message:'Not found'});
    students[index] = { id, ...req.body };
    res.json(students[index]);
});

app.delete('/student/:id',(req,res)=>{
    const studentId=req.params.id;
    const index=students.findIndex(s=>s.id==studentId);
    if(index==-1){
        return res.json({
            "message":"Student Not Found"
        })  
    }
    students.splice(index,1);
    return res.json({
        "message":"Student Deleted Successfully"
    })
})

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
});