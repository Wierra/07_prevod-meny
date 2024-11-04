# 07_prevod-meny

Napište funkci convertToCZK, která převede částku zadanou v cízí měně na české koruny. Funkce bude podporovat následující měny a kurzy.

    Měna	Kód	Kurz
    Euro	EUR	24.47
    Britská libra	GBP	28.09
    Americký dolar	USD	24.81
    Bitcoin	BTC	478637

Výslednou částku zakrouhlete na celé koruny. Příklad použití:

document.body.innerHTML += convertToCZK(25, 'EUR');
Pokud funkce jako parametr dostane neznámý kód měny, vrátí jako výsledek null. Otestujte funkci výpisem výsledku do stránky.
