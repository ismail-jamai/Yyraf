# 🚀 Backend Laravel - Yuraf Network

Backend API complet pour la plateforme Yuraf Network (دروبشيبينغ المغرب), créé avec Laravel 10.

## 📋 Vue d'ensemble

Ce backend fournit une API REST complète pour gérer:
- ✅ Authentification utilisateur (inscription, connexion, déconnexion)
- ✅ Vérification email et téléphone
- ✅ Gestion des services (Import, Storage, Dropshipping, Money Transfer)
- ✅ Messages de contact
- ✅ Profils utilisateurs

## 🏗️ Structure du projet

```
backend/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── AuthController.php          # Authentification
│   │   │   ├── VerificationController.php  # Vérification email/téléphone
│   │   │   ├── UserController.php          # Gestion utilisateur
│   │   │   ├── ServiceController.php       # Services
│   │   │   └── ContactController.php       # Contact
│   │   └── Middleware/
│   │       ├── Cors.php                    # CORS
│   │       └── VerifyCsrfToken.php        # CSRF
│   └── Models/
│       ├── User.php                       # Modèle utilisateur
│       ├── Service.php                    # Modèle service
│       ├── VerificationCode.php          # Codes de vérification
│       └── ContactMessage.php             # Messages de contact
├── database/
│   ├── migrations/                        # Migrations de base de données
│   └── seeders/
│       ├── DatabaseSeeder.php
│       └── ServiceSeeder.php              # Seeder pour les services
├── routes/
│   └── api.php                           # Routes API
└── README.md                             # Documentation complète
```

## 🚀 Installation rapide

### 1. Prérequis
- PHP >= 8.1
- Composer
- MySQL/MariaDB
- Extension PHP: pdo_mysql, mbstring, openssl, tokenizer, xml, ctype, json

### 2. Installation

```bash
# Aller dans le dossier backend
cd backend

# Installer les dépendances
composer install

# Copier le fichier .env
cp .env.example .env

# Générer la clé d'application
php artisan key:generate

# Configurer la base de données dans .env
# DB_DATABASE=yuraf_network
# DB_USERNAME=root
# DB_PASSWORD=

# Exécuter les migrations
php artisan migrate

# Seeder les services
php artisan db:seed --class=ServiceSeeder

# Démarrer le serveur
php artisan serve
```

L'API sera accessible sur `http://localhost:8000`

## 📡 Endpoints API

### Base URL: `http://localhost:8000/api`

### 🔐 Authentification

| Méthode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| POST | `/register` | Inscription | Non |
| POST | `/login` | Connexion | Non |
| POST | `/logout` | Déconnexion | Oui |
| GET | `/user` | Utilisateur actuel | Oui |

### ✅ Vérification

| Méthode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| POST | `/send-email-verification` | Envoyer code email | Non |
| POST | `/verify-email` | Vérifier email | Non |
| POST | `/send-phone-verification` | Envoyer code téléphone | Non |
| POST | `/verify-phone` | Vérifier téléphone | Non |

### 🛠️ Services

| Méthode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| GET | `/services` | Liste des services | Non |
| GET | `/services/{id}` | Détails d'un service | Non |

### 📧 Contact

| Méthode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| POST | `/contact` | Envoyer un message | Non |

### 👤 Profil

| Méthode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| PUT | `/user/profile` | Mettre à jour le profil | Oui |
| GET | `/user/orders` | Commandes utilisateur | Oui |

## 📝 Exemples d'utilisation

### Inscription

```bash
curl -X POST http://localhost:8000/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "first_name": "Ahmed",
    "last_name": "Benali",
    "email": "ahmed@example.com",
    "phone": "612345678",
    "country_code": "+212",
    "city": "Casablanca",
    "address": "123 Rue Example",
    "country": "morocco",
    "postal_code": "20000",
    "cin": "AB123456",
    "rib": "123456789012345678901234",
    "bank_type": "attijariwafa",
    "password": "password123",
    "password_confirmation": "password123",
    "service_type": "dropshipping"
  }'
```

### Connexion

```bash
curl -X POST http://localhost:8000/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "ahmed@example.com",
    "password": "password123"
  }'
```

### Requête authentifiée

```bash
curl -X GET http://localhost:8000/api/user \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## 🗄️ Base de données

### Tables créées

1. **users** - Utilisateurs de la plateforme
2. **verification_codes** - Codes de vérification
3. **services** - Services proposés
4. **contact_messages** - Messages de contact

### Services par défaut

Les services suivants sont créés automatiquement:
- Import (الاستيراد)
- Storage (التخزين)
- Dropshipping (الدروبشيبينغ)
- Money Transfer (تحويل الأموال)

## 🔒 Sécurité

- ✅ Mots de passe hashés avec bcrypt
- ✅ Authentification via Laravel Sanctum
- ✅ Tokens d'accès sécurisés
- ✅ Codes de vérification avec expiration (10 minutes)
- ✅ CORS configuré
- ✅ Validation des données

## 🔧 Configuration

### Variables d'environnement importantes

```env
APP_URL=http://localhost:8000
DB_DATABASE=yuraf_network
DB_USERNAME=root
DB_PASSWORD=

# SMS (pour production)
SMS_PROVIDER=twilio
TWILIO_SID=
TWILIO_TOKEN=
TWILIO_FROM=

# Email
MAIL_MAILER=smtp
MAIL_HOST=
MAIL_PORT=
MAIL_USERNAME=
MAIL_PASSWORD=
```

## 📚 Documentation complète

Consultez `backend/README.md` pour la documentation détaillée de l'API.

## 🔗 Intégration Frontend

Consultez `backend/INTEGRATION.md` pour le guide d'intégration avec le frontend React.

## 🛠️ Développement

### Commandes utiles

```bash
# Créer une migration
php artisan make:migration create_table_name

# Créer un contrôleur
php artisan make:controller ControllerName

# Créer un modèle
php artisan make:model ModelName

# Vider les caches
php artisan cache:clear
php artisan config:clear
php artisan route:clear
```

## 📝 Notes

- En mode développement (`APP_DEBUG=true`), les codes de vérification sont retournés dans la réponse
- En production, configurez un service SMS (Twilio) et un service email
- Les tokens Sanctum n'expirent pas par défaut

## 🐛 Dépannage

### Erreur de connexion à la base de données
- Vérifiez les credentials dans `.env`
- Assurez-vous que MySQL est démarré
- Vérifiez que la base de données existe

### Erreur CORS
- Vérifiez la configuration dans `config/cors.php`
- Assurez-vous que le middleware CORS est enregistré

### Erreur 419 (CSRF)
- Les routes API sont exclues de la vérification CSRF
- Vérifiez que vous utilisez le préfixe `/api`

## 📞 Support

Pour toute question, consultez la documentation Laravel ou contactez l'équipe de développement.

---

**Yuraf Network** - دروبشيبينغ المغرب © 2025

