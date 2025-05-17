const cloudinary = required('cloudinary').v2

 cloudinary.config({ 
        cloud_name: 'dspvvrcfp', 
        api_key: '939282296698126', 
        api_secret: 'X0VnBygyCtTJe2kaL8nZqYVzPWI' // Click 'View API Keys' above to copy your API secret
    });

    export default cloudinary;