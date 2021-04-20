const appp = require("./app");
const PORT = 3000;

appp.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`); //backtrick
});