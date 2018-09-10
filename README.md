# Тестовое задание в Web-карты

Для кластеризации используется наивный алгорим O(n^2),
при этом на больших n он надолго блокирует главный поток.
Большая часть сложности алгоритма возникает из-за того, что
приходится перебирать все маркеры на каждом шаге. Чтобы этого
избежать, можно использовать пространственный индекс, например
R-tree.
Избавиться от блокировки главного потока можно с помощью
Web Workers.

Также при большом количестве маркеров на карте падает FPS.
На самом деле нам не обязательно держать на карте маркеры,
которые сейчас находятся вне видимой области. Можно добавлять
на карту только видимую часть маркеров и при прокрутке карты
выгружать часть маркеров, выпавших из поля зрения,
и добавлять новые.