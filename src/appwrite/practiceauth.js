import { Client, Account , ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
    client = new Client();
    account; 

    constructor (){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount ({email,password,name}){
        try {
            const userAccount = await this.account.create({
                userId: ID.unique(),
                email,
                password,
                name
            })

            if (userAccount){
                this.logIn({email,password})
            }else{
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }
    async logIn({email,password}){
        try {
            return await this.account.createEmailPasswordSession({
                email,
                password,
            })

        } catch (error) {
            throw error
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            throw error
            
        }
        return null
    }
    async logOut() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error
            
        }
        
    }
}

const authService = new AuthService()


export default authService;