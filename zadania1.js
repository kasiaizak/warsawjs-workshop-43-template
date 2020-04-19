/** 1.
  Zaimplementuj moduł Samochodu, który ma
  A) - wewnętrzną (prywatną) właściwość - ilość benzyny (liczba)
     - wewnątrzną metodę spalania przjmującą za parametr ilość i albo ją odejmującą od ilości benzyny, albo wyświetlającą w konsoli wiadomość i pustym baku :(
  B) niech moduł zwraca obiekt z właściwością liczbową stacji radiowej, metodą by ją zmienić oraz drugą służącą do jechania, przyjmującą za parametr prędkość(liczba) i wykonywującą metodę z pkt. A
*/

/** 2.
  Stwórz moduł - singleton. Niech posiada:
  A) wewnętrzny stan - listę produków
  B) api:
    - publiczną metodę do dodawania produktu/ów
    - publiczną metodę do usuwania produktu/ów
    - publiczną metodę do wylistowania nazw produktów w stringu
    - publiczną metodę do usortowania produktów wg ceny
    - najważniejsze: niech pozwala na zsumowanie cen za produkty
*/

function MyCar() {
  var amountPetrol = 23;
  function Combustion(i) {
    if (amountPetrol - i > 0) {
      console.log('Jedziemy')
    } else {
      console.log('Brak paliwa')
    }
  }
  return {
    Drive: function(speed) {
      return Combustion(speed);
    }
  }
}

var car = MyCar();
car.Drive(3);