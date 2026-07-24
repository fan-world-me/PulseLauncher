# PulseLauncher

**PulseLauncher** — минималистичный Android-лаунчер, который мгновенно перенаправляет на экран измерения пульса в приложении **Mi Health Global** (`com.mi.healthglobal`), а затем полностью исчезает — без окон в истории, без следов в последних приложениях.

---

## Как работает

1. Пользователь нажимает иконку **Pulse Launcher** на рабочем столе
2. Приложение **мгновенно** запускает экран измерения пульса Mi Health
3. PulseLauncher **полностью закрывается** (`finishAndRemoveTask`) — не остаётся ни в истории, ни в последних приложениях

---

## Требования

- Android 5.0+ (API 21+)
- Установленное приложение **Mi Health Global** (`com.mi.healthglobal`)

---

## Установка

1. Скачать `PulseLauncher.apk`
2. Включить «Установка из неизвестных источников» в настройках Android
3. Установить APK
4. Нажать иконку на рабочем столе

---

## Что внутри

| Параметр | Значение |
|----------|----------|
| Package | `com.yarik.pulselauncher` |
| Target Activity | `com.mi.healthglobal.heartrate.ui.HeartRateDetectActivity` |
| Fallback | 3 альтернативных пути + getLaunchIntentForPackage |
| Подпись APK | v3 (zipalign + uber-apk-signer) |
| Иконка | Адаптивная (mipmap-anydpi-v26), сердце с пульсом |
| Theme | `Translucent.NoTitleBar` — невидимое окно |
| History | `noHistory + excludeFromRecents + taskAffinity=""` |

---

## Сборка из исходников

### Зависимости
- Java 17+
- [apktool](https://apktool.org/) 2.x
- [uber-apk-signer](https://github.com/patrickfav/uber-apk-signer)

### Шаги

```bash
# Декомпилировать оригинальный APK
apktool d PulseLauncher.apk -o PulseLauncher_src

# Собрать
apktool b PulseLauncher_src -o PulseLauncher_rebuilt.apk

# Подписать (v1+v2+v3)
java -jar uber-apk-signer.jar \
  --apks PulseLauncher_rebuilt.apk \
  --out ./signed \
  --ks debug.keystore \
  --ksAlias androiddebugkey \
  --ksPass android \
  --ksKeyPass android
```

---

## Лицензия

GNU General Public License v3.0 — см. [LICENSE](LICENSE)
