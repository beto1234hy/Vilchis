window.addEventListener("DOMContentLoaded", () => {

    let input = document.querySelector(".main_input");
    let text = document.querySelector(".main_text");

    input.addEventListener("keydown", (e) => {

        let search = input.value.trim();

        if (search !== "" && e.code === "Enter") {
            let regExp = new RegExp(search, "gi");

            // aqui se busca y se resalta la palabra que se busca
            text.innerHTML = text.innerHTML.replace(regExp,
                "<span class='tetx_search'>$&</span>"
            );
        }
    });
});
