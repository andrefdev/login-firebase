export function showMessage(message, type){
    Toastify({
        text: message,
        duration: 3000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: type === "success" ? "linear-gradient(90deg, rgba(0,224,154,1) 0%, rgba(14,255,0,1) 100%)" : "linear-gradient(90deg, rgba(224,0,0,1) 0%, rgba(255,0,147,1) 100%)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}