# 📦 Projet Complet - Yuraf Network

## 🎯 Vue d'ensemble

Ce projet est une plateforme complète de dropshipping (دروبشيبينغ المغرب) composée de:

1. **Frontend React** - Interface utilisateur moderne et responsive
2. **Backend Laravel** - API REST complète et sécurisée

## 📁 Structure du projet

```
dvv1/
├── src/                          # Frontend React
│   ├── components/               # Composants React
│   ├── pages/                    # Pages de l'application
│   ├── context/                  # Context API (Language, Theme, Auth)
│   ├── services/                 # Services API (à créer)
│   └── ...
├── backend/                      # Backend Laravel
│   ├── app/                      # Application Laravel
│   │   ├── Http/Controllers/    # Contrôleurs API
│   │   ├── Models/               # Modèles Eloquent
│   │   └── ...
│   ├── database/                 # Migrations et Seeders
│   ├── routes/                   # Routes API
│   └── ...
├── README.md                     # Documentation frontend
├── BACKEND_README.md             # Documentation backend
└── PROJET_COMPLET.md             # Ce fichier
```

## 🚀 Démarrage rapide

### Frontend (React)

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Le frontend sera sur http://localhost:5173
```

### Backend (Laravel)

```bash
# Aller dans le dossier backend
cd backend

# Installer les dépendances
composer install

# Configurer l'environnement
cp .env.example .env
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

# Le backend sera sur http://localhost:8000
```

## 🔗 Intégration Frontend-Backend

### 1. Créer le service API

Créez `src/services/api.js` (voir `backend/INTEGRATION.md` pour le code complet)

### 2. Créer le contexte d'authentification

Créez `src/context/AuthContext.jsx` (voir `backend/INTEGRATION.md`)

### 3. Mettre à jour RegisterPage

Modifiez `src/pages/RegisterPage.jsx` pour utiliser l'API (voir `backend/INTEGRATION.md`)

### 4. Configuration

Ajoutez dans `.env` (frontend):
```
VITE_API_BASE_URL=http://localhost:8000/api
```

## 📡 API Endpoints

### Authentification
- `POST /api/register` - Inscription
- `POST /api/login` - Connexion
- `POST /api/logout` - Déconnexion
- `GET /api/user` - Utilisateur actuel

### Vérification
- `POST /api/send-email-verification` - Envoyer code email
- `POST /api/verify-email` - Vérifier email
- `POST /api/send-phone-verification` - Envoyer code téléphone
- `POST /api/verify-phone` - Vérifier téléphone

### Services
- `GET /api/services` - Liste des services
- `GET /api/services/{id}` - Détails d'un service

### Contact
- `POST /api/contact` - Envoyer un message

### Profil
- `PUT /api/user/profile` - Mettre à jour le profil
- `GET /api/user/orders` - Commandes utilisateur

## 🗄️ Base de données

### Tables créées

1. **users** - Utilisateurs
   - Informations personnelles
   - Adresse
   - Informations bancaires
   - Vérification email/téléphone

2. **verification_codes** - Codes de vérification
   - Codes email/téléphone
   - Expiration (10 minutes)

3. **services** - Services proposés
   - Import
   - Storage
   - Dropshipping
   - Money Transfer

4. **contact_messages** - Messages de contact

## 🔒 Sécurité

### Backend
- ✅ Mots de passe hashés (bcrypt)
- ✅ Authentification Sanctum
- ✅ Tokens sécurisés
- ✅ Validation des données
- ✅ CORS configuré
- ✅ Codes de vérification avec expiration

### Frontend
- ✅ Tokens stockés dans localStorage
- ✅ Validation côté client
- ✅ Gestion des erreurs

## 📝 Fonctionnalités implémentées

### Frontend
- ✅ Pages: Landing, Services, Register, FAQ, How It Works, Contact
- ✅ Support multilingue (AR/EN)
- ✅ Design responsive
- ✅ Formulaires de contact
- ✅ Formulaire d'inscription multi-étapes

### Backend
- ✅ API REST complète
- ✅ Authentification complète
- ✅ Vérification email/téléphone
- ✅ Gestion des services
- ✅ Messages de contact
- ✅ Gestion des profils utilisateur

## 🔮 Fonctionnalités futures

- [ ] Dashboard utilisateur
- [ ] Gestion des commandes
- [ ] Gestion des produits
- [ ] Système de paiement
- [ ] Notifications en temps réel
- [ ] Chat en direct
- [ ] Rapports et statistiques
- [ ] Gestion des stocks
- [ ] Intégration avec services de livraison

## 📚 Documentation

- **Frontend**: Voir `README.md` et `FRONTEND.md`
- **Backend**: Voir `backend/README.md`
- **Intégration**: Voir `backend/INTEGRATION.md`
- **Backend Résumé**: Voir `BACKEND_README.md`

## 🛠️ Technologies utilisées

### Frontend
- React 18.2.0
- React Router DOM 6.21.0
- Tailwind CSS 3.4.0
- Vite 5.0.8
- React Icons 5.5.0

### Backend
- Laravel 10
- Laravel Sanctum (Authentification)
- MySQL/MariaDB
- PHP 8.1+

## 📞 Support

Pour toute question ou problème:
1. Consultez la documentation dans les fichiers README
2. Vérifiez les guides d'intégration
3. Contactez l'équipe de développement

## ✅ Checklist de déploiement

### Backend
- [ ] Configurer `.env` avec les vraies valeurs
- [ ] Configurer la base de données de production
- [ ] Configurer le service SMS (Twilio)
- [ ] Configurer le service email
- [ ] Activer HTTPS
- [ ] Désactiver `APP_DEBUG=false`
- [ ] Configurer CORS pour le domaine de production

### Frontend
- [ ] Configurer `VITE_API_BASE_URL` pour la production
- [ ] Build de production: `npm run build`
- [ ] Déployer les fichiers build
- [ ] Configurer le serveur web (Nginx/Apache)

## 🎉 Conclusion

Vous avez maintenant une plateforme complète de dropshipping avec:
- ✅ Frontend React moderne et responsive
- ✅ Backend Laravel robuste et sécurisé
- ✅ API REST complète
- ✅ Système d'authentification
- ✅ Vérification email/téléphone
- ✅ Documentation complète

**Bon développement! 🚀**

---

**Yuraf Network** - دروبشيبينغ المغرب © 2025

