// Using async/await to handle asynchronous requests
async function searchList() {
    try {
        const result = document.getElementById("result");
        const val = document.getElementById("userinput").value;

        const response = await fetch(`http://localhost/info2180-lab4/superheroes.php?query=${val}`);

        if (response.ok) {
            const data = await response.text();
            result.innerHTML = data;
        } else {
            console.error("Error:", response.status);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded");

    const searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener("click", searchList);
});
