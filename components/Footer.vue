<template>
    <v-layout align-content-space-between justify-space-around fill-height row wrap class="secondary" py-4>
        <v-flex xs4 class="text-xs-center">
            <p class="text-uppercase info--text font-weight-bold">Ty Drive</p>
            <p class="caption white--text">FAQ</p>
            <p class="caption white--text">L'équipe et les commerçants</p>
            <p class="caption white--text">Mentions légales et CGU</p>
        </v-flex>
        <v-flex xs4 class="text-xs-center">
            <p class="text-uppercase info--text font-weight-bold">Newsletter</p>
            <p class="caption white--text">Pour rester au courant de toute l'actualité de TyDrive</p>
            <v-form>
                <v-text-field
                    placeholder="Saisissez votre email"
                    solo flat
                    required
                    >
                </v-text-field>
                <v-btn color="info">
                    Inscription
                </v-btn>
            </v-form>
        </v-flex>
        <v-flex xs4 class="text-xs-center">
            <p class="text-uppercase info--text font-weight-bold">Rejoignez la Ty Communauté</p>
            <p class="caption white--text">Le blog</p>
            <p class="caption white--text">Presse</p>
        </v-flex>
    </v-layout>
</template>
