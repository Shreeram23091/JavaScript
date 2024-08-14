class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static CreateId(){
        return `123`
    }
}

const shreeram = new User("Shreeram")
// console.log(shreeram.CreateId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone@email.com")
iphone.logMe();
// console.log(iphone.CreateId()) error
