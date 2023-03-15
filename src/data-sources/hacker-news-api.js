import { RESTDataSource } from "apollo-datasource-rest";


class NewAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "http://hn.algolia.com/api/v1/";
    }

    getItem(itemId){
        return this.get(`items/${itemId}`)
    }

    getUser(username){
        return this.get(`/users/${username}`)
    }

    getSearch(query, tags){
        return this.get(`search?query=${query}&tags=${tags}`)
    }
}


export default NewAPI