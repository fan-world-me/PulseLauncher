[![Telegram](https://img.shields.io/badge/Telegram-@fan__world__me-2CA5E0?style=flat-square&logo=telegram)](https://t.me/fan_world_me)   [![Discord](https://img.shields.io/badge/Discord-fan__world__me-5865F2?style=flat-square&logo=discord)](https://discord.com/users/1040301536036786248)   [![GitHub](https://img.shields.io/badge/GitHub-fan--world--me-181717?style=flat-square&logo=github)](https://github.com/fan-world-me)   [![Portfolio](https://img.shields.io/badge/Portfolio-fan--world--me.github.io-00e5ff?style=flat-square&logo=githubpages&logoColor=white)](https://fan-world-me.github.io/)

# PulseLauncher

**PulseLauncher** — минималистичный Android-лаунчер, который мгновенно перенаправляет на экран измерения пульса в приложении **Mi Health Global** (`com.mi.healthglobal`), а затем полностью исчезает — без окон в истории, без следов в последних приложениях.

### 💭 Как работает

1. 👆 Пользователь нажимает иконку **Pulse Launcher** на рабочем столе
2. ⚡ Приложение **мгновенно** запускает экран измерения пульса Mi Health
3. 👻 PulseLauncher **полностью закрывается** (`finishAndRemoveTask`) — не остаётся ни в истории, ни в последних приложениях

---

### 🧰 Tech Stack

![Android](https://img.shields.io/badge/Android-5.0%2B-3DDC84?style=flat-square&logo=android&logoColor=white)
![Java](https://img.shields.io/badge/Java-17+-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![apktool](https://img.shields.io/badge/apktool-2.x-00e5ff?style=flat-square)
![Mi Health](https://img.shields.io/badge/Mi_Health-Global-FF6900?style=flat-square&logo=xiaomi&logoColor=white)

---

### 📋 Требования

- Android 5.0+ (API 21+)
- Установленное приложение **Mi Health Global** (`com.mi.healthglobal`)

---

### 📦 Установка

```
1. Скачать PulseLauncher.apk
2. Включить «Установка из неизвестных источников» в настройках Android
3. Установить APK
4. Нажать иконку на рабочем столе
```

---

### 🔍 Что внутри

| Параметр | Значение |
|---|---|
| Package | `com.yarik.pulselauncher` |
| Target Activity | `com.mi.healthglobal.heartrate.ui.HeartRateDetectActivity` |
| Fallback | 3 альтернативных пути + getLaunchIntentForPackage |
| Подпись APK | v3 (zipalign + uber-apk-signer) |
| Иконка | Адаптивная (mipmap-anydpi-v26), сердце с пульсом |
| Theme | `Translucent.NoTitleBar` — невидимое окно |
| History | `noHistory + excludeFromRecents + taskAffinity=""` |

---

### 🛠️ Сборка из исходников

**Зависимости**

- Java 17+
- [apktool](https://apktool.org/) 2.x
- [uber-apk-signer](https://github.com/patrickfav/uber-apk-signer)

**Шаги**

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

### 📄 Лицензия

[GPL-3.0](LICENSE) © [fan-world-me](https://github.com/fan-world-me)

---

Made with 🩵 in Ukraine 🇺🇦

[![Telegram](https://img.shields.io/badge/Telegram-@fan__world__me-2CA5E0?style=flat-square&logo=telegram)](https://t.me/fan_world_me)   [![Discord](https://img.shields.io/badge/Discord-fan__world__me-5865F2?style=flat-square&logo=discord)](https://discord.com/users/1040301536036786248)   [![Portfolio](https://img.shields.io/badge/Portfolio-fan--world--me.github.io-00e5ff?style=flat-square&logo=githubpages&logoColor=white)](https://fan-world-me.github.io/)
