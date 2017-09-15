const shakespearApi = 'https://api.graph.cool/simple/v1/shakespear';

let option = () => {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        query: `{
            allPoems(
                first: 1
                skip: ${randomInt(1, 160)}
            ) {
                title
                author
                lines
                text
            }
        }`
    })
}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
