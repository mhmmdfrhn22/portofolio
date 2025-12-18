#!/bin/bash

# Script untuk setup environment variables untuk Resend Email

echo "=== Setup Environment Variables untuk Resend Email ==="
echo ""

# Cek apakah file .env sudah ada
if [ -f .env ]; then
    echo "File .env sudah ada. Apakah Anda ingin menambahkan konfigurasi email? (y/n)"
    read -r response
    if [[ ! "$response" =~ ^[Yy]$ ]]; then
        echo "Setup dibatalkan."
        exit 0
    fi
    echo "" >> .env
    echo "# Resend Email Configuration" >> .env
else
    echo "Membuat file .env baru..."
    touch .env
fi

# Tambahkan konfigurasi Resend
cat >> .env << EOF

# Resend API Key
RESEND_API_KEY=re_VQFSi5jW_8GNoCKd6RuAezbxKDkYZS758

# Email Configuration
# EMAIL_FROM harus menggunakan domain yang sudah di-verify di Resend
# Untuk testing, bisa pakai "onboarding@resend.dev" (domain default Resend)
EMAIL_FROM=Portfolio <onboarding@resend.dev>
# Email tujuan untuk menerima pesan dari contact form
EMAIL_TO=mhmmdfrhhnn@gmail.com

# Aktifkan Contact Form
NEXT_PUBLIC_CONTACT_FORM_ENABLED=true
EOF

echo ""
echo "✅ Konfigurasi berhasil ditambahkan ke file .env"
echo ""
echo "Catatan:"
echo "- Untuk production, pastikan EMAIL_FROM menggunakan domain yang sudah di-verify di Resend"
echo "- Verifikasi domain di: https://resend.com/domains"
echo "- Restart development server setelah setup: pnpm dev"
echo ""

