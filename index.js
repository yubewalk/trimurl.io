const express = require('express');
const app = express();
app.use(express.json({extend: false}));
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));