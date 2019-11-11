module.exports.handler = (evt, cxt, done) => {
    done(null, {
        statusCode: 200,
        headers: null,
        body: JSON.stringify({
            message: "Hello"
        })
    })
}