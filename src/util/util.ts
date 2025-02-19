const getUser = () => {
    try{
        return JSON.parse(<string>sessionStorage.getItem('oidc.user:https://cognito-idp.us-west-1.amazonaws.com/us-west-1_ZEPalthpD:2i3upct4b1032aqodo0kvphvq'));
    }
    catch(err){
        console.log(err);
    }
}


export {getUser}