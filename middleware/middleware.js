
class CustomError extends Error{
    constructor(message) {
        super(message);
        this.statusCode = 404;
        this.name = "CustomError"
    }

}
function myMidddleware(req,res,next) {
    console.log("Middleware function called");
    const error = new CustomError("This a new error")
    //throw error
    next()
  }


export default myMidddleware