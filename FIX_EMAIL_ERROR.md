# Fix Error 403: Email Testing Restriction

## Masalah

Error: "You can only send testing emails to your own email address (farhanabdullah2210@gmail.com)"

## Solusi Cepat

**Ubah file `.env` di root project** (sama level dengan `package.json`):

```env
# Pastikan EMAIL_TO sama dengan email yang terdaftar di Resend
EMAIL_TO=farhanabdullah2210@gmail.com
```

## Langkah Detail

1. **Buka file `.env`** di root project

   - Lokasi: `C:\project coding\portofolio-farhanfym\.env`

2. **Cari baris `EMAIL_TO=`** dan pastikan isinya:

   ```env
   EMAIL_TO=farhanabdullah2210@gmail.com
   ```

   **BUKAN** `EMAIL_TO=mhmmdfrhhnn@gmail.com`

3. **Pastikan file `.env` lengkap seperti ini:**

   ```env
   RESEND_API_KEY=re_VQFSi5jW_8GNoCKd6RuAezbxKDkYZS758
   EMAIL_FROM=Portfolio <onboarding@resend.dev>
   EMAIL_TO=farhanabdullah2210@gmail.com
   NEXT_PUBLIC_CONTACT_FORM_ENABLED=true
   ```

4. **Restart development server:**

   ```bash
   # Tekan Ctrl+C untuk stop server
   # Lalu jalankan lagi:
   pnpm dev
   ```

5. **Test lagi form contact**

## Verifikasi

Setelah restart, coba kirim form lagi. Email akan dikirim ke `farhanabdullah2210@gmail.com`.

## Catatan

- Untuk testing, Resend hanya mengizinkan pengiriman ke email yang terdaftar di akun
- Email yang terdaftar: `farhanabdullah2210@gmail.com`
- Setelah verify domain di Resend, bisa mengirim ke email apa saja
