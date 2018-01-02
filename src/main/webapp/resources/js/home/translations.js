angular.module("HomeApp").run(function (gettextCatalog) {
    gettextCatalog.setCurrentLanguage(navigator.language || navigator.userLanguage);
    gettextCatalog.setStrings("fr", {
        'Add a task':'Ajouter une tâche',
        'background':'Arrière-plan',
        'Cancel':'Annuler',
        'Category':'Catégorie',
        'Clear':'Vider',
        'Close':'Fermer',
        'clothes':'Vêtements',
        'Complexity':'Complexité',
        'Create task':'Créer une tâche',
        'Daily':'Tous les jours',
        'Dashboard':'Accueil',
        'Due date':'Date limite',
        'Edit':'Modifier',
        'Edit task':'Éditer une tâche',
        'face':'Bouche / Yeux / ...',
        'gadget':'Accessoires',
        'Gifts and rewards':'Cadeaux et récompenses',
        'hair':'Cheveux',
        'head':'Visage',
        'I did it':'C\'est fait',
        'Level':'Niveau',
        'Monthly':'Tous les mois',
        'My profile':'Mon profil',
        'Name *':'Nom *',
        'No gift or reward unlocked, keep playing to do so.':'Aucun cadeau ou récompense disponible, continuez à jouer pour les débloquer !',
        'None':'Aucun',
        'Notifications list':'Liste des notifications',
        'Players list':'Liste des joueurs',
        'Profile':'Profil',
        'Redundancy':'Récurrence',
        'Submit':'Valider',
        'Task created successfully.':'Tâche crée avec succès.',
        'Task is done':'Tâche réalisée',
        'Tasks list':'Liste des tâches disponibles',
        'Today':'Aujourd\'hui',
        'Weekly':'Toutes les semaines'
    });
});