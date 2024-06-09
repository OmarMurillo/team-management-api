import { Router } from "express";
// import { requestAllMembers, requestMemberInfo, updateMemberInfo } from "./controllers";
import { MemberRepository } from "../../domain/repositories/members/MemberRepository";
import { MemberMySQLRepository } from "../../domain/db/mysql/repositories/MemberMySQLRepository";
import { MemberController } from "../../controllers/MemberController";


export const membersRoute = Router();
const controller = new MemberController()

membersRoute.get("/", async(req, res, next) =>{
    const memberRepo = new MemberRepository( new MemberMySQLRepository())

    await memberRepo.startTransaction()

    const allMembers = await memberRepo.find(100,0)

    await memberRepo.commitTransaction()

    res.send(allMembers)
})
membersRoute.get("/:memberId", async(req, res, next) => {
    const memberRepo = new MemberRepository( new MemberMySQLRepository())

    res.send(await memberRepo.findBy(req.params.memberId))
})

membersRoute.post("", controller.saveMember)

membersRoute.put("/:memberId", async(req, res, next) => {
    const memberRepo = new MemberRepository( new MemberMySQLRepository())
    let savedMember = {}
    try{
        await memberRepo.startTransaction()

        const existMember = await memberRepo.findBy(req.params.memberId)

        if ( !existMember ){
            throw { message: "The user doesnt exist"}
        }
        await memberRepo.update(req.params.memberId, req.body)

        await memberRepo.commitTransaction()
        res.send("The user was updated")
    }catch(e){
        res.send(e)
        console.log(e)
    }
    
})

membersRoute.put("/:memberId", async(req, res, next) => {
    const memberRepo = new MemberRepository( new MemberMySQLRepository())
    let savedMember = {}
    try{
        await memberRepo.startTransaction()

        const existMember = await memberRepo.findBy(req.params.memberId)

        if ( !existMember ){
            throw { message: "The user doesnt exist"}
        }
        await memberRepo.update(req.params.memberId, req.body)

        await memberRepo.commitTransaction()
        res.send("The user was updated")
    }catch(e){
        res.send(e)
        console.log(e)
    }
    
})
membersRoute.delete("/:memberId", async(req, res, next) => {
    const memberRepo = new MemberRepository( new MemberMySQLRepository())
    let savedMember = {}
    try{
        await memberRepo.startTransaction()

        const existMember = await memberRepo.findBy(req.params.memberId)

        if ( !existMember ){
            throw { message: "The user doesnt exist"}
        }
        await memberRepo.delete(req.params.memberId)

        await memberRepo.commitTransaction()
        res.send("The user was updated")
    }catch(e){
        res.send(e)
        console.log(e)
    }
    
})

membersRoute.get("/:memberId/activities", async(req, res, next) => {
    const memberRepo = new MemberRepository( new MemberMySQLRepository())
    try{
        await memberRepo.startTransaction()

        const memberActivities = await memberRepo.findMemberActivities( Number(req.params.memberId))

        await memberRepo.commitTransaction()
        res.send(memberActivities)
    }catch(e){
        res.send(e)
        console.log(e)
    }
    
})

membersRoute.post("/:memberId/activities", async(req, res, next) => {
    const memberRepo = new MemberRepository( new MemberMySQLRepository())
    try{
        await memberRepo.startTransaction()

        const memberActivities = await memberRepo.saveMemberActivities( Number(req.params.memberId), req.body.activities)

        await memberRepo.commitTransaction()
        res.send(memberActivities)
    }catch(e){
        res.send(e)
        console.log(e)
    }
    
})
// membersRoute.put("/:memberId", updateMemberInfo)