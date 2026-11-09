const formSource = document.querySelector("#form-source");

const storage = JSON.parse(localStorage.getItem("data-surveys")) || [];

formSource.onsubmit = e =>{
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("nama");
    const age = data.get("umur");
    const gender = data.get("jenis-kelamin");
    const smoker = data.get("perokok");
    const brands = data.getAll("merek");

    storage.push({
        name,
        age,
        gender,
        smoker,
        brands
    });

    localStorage.setItem("data-surveys", JSON.stringify(storage));
    window.location.href = "result.html";
};