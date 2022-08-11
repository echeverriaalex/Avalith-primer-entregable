const notFound = (req, res, next) => {
    const err = new Error("Not Found baby.");
    err.status = 404;
    return next(err); 
  }

const MyError = {
    notFound
}

module.exports = MyError;