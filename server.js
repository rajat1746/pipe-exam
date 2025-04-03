const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("<h1>🚀 Node.js App Deployed via AWS CodePipeline! 🎉</h1>");
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
