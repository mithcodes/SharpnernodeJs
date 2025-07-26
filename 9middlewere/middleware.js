const myMiddleware=(req, res, next)=>{
    console.log("middleware chala",req.method, req.url);
    next();
}

module.exports=myMiddleware;