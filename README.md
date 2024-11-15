# Приложение для генерации qr кода

**На чем написано:**
- React
- Redux toolkit
- TypeScript
- Tailwind
- Styled-components

<br>

# Что реализовано в приложении?
- Маршрутизация `React Router` Если перейти на несуществующую страницу, то покажем страницу ошибки.
- Адаптация под малые устройства.
- Если контента нету, то footer всегда прижат к низу.
- Если url пустой, то покажется красная кнопка "Введите url" с иконкой крестика, если ввести url, то кнопка поменяется плавно на зеленую и будет написано "Сгенерировать Qr", и иконка поменяется на стрелочку.
- Когда нажимаем на главную или на сгенерировать еще, или на лого, то поле ввода url очищается.

<br>

- История сгенерированных qr:
  - При генерации qr, записываем данные в `localStorage` если они еще не записаны.
  - Если в истории нету qr, то выведется надпись: "Нет сгенерированных Qr".
  - Удаление определенного qr, из истории.
  - Возможность скачивать qr в форматах `png` и `svg`. 
  - И так же в header счетчик, сколько всего элементов в истории, который меняется сразу при добавлении или удалении из localStorage.
  
<br>

- Генерация qr кода, на основе введенных данных, через библиотеку `qrcode.react`:
    - Переход на другую страницу, со сгенерированным qr из поля url, и так же с возможностью скачать qr код в `svg` или `png` форматах и так же кнопка "сгенерировать еще". Так же если ссылка очень длинная то часть ссылки покажется, а остальное заменяется на "...".
    - Запись в localStorage, для использовании в истории.      
    - При наводе на сгенерированный qr code, курсор исчезает, так как из за него не срабатывает считывание qr кода, поскольку не все люди додумаются убрать курсор.
    - Если человек вышел из сгенерированного qr кода, но перейдет опять по ссылке которая сформировалась когда он сгенерировал qr код, то прошлые введенные данные удаляться(но будут записаны в историю если ранее не были записаны), и покажется сообщение "сгенерируйте qr code" вместо ссылки, и будет гифка вместо qr кода. Так же пропадут кнопки скачивания изображения, останется одна, "Сгенерировать qr код".

<br>

<br>

[🔗 Ссылка на сайт](qr-generators1.vercel.app) 


<br>

<br>

## Как установить проект себе?
1. Клонировать репозиторий:

```ruby
git clone https://github.com/eugKlim/Qr-Generator.git
```

2. Установить зависимости:

```ruby
npm install
```

3. Запустить проект:

```ruby
npm run dev
```

