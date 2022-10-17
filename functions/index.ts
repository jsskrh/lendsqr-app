const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

let data = "";

const fetchUsers = async () => {
  try {
    const response = await fetch(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    );
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.log(error);
  }
};

fetchUsers();

// routes
app.get("/", (req, res) => res.send("Hello world"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
