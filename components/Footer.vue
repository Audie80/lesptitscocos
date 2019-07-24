<template>
    <v-layout justify-space-around fill-height row wrap class="secondary" py-4>
        <v-flex xs12 sm4 class="text-xs-center">
            <v-layout row wrap>
                <v-flex xs12 class="text-uppercase info--text font-weight-bold" mb-2>Ty Drive</v-flex>
                <v-flex xs12 class="caption white--text">FAQ</v-flex>
                <v-flex xs12 class="caption white--text">L'équipe et les commerçants</v-flex>
                <v-flex xs12 class="caption white--text">Mentions légales et CGU</v-flex>
            </v-layout>
        </v-flex>

        <!-- Barre de séparation -->
        <v-flex xs4 my-4 class="hidden-sm-and-up">
            <v-sheet color="white" height="2px"></v-sheet>
        </v-flex>

        <v-flex xs12 sm4 class="text-xs-center">
            <v-layout row wrap>
                <v-flex xs12 class="text-uppercase info--text font-weight-bold" mb-2>Newsletter</v-flex>
                <v-flex xs12 class="caption white--text">Pour rester au courant de toute l'actualité de TyDrive</v-flex>
                <v-flex xs10 offset-xs1>
                   <v-form>
                        <v-text-field
                            placeholder="Saisissez votre email"
                            background-color="white"
                            color="info"
                            required
                            >
                        </v-text-field>
                        <v-btn color="info">
                            Inscription
                        </v-btn>
                    </v-form> 
                </v-flex>
            </v-layout>
        </v-flex>

        <!-- Barre de séparation -->
        <v-flex xs4 my-4 class="hidden-sm-and-up">
            <v-sheet color="white" height="2px"></v-sheet>
        </v-flex>

        <v-flex xs12 sm4 class="text-xs-center">
            <v-layout row wrap>
                <v-flex xs12 class="text-uppercase info--text font-weight-bold" mb-2>Rejoignez la Ty Communauté</v-flex>
                <v-flex xs12 class="caption white--text">Le blog</v-flex>
                <v-flex xs12 class="caption white--text">Presse</v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>
