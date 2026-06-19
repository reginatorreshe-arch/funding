document.getElementById("donacionForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const monto = document.getElementById("monto").value;

    if (!nombre || !correo || !monto) {
        alert("Por favor completa todos los campos.");
        return;
    }

    document.getElementById("donacionForm").style.display = "none";

    document.getElementById("detalleDonacion").innerHTML = `
        <strong>${nombre}</strong>, tu donación simulada de 
        <strong>$${monto} MXN</strong> ha sido registrada correctamente.<br>
        Se ha enviado un comprobante simulado a <em>${correo}</em>.
    `;

    document.getElementById("mensajeExito").style.display = "block";
});



