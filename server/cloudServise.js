
import B2 from "backblaze-b2"

class CloudService{
    bucketId = bucketId;
    uploadUrl;
    uploadAuthToken;
 b2 = new B2({
  applicationKeyId: applicationKeyId, 
  applicationKey: applicationKey 
});

async GetBucket(bucketName) {
  try {
    await b2.authorize(); 
    let response = await b2.getBucket({ bucketName: bucketName });
    console.log(response.data);
  } catch (err) {
    console.log('Error getting bucket:', err);
  }
}
async  CreateBucket(bucketName,bucketType){
    try{
        await b2.authorize();
        let response =   await b2.createBucket({
            bucketName: bucketName,
            bucketType: bucketType})
        console.log(response.status)
    }
    catch(err){
        console.log(err)
    }
}  

async  GetUpploadUrl(){
    try{
        await b2.authorize();
        let response=   await  b2.getUploadUrl({
            bucketId: bucketId
        }); 
        console.log(response.data)
        uploadUrl=response.data.uploadUrl
        uploadAuthToken=response.data.uploadAuthToken
        console.log({
            url:uploadUrl,
            token:uploadAuthToken
        })
        return {
            url:uploadUrl,
            token:uploadAuthToken
        }
    }
    catch(err){
    }
}

// GetUpploadUrl()
// console.log(GetUpploadUrl())

async  UpploadFile(fileName){
    try{
        await b2.authorize();
        let response=   await b2.uploadFile({
            uploadUrl: GetUpploadUrl().url ,
            uploadAuthToken: GetUpploadUrl().token,
            fileName: file.name,
            data: file.data, 
            onUploadProgress: (event) => {},
        }); 
    }
    catch(err){
        console.log(err)
    }
}

}
export default new CloudService()