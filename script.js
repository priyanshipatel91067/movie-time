const movieList=document.getElementById("movie-list");

const movieInput=document.getElementById("movie-input");

const addBtn=document.getElementById("add-btn");

addBtn.addEventListener("click",
    function(){
        const movieName=movieInput.value.trim();

        if(movieName === ""){
            alert("please enter a movie name!");
            return;
        }

            const li=document.createElement("li");

            const span=document.createElement("span");
            span.textContent=movieName;

            const deleteBtn=document.createElement("button");
            deleteBtn.textContent="delete";

            deleteBtn.classList.add("delete-btn");

    

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    

    li.appendChild(span);

    li.appendChild(deleteBtn);

    movieList.appendChild(li);



    movieInput.value = "";

});




movieList.addEventListener("click", function(event) {

    if (event.target.classList.contains("delete-btn")) {

        event.target.parentElement.remove();

    }

});
       