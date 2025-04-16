const startApp = async ( app ) => {
    const port = process.env.EXPRESS_PORT;
    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
        console.log(`Url: localhost:${port}`);
    });
}


module.exports = startApp;