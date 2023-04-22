const http = require('http');

http.createServer( ( req , res )=>{

    res.writeHead(200,{'Content-type':'application/json'})

    const persona = {
        id:1,
        name: 'Martíin'
    }

    res.write(JSON.stringify(persona));
    res.end();

} ).listen( 8080 );

console.log('Escuchando el puerto', 8080)