export const password_generator = ( len ) => {
    let length = (len)?(len):(10);
    let string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
    let numeric = '0123456789';
    let password = "";
    let character = "";
    let crunch = true;
    while( password.length<length ) {
       let entity1 = Math.ceil(string.length * Math.random()*Math.random());
       let entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
       let hold = string.charAt( entity1 );
        hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
        character += hold;
        character += numeric.charAt( entity2 );
        password = character;
    }
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password.substr(0,len);
}
