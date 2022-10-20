const studentClass = require("../model/studentClassModel")


exports.createClass = async(req,res)=>{
    if(!(req.body.className || req.body.classGrade)) return res.status(400).json({error: "data not properly formatted"})
    const { className, classGrade } = req.body

    try {
        const classExist = await studentClass.exists({className})
        if(classExist) return res.status(401).json("class name or grade already exist")

        const classCreate = await studentClass.create({
            className,
            classGrade
        })

        res.json(classCreate)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getClass = async(req,res)=>{
    try {
        const classGetall = await studentClass.find()
        res.json(classGetall)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.getOneClass = async(req,res)=>{
    const { classId } = req.params 

    try {
        const OneClass = await studentClass.findById(classId)
        res.json(OneClass)

    } catch (error) {
        res.json({error:error.message})
    }
}

exports.updateClass = async(req,res)=>{
    if(!(req.body.className || req.body.classGrade)) return res.status(400).json({error: "data not properly formatted"})

    const { classId } = req.params

    const className  = req.body.className == ''? studentClass.className : req.body.className
    const classGrade = req.body.classGrade == ''? studentClass.classGrade : req.body.classGrade
    
    try {
        const classUpdate = await studentClass.updateOne(
            {_id: classId},
            {$set: {className, classGrade}}
        )

        res.json(classUpdate)
        
    } catch (error) {
        res.json({error:error.message})
    }
}

exports.deleteClass = async(req,res)=>{
    const { classId } = req.params 

    try {
        const classDel = await studentClass.deleteOne({_id: classId})
        res.json(classDel)
        
    } catch (error) {
        res.json({error:error.message})
    }
}