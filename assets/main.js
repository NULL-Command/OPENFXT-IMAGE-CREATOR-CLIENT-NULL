document.getElementById("generation").addEventListener("click", function () {
    const inputValue = document.getElementById("input").value;
    const data = { message: inputValue };
    const imgElement = document.getElementById("image");
    const button = document.getElementById("generation");

    imgElement.style.display = "none";
    button.disabled = true;
    button.textContent = "Creating...";

    fetch('https://aiserver-openfxt.vercel.app/api/v2/image_response', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => response.text())
        .then(link => {
            if (link && link !== "") {
                imgElement.src = link;
                imgElement.style.display = "block";
            } else {
                imgElement.src = "/assets/blank.png";
                imgElement.style.display = "block";
            }
            button.disabled = false;
            button.textContent = "Generation";
        })
        .catch(error => {
            console.error('Error:', error);
            imgElement.src = "/assets/blank.png";
            imgElement.style.display = "block";
            button.disabled = false;
            button.textContent = "Generation";
        });
});
alert("XIN CHÀO! Bạn đang truy cập Image Generator, website cung cấp dịch vụ tạo ảnh bằng AI dựa trên lời nhắc văn bản (tạm thời bảo trì vô thời hạn)! Image Generator, một sản phẩm của OpenFXT x NULL Command.")  
