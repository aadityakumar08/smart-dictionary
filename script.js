const dictionary = (word) => {
    const cleanedWord = word.replace(/[\u200B-\u200D\uFEFF]/g, '').trim();

    if (cleanedWord === "") {
        document.getElementById("definition").innerHTML = `<p class="text-danger">Please enter a word to search.</p>`;
        document.getElementById("word").innerText = "No word entered";
        return;
    }

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '15afbb37admsh08ac16a3eb0ccacp1e35d3jsn093d7147131c',
            'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + cleanedWord;

    // Set loading state
    document.getElementById("word").innerHTML = `Searching for "<em>${cleanedWord}</em>"...`;
    document.getElementById("definition").innerHTML = `<p class="text-muted">Please wait while we fetch the definition.</p>`;

    fetch(url, options)
        .then(response => response.json())
        .then((response) => {
            console.log("API Response:", response);

            const wordTitle = cleanedWord.charAt(0).toUpperCase() + cleanedWord.slice(1);
            document.getElementById("word").innerHTML = `<strong>${wordTitle}</strong>`;

            if (response.valid && response.definition) {
                const rawDef = response.definition.trim();

                // Split into parts and format
                const parts = rawDef.split(/[\.\;\n]\s+/);
                const formatted = parts
                    .filter(line => line.trim().length > 0)
                    .map((line, index) => `<li>${line.charAt(0).toUpperCase() + line.slice(1)}</li>`)
                    .join("");

                document.getElementById("definition").innerHTML = `
                    <ul class="text-start mt-3" style="line-height: 1.6;">
                        ${formatted}
                    </ul>`;
            } else {
                document.getElementById("definition").innerHTML = `<p class="text-warning">No definition found for "<strong>${wordTitle}</strong>".</p>`;
            }
        })
        .catch(err => {
            console.error("Error fetching data:", err);
            document.getElementById("definition").innerHTML = `<p class="text-danger">Something went wrong. Please try again later.</p>`;
        });
};

document.getElementById("searchbtn").addEventListener("click", (e) => {
    e.preventDefault();
    const inputWord = document.getElementById("searchinput").value;
    dictionary(inputWord);
});
