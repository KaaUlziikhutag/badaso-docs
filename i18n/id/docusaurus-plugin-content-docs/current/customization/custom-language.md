---
docId: "customlanguage"
sidebar_position: 7
custom_edit_url: https://github.com/uasoft-indonesia/badaso-docs/edit/main/i18n/id/docusaurus-plugin-content-docs/current/customization/custom-language.md
---

# Custom Language

Badaso juga mendukung untuk kustomisasi bahasa. Badaso menggunakan plugin [Vue-i18n by Kazupon](https://kazupon.github.io/vue-i18n/) untuk internasionalisasi. Blok di bawah ini adalah struktur direktori untuk menambahkan bahasa baru atau untuk mengganti (override) terjemahan bahasa saat ini.

## Menambahkan atau Override Bahasa

Untuk menambahkan bahasa baru, anda bisa membuat file js di dalam direktori lang yang disediakan badaso seperti struktur dibawah.

```bash
📦 Your Project
┣ 📂 resources
┃ ┣ 📂 js
┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┣ 📂 lang
┃ ┃ ┃ ┃ ┣ 📜 lang.js /** Your lang here **/
```

File tersebut harus berisi 2 variable yang di eksport. Contoh: fr.js

```bash
export const label = 'France'
export default {
};
```

Variable default adalah struktur object bahasa dan label adalah variable yang digunakan sebagai option pada dropdown pemilihan bahasa di dashboard.
Bahasa yang ditambahkan akan otomatis terdaftar pada dropdown pemilihan bahasa.

## Override Existing Language

Badaso menyediakan bahasa Inggris dan Indonesia. Anda bisa menimpa label-label yang disediakan dengan membuat file id.js dan en.js di dalam direktori lang. Untuk ini, tidak diperlukan variable `label. Anda dapat menemukan struktur object lang badaso pada struktur dibawah.

```bash
📦 Your Project
┣ 📂 vendor
┃ ┣ 📂 uasoft-indonesia
┃ ┃ ┣  📂 badaso
┃ ┃ ┃ ┣ 📂 src
┃ ┃ ┃ ┃ ┣ 📂 resources
┃ ┃ ┃ ┃ ┃ ┣ 📂 js
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂 lang
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂 modules
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜 id.js
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜 en.js
```

Ikuti struktur object untuk menimpa atau tambahkan property baru untuk menambahkan label baru
