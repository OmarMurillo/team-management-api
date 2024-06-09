// import { IMember } from "../domain/interfaces/IMember"
// import { IMemberDTO } from "../../interfaces/dtos/IMemberDTO"

// export class MemberEntity {
//     constructor(
//         public data: Partial<IMemberDTO> 
//     ){}

//     public toMember = (): Partial<IMember> => {
//         const mappedMember: Partial<IMember> = {
//             id: this.data.id,
//             name: this.data.name,
//             date_of_creation: this.data.dateOfCreation,
//             phone_number: this.data.phoneNumber,
//             age: this.data.age,
//             date_of_birth: this.data.dateOfBirth,
//             email: this.data.email
//         }
//         return mappedMember
//     }

//     public getFromDTOActivities = (): number[] | undefined =>{
//         return this.data.activities?.map(act => act.id).filter(id => id !== undefined)
//     }
    

//     public validate(){
//         return this.validEmail()
//     }


//     public validEmail = (): Boolean => {
//         if( this.data.email === "") return false
//         return true
//     }

// }