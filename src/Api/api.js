function fetchPost() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((resp) => {
    if (resp.status === 200) return resp.json();
    else throw new Error("Invalid response");
  });
}

export { fetchPost };
