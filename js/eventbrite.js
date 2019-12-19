class EventBrite{
    constructor(){
        this.auth_token = '7NYWZVJRWHIEKH77ELNS';
    }
    async getCategoriesAPI(){
        const categoriesResponse = await fetch
            (`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);
        
        const categories = await categoriesResponse.json();
        return {
            categories
        }
    }
}