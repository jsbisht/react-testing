const axios = require("axios");

exports.fetchData = async function () {
  const data = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  return data;
};
