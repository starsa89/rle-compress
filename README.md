# RLE-сжатие

Сжатие и распаковка строк: (script.js)

* 'AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD' <=> 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'
* 'AVVVBBBVV XDH JFF FFDDDDDDHAAAAJJJD DSLSSSDDDD' <=> 'AV3B3V2 XDH JF2 F2D6HA4J3D DSLS3D4'
* 'AAVVVBBB/VV XDH JFF FFDDDDDD!!HAAA$AJJJD DSLSSSD&^DDD' <=> 'A2V3B3/V2 XDH JF2 F2D6!2HA3$AJ3D DSLS3D&^D3'
* 'AAVVV4BBBVV XDH JFF FFDDDD667DDHAAA9AJJJD DSLSSS8DDDD' <=> 'A2V34B3V2 XDH JF2 F2D4627D2HA39AJ3D DSLS38D4'
* 'AAVVV4BBB/VV XDH JFF FFDDDD667DD!!HAAA$AJJJD DSLSSS8D&^DDD' <=> 'A2V34B3/V2 XDH JF2 F2D4627D2!2HA3$AJ3D DSLS38D&^D3'

Добавлено тестирование: (test.js)

* "Буквы",
* "Буквы, пробелы",
* "Буквы, пробелы, знаки",
* "Буквы, пробелы, цифры",
* "Буквы, пробелы, цифры, знаки"
