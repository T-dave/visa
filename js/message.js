document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Your WhatsApp number (in international format, without +)
    const whatsappNumber = "2348168114402"; // Example: 234 is Nigeria's country code

    // Create the WhatsApp message
    const text = `Hello, my name is ${name}.
*Email:* ${email}
*Message:* ${message}`;

    // Encode the message for URL
    const encodedText = encodeURIComponent(text);

    // Create the full WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    // Redirect user to WhatsApp
    window.open(whatsappURL, '_blank');
  });