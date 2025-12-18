@echo off
REM Script untuk setup environment variables untuk Resend Email (Windows)

echo === Setup Environment Variables untuk Resend Email ===
echo.

REM Cek apakah file .env sudah ada
if exist .env (
    echo File .env sudah ada. Konfigurasi email akan ditambahkan.
    echo. >> .env
    echo # Resend Email Configuration >> .env
) else (
    echo Membuat file .env baru...
    type nul > .env
)

REM Tambahkan konfigurasi Resend
echo. >> .env
echo # Resend API Key >> .env
echo RESEND_API_KEY=re_VQFSi5jW_8GNoCKd6RuAezbxKDkYZS758 >> .env
echo. >> .env
echo # Email Configuration >> .env
echo # EMAIL_FROM harus menggunakan domain yang sudah di-verify di Resend >> .env
echo # Untuk testing, bisa pakai "onboarding@resend.dev" (domain default Resend) >> .env
echo EMAIL_FROM=Portfolio ^<onboarding@resend.dev^> >> .env
echo # Email tujuan untuk menerima pesan dari contact form >> .env
echo EMAIL_TO=mhmmdfrhhnn@gmail.com >> .env
echo. >> .env
echo # Aktifkan Contact Form >> .env
echo NEXT_PUBLIC_CONTACT_FORM_ENABLED=true >> .env

echo.
echo ✅ Konfigurasi berhasil ditambahkan ke file .env
echo.
echo Catatan:
echo - Untuk production, pastikan EMAIL_FROM menggunakan domain yang sudah di-verify di Resend
echo - Verifikasi domain di: https://resend.com/domains
echo - Restart development server setelah setup: pnpm dev
echo.
pause

