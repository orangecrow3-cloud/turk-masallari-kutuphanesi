# 📜 Türk Masalları Kütüphanesi - Etnik Ferman Koleksiyonu

Türk halk anlatı geleneğinin seçkin masallarını geleneksel **Etnik Ferman ve Parşömen** konseptiyle dijital ortama taşıyan, harici (external) mimariyle yapılandırılmış interaktif web uygulaması.

## 📂 Proje Dosya Yapısı
Bu sürümde proje modüler web geliştirme standartlarına uygun olarak üç ayrı harici dosyaya ayrılmıştır:

* **`index.html`**: Semantik HTML5 iskeleti, 8 masal ferman kartı yapısı ve harici dosya (`<link>`, `<script>`) bağlantıları.
* **`style.css`**: Etnik çini renk paleti, ferman açılış animasyonları (`cubic-bezier`), Gece/Gündüz Çinisi teması, duyarlı (responsive) düzen ve özel yazdırma (`@media print`) kuralları.
* **`script.js`**: Canlı arama algoritması (`filterTales`), kategori filtreleme (`filterByCategory`), tema değiştirici (`toggleTheme`), dinamik okundu sayacı, rastgele masal seçimi ve panoya kopyalama betikleri.
* **`README.md`**: Proje dokümantasyonu ve kullanım kılavuzu.

## ✨ Öne Çıkan Özellikler
* **8 Seçkin Türk Masalı:** *Keloğlan Masalları*, *Halk Hikayeleri* ve *Sihirli Masallar* kategorilerinde kaynakçalı ve özgün özetler.
* **Etkileşimli Ferman Kartları:** Saf CSS geçişleriyle süzülerek açılan ahşap rulolu parşömen görünümü.
* **Gece / Gündüz Çinisi Teması:** CSS `:root` değişkenleri ile tek tıkla renk paleti değişimi.
* **Canlı Arama & Filtreleme:** Başlık ve kategori bazlı anlık DOM filtrelemesi ile sonuç bulunamadı uyarısı.
* **Okuma Takibi & Yardımcı Araçlar:** Okundu durumu mühürleme, rastgele masal getirme, metin kopyalama ve yazdırma desteği.
* **Offline Kalıcılık:** Harici kütüphane (Bootstrap, jQuery vb.) gerektirmeden ve yedekli font tanımlarıyla internetsiz çalışabilir yapı.

## 🚀 Kurulum ve Çalıştırma
1. Depoyu bilgisayarınıza indirin veya klonlayın:

