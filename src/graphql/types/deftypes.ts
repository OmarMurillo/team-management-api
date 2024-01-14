import { gql } from "apollo-server-express";

export const graphqlTypes = gql`
    scalar Date

    type Member {
        _id: String
        Name: String
        DateOfCreation: Date
        Phone: String
        Age: Int
        DateOfBirth: Date
        Email: String
    }

    input MemberInput {
        Name: String
        DateOfCreation: Date
        Phone: String
        Age: Int
        DateOfBirth: Date
        Email: String,
    }

    type Query {
        hello: String
        members: [Member]
        getMember(Id: String): Member
    }

    type Mutation {
        createMember(newMember: MemberInput): Member
        updateMember(ID: String, updateMember: MemberInput ): Member
        deleteMember(ID: String): String
    }

`