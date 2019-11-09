module.exports.handler = (evt, ctx, done) => {
    done(null, evt);
}
module.exports.newhello = (evt, ctx, done) => {
    done(null, {
        "msg": "new handker try"
    });
}