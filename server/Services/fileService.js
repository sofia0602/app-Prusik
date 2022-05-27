import * as uuid from 'uuid';
import * as path from 'path';
import B2  from 'backblaze-b2';
import cloudService from "../cloudServise.js"


class FileService {
   async saveFile(file) {
        try {
            const fileName = file.name
            cloudService.UpploadFile(file.name)
            
            // const  b2 = new B2({
            //                 applicationKeyId: 'c6129073c8a8', // or accountId: 'accountId'
            //                 applicationKey: '0041decf71315a50d8c6b49178eaad4862eb8f09a1' // or masterApplicationKey
            //               });
            //             await b2.authorize(); 
            //             await   b2.uploadFile({
            //                 uploadUrl: 'https://pod-040-2007-06.backblaze.com/b2api/v2/b2_upload_file/2c96013299f0e7338c080a18/c004_v0402007_t0045',
            //                 uploadAuthToken: '4_004c6129073c8a80000000000_01a484bd_2908ba_upld_GafAcF_t4RA8rqAFhL_XpiYtCTY=',
            //                 fileName: file.name,
            //                 data: file.data, // this is expecting a Buffer, not an encoded string
            //                 onUploadProgress: (event) => {},
            //             })
            return fileName;
        } catch (e) {
            console.log(e)
        }
    }
}

export default new FileService();
