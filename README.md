
# Aplikacja RestApi w React TS
Stwórz aplikację w React + TypeScript, która pobiera dane z wybranego publicznego API i wyświetla je w formie listy.

## Wymagania
- Pobieranie danych: użyj `fetch` i `useEffect`
- obsłuż stany (*conditional rendering*):
  - *loading*,
    - w momencie, kiedy dane dopiero się pobierają (`fetc` jeszcze trwa).
    - użytkownik powinien zobaczyć np.  napis „Ładowanie danych…” 
  - *error*,
    - gdy pobieranie się nie uda (np. brak internetu, błąd serwera),
    - aplikacja powinna wyświetlić komunikat „Coś poszło nie tak, spróbuj ponownie” (`error.message`).
  - *empty*:
    - pobieranie się udało, ale lista jest pusta (np. filtr nie znalazł żadnych wyników).
    - Aplikacja powinna wyświetlić napis „Brak wyników do wyświetlenia”.  

## Wyświetlanie listy
- użyj `useState`
- lista elementów (np. kraje, postacie, filmy)
- element ma minimum: nazwę + dodatkową informację (np. region, status, rok wydania)

# Filtrowanie / wyszukiwanie
- pole tekstowe (input) do wyszukiwania po nazwie
- select / dropdown z filtrem (np. region, status, gatunek)
np.
```jsx
<input 
  type="text" 
  placeholder="Szukaj..." 
  value={searchText} 
  onChange={(e) => setSearchText(e.target.value)} 
/>

//...

<select value={filter} onChange={(e) => setFilter(e.target.value)}>
  <option value="">Wszystkie</option>
  <option value="Europe">Europa</option>
  <option value="Asia">Azja</option>
  <option value="Africa">Afryka</option>
</select>

```
np.
- `<input>` – uczeń wpisuje tekst, np. `po` , czyli filtrowanie po krajach zaczynających się od `po` filtruje kraje zawierające po → zostaje Poland.
- `<select>` – uczeń wybiera region, np. Europa, czyli filtrowanie tylko po krajach europy.

Oba filtry razem – działa jednocześnie: jeśli wpiszesz po i wybierzesz Europa, to zostaje tylko Poland.

## Szczegóły elementu 
po kliknięciu na element listy:
- wyświetl pod listą szczegóły wybranego obiektu (np. flaga, stolica, populacja w krajach)
- przycisk „Wróć” / „Ukryj szczegóły”


## Przykład działania
- Uczeń otwiera aplikację → pokazuje się spinner (loading) (np. `<p> Ładowanie danych ... </p>`).
- Po załadowaniu → lista elementów (np. kraje świata).
- Wpisanie w `input` „pol” → zostają tylko kraje, które mają w nazwie „Pol” (np. Poland).
- Kliknięcie na „Poland” → pod/obok listą pokazują się szczegóły (flaga, stolica, populacja).
- Kliknięcie „Ukryj szczegóły” → wraca sama lista.

