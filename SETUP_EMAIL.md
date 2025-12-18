# Setup Email dengan Resend

## Konfigurasi Environment Variables

Buat file `.env` di **root project** (sama level dengan `package.json`) dengan konfigurasi berikut:

```env
# Resend API Key
RESEND_API_KEY=re_VQFSi5jW_8GNoCKd6RuAezbxKDkYZS758

# Email Configuration
# EMAIL_FROM harus menggunakan domain yang sudah di-verify di Resend
# Untuk testing, bisa pakai "onboarding@resend.dev" (domain default Resend)
EMAIL_FROM=Portfolio <onboarding@resend.dev>
# Email tujuan untuk menerima pesan dari contact form
# PENTING: Untuk testing, EMAIL_TO harus sama dengan email yang terdaftar di akun Resend
# Email yang terdaftar: farhanabdullah2210@gmail.com
EMAIL_TO=farhanabdullah2210@gmail.com

# Aktifkan Contact Form
NEXT_PUBLIC_CONTACT_FORM_ENABLED=true
```

## Catatan Penting

### EMAIL_FROM

- **Untuk Testing**: Gunakan `onboarding@resend.dev` (domain default Resend yang sudah tersedia)
- **Untuk Production**:
  - Verifikasi domain Anda di: https://resend.com/domains
  - Format: `"Nama <email@domain.com>"` atau `"email@domain.com"`
  - Contoh: `"Portfolio <noreply@yourdomain.com>"`

### EMAIL_TO

- Email yang akan menerima pesan dari contact form
- **PENTING untuk Testing**: Harus sama dengan email yang terdaftar di akun Resend Anda
- Email yang terdaftar: `farhanabdullah2210@gmail.com`
- Untuk production, setelah verify domain, bisa menggunakan email apa saja

## Cara Kerja

1. User mengisi form di halaman contact
2. Form melakukan validasi captcha (Turnstile) jika diaktifkan
3. Data dikirim ke server action (`contactSubmit`)
4. Server mengirim email melalui Resend ke `EMAIL_TO`
5. User mendapat notifikasi sukses

## Testing

Setelah environment variables di-set:

1. **Restart development server**:

   ```bash
   pnpm dev
   ```

2. Buka halaman contact di browser

3. Isi form dan submit

4. Cek email di inbox `farhanabdullah2210@gmail.com`

## Optional: Cloudflare Turnstile (Captcha)

Jika ingin menambahkan captcha untuk keamanan tambahan, tambahkan ke `.env`:

```env
TURNSTILE_SECRET_KEY=your_secret_key
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
```

Dapatkan keys dari: https://developers.cloudflare.com/turnstile/

## Troubleshooting

### Email tidak terkirim

- Pastikan `RESEND_API_KEY` sudah benar
- Pastikan `EMAIL_FROM` menggunakan domain yang sudah di-verify
- **PENTING**: Untuk testing, `EMAIL_TO` harus sama dengan email yang terdaftar di akun Resend
- Jika error 403: "You can only send testing emails to your own email address", ganti `EMAIL_TO` ke email yang terdaftar di Resend (`farhanabdullah2210@gmail.com`)
- Cek console untuk error messages
- Pastikan `NEXT_PUBLIC_CONTACT_FORM_ENABLED=true`

### Form tidak muncul

- Pastikan `NEXT_PUBLIC_CONTACT_FORM_ENABLED=true` di-set
- Jika tidak di-set atau `false`, form akan menggunakan `mailto:` link sebagai fallback

### Error "Contact form configuration missing"

- Pastikan `EMAIL_FROM` dan `EMAIL_TO` sudah di-set di `.env`
- Restart development server setelah mengubah `.env`
