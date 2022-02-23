exports.Calculate = async(value) => {
    var endpoint = `/api/fibonacci/${value}`;
    var response = await fetch(endpoint);
    return response.json();
}