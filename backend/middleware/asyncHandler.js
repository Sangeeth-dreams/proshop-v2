//wrap asynchronous functions and handles errors.
//fn argument function 'asyncHandler'middleware is wrapping.
//req, res, next are middleware functions.
const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)). catch(next);
};

export default asyncHandler;