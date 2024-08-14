class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}shreeram`
    }
    set password(value){
        this._password = value
    }
}

const shreeram = new User("shreeram@ai","abc@123")
console.log(shreeram.email);