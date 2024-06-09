"use strict";
//PENDING
class Member {
    constructor(name, date_of_creation, phone_number, age, date_of_birth, email, id) {
        this.name = name;
        this.date_of_creation = date_of_creation;
        this.phone_number = phone_number;
        this.age = age;
        this.date_of_birth = date_of_birth;
        this.email = email;
        this.id = id;
        this.validEmail = () => {
            if (this.email === "")
                return false;
            return true;
        };
    }
}
