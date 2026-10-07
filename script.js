// Número de WhatsApp del comercio (reemplazá con el número del cliente)
const TELEFONO_WHATSAPP = "5491157597489";

function pedirPorWhatsApp(nombreHamburguesa) {
  // Generamos el mensaje automatizado
  const mensaje = encodeURIComponent(
    `¡Hola Bloom Burgers! 🍔 Quiero realizar un pedido de la hamburguesa: *${nombreHamburguesa}*.`
  );

  // Redirigimos directamente al chat de WhatsApp
  const urlWhatsApp = `https://wa.me/${TELEFONO_WHATSAPP}?text=${mensaje}`;
  
  window.open(urlWhatsApp, "_blank");
}