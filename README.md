# Mapa Potkaních Setkání

Interaktivní mapa České republiky s přehledem pomocníků pro potkany v jednotlivých krajích.

## Funkce

- Interaktivní mapa České republiky
- Seznam pomocníků podle krajů
- Facebook odkazy na profily pomocníků
- Statistiky a přehledy
- Responzivní design

## Bezpečnost

Pro přístup k Facebook profilům pomocníků je vyžadováno heslo. Heslo je uloženo v souboru `password.js` v zahashované podobě pomocí SHA-256 algoritmu pro maximální bezpečnost.

### Heslo pro přístup
- Heslo je uloženo v souboru `password.js` jako SHA-256 hash
- Pro přístup k Facebook profilům zadejte heslo při kliknutí na odkaz
- Heslo je zahashované pro bezpečnost GitHub repozitáře
- Používá se Web Crypto API pro bezpečné hashování

## Instalace

1. Stáhněte soubory
2. Otevřete `index.html` v prohlížeči
3. Klikněte na kraj pro zobrazení pomocníků
4. Pro přístup k Facebook profilům zadejte heslo

## Struktura souborů

- `index.html` - Hlavní HTML soubor
- `style.css` - CSS styly
- `password.js` - Zahashované heslo pro bezpečnost

## Autor

Vytvořeno pro potkaní pomocníky v České republice.
