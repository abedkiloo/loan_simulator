export default axios.create({
    baseURL: "api",
    headers: {
        "Content-type": "application/json"
    }
});
