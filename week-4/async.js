
    function loadPost() {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
          const postDiv = document.getElementById("post"); //loads content into a div on page when you click button
          postDiv.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.body}</p>
          `;
        })
        .catch(error => { 
          document.getElementById("post").textContent = "❌ Failed to load post.";
          console.error("Fetch error:", error);
        });
    }

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json()) 
    //   .then(json => console.log(json))

    // fetch().then().then().catch()

    //asynchronous - run at same time 
  