const cat_result = document.getElementById( 'cat-result' );

fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data => {
        cat_result.innerHTML = `<img src="${data.file}" />`;
    });
