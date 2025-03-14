// Immediately invoked function expression (iife):

(function chai(){
    console.log(`DB connected`)
}) ();
// chai()

( (name)=> {
    console.log(`DB Connected Two ${name}`)
})('Arvind')