---
name: kontur-web
description: Полный дизайн-система Контура (Kontur UI) для веба — два трека: продуктовые интерфейсы (react-ui, дашборды/формы/таблицы) и промо-лендинги (Promo UI). Реальные токены, иконки, логотипы, готовые блоки + поведенческий слой (UX-правила guides.kontur.ru) и бренд-профиль продукта. Use when building anything "в стиле Контура / по UI Контура / Kontur UI / promo-ui / react-ui", a Kontur landing, a Kontur product screen or prototype, or when Kontur brand/components are referenced.
---

# Kontur UI — дизайн-система Контура (веб)

Собрано из **официальных исходников** (npm `@skbkontur/*` + витрина Promo UI), не реверс. Разбор 2026-07-06.
Два трека:
- **Продуктовый интерфейс** (`react-ui`) — дашборды, формы, таблицы, кабинеты. Пример: `product/example-dashboard.html` (реплика Контур.Маркет).
- **Промо-лендинги** (`promo-ui`) — маркетинговые страницы из готовых блоков. Библиотека в `blocks/` + `controls/`.

Общий фундамент (`foundation/`) — токены, типографика, иконки, лого — используется обоими.
Третий слой — **поведение живого продукта**: `reference/ux-behavior.md` (выжимка guides.kontur.ru —
тайминги лоадеров, валидация, клавиатура, тексты интерфейса, поведение всех компонентов, радиусы
2/8/16 продуктового трека). Подгружай его при работе над интерактивным прототипом или когда нужен
не внешний вид, а правила: «что происходит при ошибке», «когда показывать спиннер», «как писать
плейсхолдеры».

## Бренд-профиль продукта (для прототипов конкретного продукта)

Когда собираешь прототип конкретного продукта Контура — сначала бренд-профиль:

1. Поищи в корне проекта `product-brand.md`. Есть — используй значения, вопросов не задавай.
2. Нет — спроси одним блоком: название продукта (и как пишется логотип), сегмент (по нему предложи
   цвет из таблицы ниже и попроси подтвердить), есть ли официальный логотип (сначала проверь
   `logos/svg/` и CDN v2 — скорее всего он уже есть у нас), доменная специфика данных (какие
   сущности наполнять реалистично).
3. **Никогда не угадывай фирменный цвет по названию продукта.** Либо цвет подтверждён
   пользователем, либо извлечён из присланного скриншота продукта (и тоже подтверждён).
4. Сохрани результат в `product-brand.md` в корне проекта (продукт, сегмент, акцентный цвет +
   тёмная пара, логотип, домен данных, дата подтверждения).

**Палитра продуктов по сегментам** (светлая тема / тёмная пара):

| Цвет | Светлая | Тёмная | Сегмент |
|---|---|---|---|
| Красный | `#FE4C4C` | `#661E42` | Инфраструктура и образование |
| Оранжевый | `#FC7630` | `#65182C` | Отчётность и бухгалтерия |
| Зелёный | `#25AD50` | `#004440` | Безопасность и риски (Фокус) |
| Мятный | `#00BEA2` | `#004055` | Документооборот |
| Голубой | `#2291FF` | `#15327B` | Торговля и коммуникации |
| Синий | `#366AF3` | `#292473` | Банки и закупки |
| Фиолетовый | `#844BEC` | `#402675` | Информбезопасность |
| Пурпурный | `#B750D1` | `#452A7A` | Недвижимость |

Точные градации выбранного цвета — в `foundation/brand-palettes/` (14 палитр light+dark).
Обвязка, делающая прототип «настоящим» (топбар с переключателем продуктов, блок пользователя,
футер «СКБ Контур с 1988 года» 80 px только на главной, плавающая кнопка помощи) — детали в
`reference/ux-behavior.md` раздел 13.

## Выжимай из системы максимум

Стиль Контура — это не только цвета и шрифт, это насыщенный продуктовый интерфейс. В твоём распоряжении вся система: топбар и сайдбар с локапами, 570 готовых инлайн-иконок, 251 логотип продуктов, карточки метрик, таблицы, панели, 16 промо-блоков со всеми вариантами. Чем полнее задействован этот арсенал, тем более контуровским получается результат — смело комбинируй и придумывай свои композиции на этих деталях.

**Продуктовый экран (дашборд, кабинет, настройки):**
- Посмотри глазами `product/example-dashboard.png` — ориентир композиции и плотности: сколько слоёв информации несёт один экран. Каркас `example-dashboard.html` можно взять стартом и перекроить, можно собрать своё — но по насыщенности целься на уровень эталона и выше.
- Дай экрану реальную структуру продукта: навигация, локап, метрики со значениями, статусы, подписи, суммы, проценты. Реалистичные данные вместо lorem.
- Отрендери PNG (Playwright, deviceScaleFactor=2) и посмотри глазами: если экран выглядит беднее эталона — в системе остались незадействованные возможности.

**Лендинг:** в `blocks/` 16 готовых блоков на `lib/promo-ui.css` — комбинируй свободно, наполняй своим контентом; ориентир — `landing/example-landing.png`.

**Быстрая самопроверка:** локап продукта · навигация · несколько типов виджетов с реалистичными данными · токены `--k-color-*` и типографика `.t-*` · иконки инлайн-SVG · насыщенность на уровне эталона.

## foundation/ — токены (источник: @skbkontur/colors 2.1.7, typography 1.0.1)
- **`colors.css`** — 319 семантических токенов `--k-color-*`, light в `:root`, dark в `.k-theme-dark` / `[data-theme="dark"]`. Подключай и пользуйся `var(--k-color-...)`.
  - Система именования: `text-*` (текст/иконки), `shape-*` (фоны/заливки, НЕ «bg»), `line-*` (границы/разделители, НЕ «border»), `surface-*` (крупные поверхности), `customizable-*` (перекрашиваемые бренд-акценты). Градации: `-faint / -pale / -soft / -heavy / -bold` + `-hover / -pressed` + `-inverted`.
  - Ключевые: бренд-красный `--k-color-shape-bold-brand-original: #FE4C4C`; текст `--k-color-text-neutral-heavy` (0.88), `-soft` (0.56), `-pale` (0.4); поверхности `--k-color-surface-base #fff` / `-low #f2f2f2`; границы `--k-color-line-neutral-faint` (0.08); статусы `--k-color-text-success-heavy #007f34`, `-error-heavy #c50220`, `-warning-heavy #d26e00`.
- **`brand-palettes/`** — 14 бренд-палитр (violet/blue/green/mint/red/orange/purple/blue-deep × accent-gray|brand), light+dark, JSON. Для перекрашиваемых продуктов.
- **`typography-offline.css` + `fonts/`** — те же классы, но Lab Grotesque (Regular/Medium/Bold, woff2) лежит локально: для рендера без сети подключать его вместо typography.css.
- **`typography.css`** — @font-face Lab Grotesque (CDN Контура) + классы `.t-heading-{s,m,l,xl,2xl,3xl,4xl,5xl}` (20→56px, вес 700) и `.t-body-{xs..3xl}` + `.t-body-wide-*` (вес 400, `tabular-nums`). Шкала в `typography-tokens.js`.
  - Шрифт: **Lab Grotesque** (в проде продукта — «Lab Grotesque K», визуально эквивалентен для HTML-рендера). Fallback Arial.

## icons/ — интерфейсные иконки (источник: @skbkontur/icons 2.0.10)
- **613 уникальных** иконок, веса Light/Regular/Solid, размеры 16/20/24/32/64. Полный список — `INDEX.md`.
- **`common/`** — 570 готовых SVG повседневных иконок (Search, Arrow*, Doc*, Money*, People*, Settings, Star, Bell, Home, Market*, Trash, Filter, Time*…), размеры 16 и 24.
- SVG монохромные, `fill="currentColor"` → **инлайнь SVG** в HTML, чтобы иконка наследовала цвет текста (через `<img src>` перекраска не работает).
- Любую другую иконку достать: `node icons/extract-icon.mjs <Name> <Light|Regular|Solid> <size>` (нужен пакет `@skbkontur/icons`, `ICONS_DIR=<.../icons>`).

## logos/ — логотипы продуктов (источник: @skbkontur/logos 3.0.3)
- **251 логотип** продуктов Контура в `svg/` (Market, Diadoc, Focus, Bank, Ai, Extern, Buhgalteria…). Dark/EN-версии — отдельные файлы (`Ai`/`AiEN`, `AktSverki`/`AktSverkiDark`). Список — `INDEX.md`.
- Внимание: `Market.svg` = только суб-бренд «Маркет». Полный локап = «Контур» (чёрный, Lab Grotesque 700) + продуктовый логотип. См. пример дашборда.
- **🆕 CDN v2 (залит Контуром 09.07.2026, найден 10.07):** `https://s.kontur.ru/common-v2/logos/v2/{product}/{product}[-en]-{28|32}[-vertical][-dark].svg` (+ `{product}-32@2x.png`). **185 продуктов × до 18 вариантов**: горизонтальный/вертикальный локап, светлый/тёмный, RU/EN, высота 28/32. Имена папок в kebab-case (`diadoc`, `akt_sverki`, `aegis-x-staffcop`). Листинг директорий ОТКРЫТ (`curl https://s.kontur.ru/common-v2/logos/v2/` отдаёт индекс) — публичный CDN, VPN не нужен. Богаче npm-пакета: там нет вертикальных локапов и @2x PNG. **Свежие логотипы бери отсюда; локальная `svg/` — офлайн-фоллбэк.**

## product/ — продуктовый трек (react-ui)
- **`react-ui-components.md`** — 50 компонентов `@skbkontur/react-ui` 6.1.3 (Button, Input, Select, ComboBox, Modal, SidePage, DatePicker, Toast, Tabs, Loader…). Тема `LIGHT_THEME` (6_1). `npm i @skbkontur/react-ui`.
- Смежные пакеты: `@skbkontur/table` (таблицы), `side-menu` (боковое меню сервисов), `empty-state`, `react-error-pages` (404/500), `mass-actions-panel`, `mini-skeleton`, `react-ui-validations`, `react-ui-addons` (Logotype/TopBar/UserAvatar/Fias).
- **`example-dashboard.html`** (+`.png`) — эталонная реплика Контур.Маркет на этих токенах: сайдбар с иконками, метрики, разбивка платежей, панель задач, промо-баннер. Собирается из `.template.html` ассемблером (инлайнит SVG из `icons/common` и `logos/svg`).
- **Как собирать продуктовый экран (HTML-путь):** удобный старт — копия `example-dashboard.html` (см. «Выжимай из системы максимум» выше); подключи `foundation/colors.css` + `typography.css`; фоны — `surface-*`/`shape-*`, текст — `text-neutral-*`, границы — `line-neutral-*`, акценты/статусы — `text-success/error/warning-heavy`, бренд — `shape-bold-brand-original`; иконки инлайнь из `icons/common`; лого из `logos/svg` + «Контур» текстом. Рендер HTML→PNG через Playwright (deviceScaleFactor=2).

## blocks/ + controls/ — промо-лендинги (источник: ws.testkontur.ru/promo-ui)
- **`blocks/` — 16 блоков лендинга**, реальная разметка всех вариантов каждого (из витрины, `Demo_demo__preview-html`): header, cover, features, advantages, steps, cards, text, video, review, partners, faq, events, map, tariffs, form, footer.
- **`controls/` — 15 контролов**: buttons, tabs, forms, slider, timer, tooltip, collapse, lightbox, lists, cards, labels, icons, images, video, lightbox-media.
- **`lib/promo-ui.css`** — полный CSS библиотеки (~540 КБ, main.18d4eaf3.css).
- **Архитектура:** блоки собираются из общего примитива `section` (этаж) → `section-block` (фон) → `section-block__content` / `__header` + сетка `row`/`col-sm-N`/`col-md-N` + типографика `.chapter`/`.t-medium`/`.t-large` + кнопки `.button.button_primary.button_size-medium.button_arrow`. Бывают беспоук-блоки (`cover-section`/`cover-block`). Модификаторы `_no-indents-*`, `_align-left/center`.
- **Как собирать лендинг:** `<link>` на `lib/promo-ui.css` + Lab Grotesque; взять нужные блоки из `blocks/{name}.html`, склеить в порядке header→cover→…→footer, заполнить контентом. Картинки/иконки блоков тянутся с CDN `ws.testkontur.ru`/`s.kontur.ru`. Пример — `landing/example-landing.html`.
- **Русская типографика (обязательно):** NBSP после однобуквенных предлогов («через&nbsp;интернет»), «ёлочки», ₽ после числа. Для НАШИХ текстов — без длинных тире (в промо Контура «—» встречается, это их контент).

## Полная карта портала Promo UI (38 страниц)
- `content/` (16) → блоки лендинга (см. `blocks/`).
- `controls/` (15) → интерактивные контролы (см. `controls/`).
- `layout/` — grid, sections, section-blocks (сетка 12 колонок, брейкпоинты 375/768/992/1200/1440; сырые страницы в `pages_raw/`).
- `styles/` — colors, typography, spacers, borders, backgrounds, responsive (правила — в `lib/promo-ui.css`).

## Источники (авторитетные)
- npm: `@skbkontur/{colors,typography,icons,logos,react-ui,table,side-menu,empty-state,react-error-pages,react-ui-addons,...}`. Обновить: `npm pack @skbkontur/<pkg>@latest`.
- Витрина Promo UI: https://ws.testkontur.ru/promo-ui/ (клиентский роутинг; deep-link 404, ходить кликом по сайдбару). Полный CSS: `/promo-ui/static/css/main.<hash>.css`.
- Гайды: https://guides.kontur.ru/re/ (icons/, logos/), брендбук https://in.kontur.ru/brandbook.

## Гочи
- k-color: `shape`=заливка, `line`=граница, `surface`=крупная поверхность. НЕТ префиксов `bg-`/`border-`.
- Иконки перекрашиваются только инлайн-SVG (`currentColor`), не через `<img>`.
- Promo-блоки = композиции `section-block` + сетка + типографика; бespoke-CSS почти нет (потому в CSS только `cover-section` именной).
- Lab Grotesque: лицензия Контура; для сторонних проектов — Arial fallback.

**Производственная цепочка прототипов:** собрал экран этим скиллом → перед показом респондентам
прогони `research-ready-prototype` (аудит жаргона, прайминга, достоверности данных) → для показа
собери `prototype-demo-guide` (гайд ведущего с фразами-триггерами и скриншотами).
Связанный скилл: `kontur-deck` (презентации Контура).

## Файлы
`foundation/{colors.css, typography.css, typography-tokens.js, brand-palettes/}` · `icons/{INDEX.md, common/*.svg, extract-icon.mjs}` · `logos/{INDEX.md, svg/*.svg}` · `product/{react-ui-components.md, example-dashboard.html, .png, .template.html}` · `blocks/*.html` (16) · `controls/*.html` (15) · `lib/promo-ui.css` · `reference/ux-behavior.md`
