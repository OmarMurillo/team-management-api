import { Request, Response } from "express"
import { MemberRepository } from "../domain/repositories/members/MemberRepository"
import { MemberMySQLRepository } from "../domain/db/mysql/repositories/MemberMySQLRepository"
import { MemberInteractor } from "../interactors/members/MemberInteractor";

export class MemberController {
    public memberRepo;
    public memberInteractor;
    
    constructor(){
      this.memberRepo = new MemberRepository( new MemberMySQLRepository())
      this.memberInteractor = new MemberInteractor(this.memberRepo)
    }

    public saveMember = async (req: Request, res: Response) => {
        try{
            const response = await this.memberInteractor.save( req.body)

            res.send(response)
        }catch(error){
            console.log(error)
            res.send(error)
        }
    }
}