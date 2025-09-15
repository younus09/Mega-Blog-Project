import { Client, Databases, Query, Storage } from "appwrite";
import conf from "../conf/conf";


export class Service{
    client = new Client();
    database;
    bucket;

    constructor (){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, content , featuredImage , slug ,status,userId }){
        try {
            return await this.database.createDocument({
                databaseId: conf.appwriteDatabaseId,
                collectionId : conf.appwriteCollectionId,
                documentId : slug,
                data : {
                    title,
                    content,
                    status,
                    userId,
                    featuredImage
                }
            })
        } catch (error) {
            throw error
        }
    }

    async getPost(slug){
        try {
            return await this.database.getDocument({
                databaseId: conf.appwriteDatabaseId,
                collectionId : conf.appwriteCollectionId,
                documentId : slug
            })
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug,{title,status, content, featuredImage }){
        try {
            return await this.database.updateDocument({
                databaseId: conf.appwriteDatabaseId,
                collectionId : conf.appwriteCollectionId,
                documentId : slug,
                data : {
                    title,
                    content,
                    status,
                    featuredImage
                }
            })
        } catch (error) {
            throw error
        }
    }

    async listPost(queries = [Query.equal("status","active")]){
        try {
            return await this.database.listDocuments({
                databaseId: conf.appwriteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                queries: queries
        });
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug){
        try {
            await this.database.deleteDocument({
                databaseId: conf.appwriteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                documentId: slug
        })
        } catch (error) {
            throw error
        }
    }

    async createFile(file){
        try {
        return await this.bucket.createFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique(),
                file: file
        });
        } catch (error) {
            throw error
        }
    }

    async deleteFIle(fileId){
        try {
            return await this.bucket.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId: fileId
});
        return true
        } catch (error) {
            throw error
        }
    }

    preview(fileId){
        try {
            return this.bucket.getFilePreview({
                bucketId: conf.appwriteBucketId,
                fileId : fileId
            })
        } catch (error) {
            throw error
        }
    }
}



const service = new Service();


export default service;