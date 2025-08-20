// Heslo pro přístup k Facebook profilům
// Heslo: Potkani_2025

// Funkce pro ověření hesla
function verifyPassword(inputPassword) {
    return inputPassword === "Potkani_2025";
}

// Funkce pro otevírání Facebook profilů s heslem
async function openFacebookProfile(url, event) {
    // Zabrání scroll na začátek stránky
    if (event) {
        event.preventDefault();
    }
    
    const password = prompt("Zadejte heslo pro přístup k Facebook profilu:");
    if (password !== null) {
        const isValid = verifyPassword(password);
        if (isValid) {
            window.open(url, '_blank');
        } else {
            alert("Nesprávné heslo!");
        }
    }
}

// Zajištění, že funkce jsou dostupné globálně
window.verifyPassword = verifyPassword;
window.openFacebookProfile = openFacebookProfile;
