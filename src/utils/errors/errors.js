const errors = {
    error: { message: "Error", statusCode: 400 },
    register: { message: "User already exists", statusCode: 400 },
    token: { message: "Invalid verified token!", statusCode: 400 },
    auth: { message: "Invalid credentials", statusCode: 401 },
    forbidden: { message: "Forbidden", statusCode: 403 },
    userProd: { message: "You cannot add your own product to your cart", statusCode: 403 },
    notFound: { message: "Not Found", statusCode: 404 },
    fatal: { message: "Fatal", statusCode: 500 },
    equal: { message: "You can't use the same password", statusCode: 401 },
    expired: { message: "Link expired", statusCode: 403 },
};

export default errors;
