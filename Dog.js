// Create the Dog class here
export class Dog {
    constructor(data){
        Object.assign(this, data)
    }
    
    changeStatus(bool){
        this.hasBeenSwiped = true
        this.hasBeenLiked = bool
    }
    
    setProfileHtml(){
        const { name, avatar, age, bio} = this
        return `
            <div class="profile-picture" style="background-image: url('${avatar}');">
                <h2>${name}, ${age}</h2>
                <p>${bio}</p>
                <img class="badge" id="badge-like" src="images/badge-like.png">
                <img class="badge" id="badge-nope" src="images/badge-nope.png">
            </div>
        `
    }
}