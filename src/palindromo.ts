const esPalindromo = (palabra: string): boolean => {
    const palabraLimpia = palabra.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const palabraAlRevez = palabraLimpia.split("").reverse().join("");
    return palabraLimpia === palabraAlRevez;
}

export const Palindromo = (palabra: string): string[] => {
    const palindromo: string[] = [];
    if (esPalindromo(palabra)){
        palindromo.push(palabra)
    }
    
    return palindromo;
}