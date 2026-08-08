
let responseCode= 401;

switch (responseCode) {
    case 200:
        console.log("200 Ok");
        break;

    case 201:
        console.log("201 Created");
        break;

    case 400:
        console.log("400 Bad Request");
        break;

    case 404:
        console.log("404 Not found!");
        break;

    default:
        console.log("invalid response");
}