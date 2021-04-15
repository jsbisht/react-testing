exports.fetchData = async function () {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const result = data.json();
  return result;
};
