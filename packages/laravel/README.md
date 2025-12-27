# 🇵🇸 Palestine Footer - Laravel

[![Packagist Version](https://img.shields.io/packagist/v/youssef-osama/palestine-footer-laravel.svg)](https://packagist.org/packages/youssef-osama/palestine-footer-laravel)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Laravel](https://img.shields.io/badge/Laravel-9%2B-red.svg)](https://laravel.com/)

> تذييل احترافي للتضامن مع فلسطين - مكون Laravel Blade

---

## ✨ المميزات | Features

- ✅ **Laravel 9+** - دعم كامل
- ✅ **Blade Component** - سهل الاستخدام
- ✅ **Config File** - قابل للتخصيص
- ✅ **@once Directive** - لا تكرار للخطوط
- ✅ **Service Provider** - Auto-discovery
- ✅ **Publishable** - Views & Config

---

## 📦 التثبيت | Installation

```bash
composer require youssef-osama/palestine-footer-laravel
```

---

### نشر الملفات (اختياري)

```bash
# نشر ملف الإعدادات
php artisan vendor:publish --tag=palestine-footer-config

# نشر ملفات الـ Views (للتخصيص)
php artisan vendor:publish --tag=palestine-footer-views

# مسح الـ Cache
php artisan config:clear
php artisan view:clear
```

---

## 🚀 الاستخدام | Usage

### 1. استخدام بسيط

```blade
{{-- resources/views/layouts/app.blade.php --}}
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <title>{{ config('app.name') }}</title>
</head>
<body>
    @yield('content')
    
    {{-- Palestine Footer --}}
    <x-palestine-footer />
</body>
</html>
```

---

### 2. مع Props مخصصة

```blade
<x-palestine-footer 
    :year="2024"
    hostName="موقع فلسطين"
    message="من النهر إلى البحر"
    :showMessage="true"
    backgroundColor="#1a1a1a"
    textColor="#f0f0f0"
/>
```

---

### 3. استخدام الـ Config

```php
// config/palestine-footer.php
return [
    'enabled' => true,
    'year' => 2024,
    'host_name' => 'موقعنا',
    'show_message' => true,
];
```

```blade
{{-- سيتم استخدام القيم من الـ Config تلقائياً --}}
<x-palestine-footer />
```

---

### 4. متغيرات البيئة (.env)

```env
PALESTINE_FOOTER_ENABLED=true
PALESTINE_FOOTER_YEAR=2024
PALESTINE_FOOTER_HOST_NAME="موقع فلسطين"
PALESTINE_FOOTER_MESSAGE="من النهر إلى البحر"
PALESTINE_FOOTER_SHOW_MESSAGE=true
PALESTINE_FOOTER_BG_COLOR="#000000"
PALESTINE_FOOTER_TEXT_COLOR="#ffffff"
```

---

## 🎨 Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `year` | `int` | `date('Y')` | السنة |
| `hostName` | `string` | `config('app.name')` | اسم الموقع |
| `message` | `string` | `"نحن نقف مع..."` | الرسالة |
| `showMessage` | `bool` | `true` | إظهار الرسالة |
| `backgroundColor` | `string` | `"#000000"` | لون الخلفية |
| `textColor` | `string` | `"#ffffff"` | لون النص |

---

## 📖 أمثلة | Examples

### مع Livewire

```blade
{{-- resources/views/livewire/home.blade.php --}}
<div>
    <h1>الصفحة الرئيسية</h1>
    
    <x-palestine-footer />
</div>
```

---

### Conditional Rendering

```blade
@if(config('palestine-footer.enabled'))
    <x-palestine-footer />
@endif
```

---

### في Layout محدد

```blade
{{-- resources/views/layouts/guest.blade.php --}}
@extends('layouts.app')

@section('content')
    @yield('guest-content')
@endsection

@section('footer')
    <x-palestine-footer 
        hostName="Guest Site"
        backgroundColor="#1a1a1a"
    />
@endsection
```

---

## 🌐 التوافق | Compatibility

| Laravel Version | PHP Version | Support |
|-----------------|-------------|---------|
| 9.x | 8.0+ | ✅ |
| 10.x | 8.1+ | ✅ |
| 11.x | 8.2+ | ✅ |

---

## 🔧 التخصيص المتقدم | Advanced Customization

### تعديل الـ View

بعد نشر الـ Views:

```bash
php artisan vendor:publish --tag=palestine-footer-views
```

عدّل الملف:
```
resources/views/vendor/palestine-footer/components/palestine-footer.blade.php
```

---

### إنشاء Helper Function

```php
// app/Helpers/helpers.php

if (!function_exists('palestine_footer')) {
    function palestine_footer(array $data = []) {
        return view('palestine-footer::components.palestine-footer', array_merge([
            'year' => date('Y'),
            'hostName' => config('app.name'),
            'message' => config('palestine-footer.message'),
            'showMessage' => true,
            'backgroundColor' => '#000000',
            'textColor' => '#ffffff',
        ], $data))->render();
    }
}
```

الاستخدام:
```blade
{!! palestine_footer(['year' => 2024]) !!}
```

---

## 📂 هيكل المشروع | Project Structure

```
packages/laravel/
├── config/
│   └── palestine-footer.php
├── resources/
│   └── views/
│       └── components/
│           └── palestine-footer.blade.php
├── src/
│   ├── PalestineFooterServiceProvider.php
│   └── View/
│       └── Components/
│           └── PalestineFooter.php
├── tests/
├── composer.json
└── README.md
```

---

## 🧪 الاختبار | Testing

```bash
composer test
```

---

## 🤝 المساهمة | Contributing

نرحب بجميع المساهمات! 🇵🇸

---

## 📄 الترخيص | License

MIT License

---

## 🔗 الروابط | Links

- [GitHub](https://github.com/Youssef-osama33/Support-Palestine-)
- [Packagist](https://packagist.org/packages/youssef-osama/palestine-footer-laravel)
- [Issues](https://github.com/Youssef-osama33/Support-Palestine-/issues)

---

<div align="center">

### 🇵🇸 من النهر إلى البحر، فلسطين حرة 🇵🇸

**Made with ❤️ for Palestine**

</div>
