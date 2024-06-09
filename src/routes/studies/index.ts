import { Router } from "express";
// import { requestAllMembers, requestMemberInfo, updateMemberInfo } from "./controllers";
// import { MemberRepository } from "../../domain/repositories/studys/MemberRepository";
// import { MemberMySQLRepository } from "../../domain/db/mysql/repositories/MemberMySQLRepository";
// import { MemberController } from "../../controllers/MemberController";
import { StudyRepository } from "../../domain/repositories/studies/StudyRepository";
import { MySQLStudyRepository } from "../../domain/db/mysql/repositories/MySQLStudyRepository";


export const studysRoute = Router();
// const controller = new MemberController()

studysRoute.get("/", async(req, res, next) =>{
    const studyRepo = new StudyRepository( new MySQLStudyRepository())

    await studyRepo.startTransaction()

    const allTables = await studyRepo.find(100,0)

    await studyRepo.commitTransaction()

    res.send(allTables)
})


studysRoute.get("/:studyID", async(req, res, next) =>{
    const studyRepo = new StudyRepository( new MySQLStudyRepository())

    await studyRepo.startTransaction()

    const table = await studyRepo.findBy(1)

    await studyRepo.commitTransaction()

    res.send(table)
})
// studysRoute.get("/:studyId", async(req, res, next) => {
//     const studyRepo = new MemberRepository( new MemberMySQLRepository())

//     res.send(await studyRepo.findBy(req.params.studyId))
// })

// studysRoute.post("", controller.saveMember)

// studysRoute.put("/:studyId", async(req, res, next) => {
//     const studyRepo = new MemberRepository( new MemberMySQLRepository())
//     let savedMember = {}
//     try{
//         await studyRepo.startTransaction()

//         const existMember = await studyRepo.findBy(req.params.studyId)

//         if ( !existMember ){
//             throw { message: "The user doesnt exist"}
//         }
//         await studyRepo.update(req.params.studyId, req.body)

//         await studyRepo.commitTransaction()
//         res.send("The user was updated")
//     }catch(e){
//         res.send(e)
//         console.log(e)
//     }
    
// })

// studysRoute.put("/:studyId", async(req, res, next) => {
//     const studyRepo = new MemberRepository( new MemberMySQLRepository())
//     let savedMember = {}
//     try{
//         await studyRepo.startTransaction()

//         const existMember = await studyRepo.findBy(req.params.studyId)

//         if ( !existMember ){
//             throw { message: "The user doesnt exist"}
//         }
//         await studyRepo.update(req.params.studyId, req.body)

//         await studyRepo.commitTransaction()
//         res.send("The user was updated")
//     }catch(e){
//         res.send(e)
//         console.log(e)
//     }
    
// })
// studysRoute.delete("/:studyId", async(req, res, next) => {
//     const studyRepo = new MemberRepository( new MemberMySQLRepository())
//     let savedMember = {}
//     try{
//         await studyRepo.startTransaction()

//         const existMember = await studyRepo.findBy(req.params.studyId)

//         if ( !existMember ){
//             throw { message: "The user doesnt exist"}
//         }
//         await studyRepo.delete(req.params.studyId)

//         await studyRepo.commitTransaction()
//         res.send("The user was updated")
//     }catch(e){
//         res.send(e)
//         console.log(e)
//     }
    
// })

// studysRoute.get("/:studyId/activities", async(req, res, next) => {
//     const studyRepo = new MemberRepository( new MemberMySQLRepository())
//     try{
//         await studyRepo.startTransaction()

//         const studyActivities = await studyRepo.findMemberActivities( Number(req.params.studyId))

//         await studyRepo.commitTransaction()
//         res.send(studyActivities)
//     }catch(e){
//         res.send(e)
//         console.log(e)
//     }
    
// })

// studysRoute.post("/:studyId/activities", async(req, res, next) => {
//     const studyRepo = new MemberRepository( new MemberMySQLRepository())
//     try{
//         await studyRepo.startTransaction()

//         const studyActivities = await studyRepo.saveMemberActivities( Number(req.params.studyId), req.body.activities)

//         await studyRepo.commitTransaction()
//         res.send(studyActivities)
//     }catch(e){
//         res.send(e)
//         console.log(e)
//     }
    
// })
// // studysRoute.put("/:studyId", updateMemberInfo)