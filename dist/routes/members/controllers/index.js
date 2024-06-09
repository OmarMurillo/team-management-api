"use strict";
// import { Request, Response } from 'express';
// import { MemberDocument } from '../../../types/members.interface';
// export const requestAllMembers = async(req: Request, res: Response) => {
//     const members: MemberDocument[] = await getAllMembers()
//     res.send({ response: members})
// }
// export const requestMemberInfo = async(req: Request, res: Response) => {
//     const memberId = req.params.memberId;
//     const member: MemberDocument | null = await getMember(memberId)
//     res.send({ response: member})
// }
// export const updateMemberInfo = async(req: Request, res: Response) => {
//     const memberId = req.params.memberId;
//     const memberInfo = req.body
//     console.log(memberInfo, memberId)
//     const member: MemberDocument | null = await updateMemberById(memberId, memberInfo)
//     res.send({ response: { success: true}})
// }
