
const requisitionData = () => {
    const url = "https://opentdb.com/api.php?amount=50"

    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            alert("error on API")
            console.log(error)
        })
}
