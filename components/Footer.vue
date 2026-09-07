<template>
    <v-row justify-space-around fill-height row wrap class="accent" py-4>
        <v-col cols="12" sm="4" class="text-xs-center">
            <v-row row wrap>
                <v-col cols="12" class="text-uppercase success--text font-weight-bold fredoka-font" mb-2>Ty Drive</v-col>
                <v-col cols="12" class="body-2 info--text raleway-font" mb-1>FAQ</v-col>
                <v-col cols="12" class="body-2 info--text raleway-font" mb-1>L'équipe et les commerçants</v-col>
                <v-col cols="12" class="body-2 info--text raleway-font">Mentions légales et CGU</v-col>
            </v-row>
        </v-col>

        <!-- Barre de séparation -->
        <v-col cols="4" my-4 class="hidden-sm-and-up">
            <v-sheet color="success" height="2px"></v-sheet>
        </v-col>

        <v-col cols="12" sm="4" class="text-xs-center">
            <v-row row wrap>
                <v-col cols="12" class="text-uppercase success--text font-weight-bold fredoka-font" mb-2>Newsletter</v-col>
                <v-col cols="12" class="body-2 info--text raleway-font">Pour rester au courant de toute l'actualité de TyDrive</v-col>
                <v-col cols="10" offset="1">
                   <v-form>
                        <v-text-field
                            placeholder="Saisissez votre email"
                            background-color="success"
                            color="info"
                            required
                            class="raleway-font"
                            >
                        </v-text-field>
                        <v-btn color="info" class="success--text fredoka-font">
                            Inscription
                        </v-btn>
                    </v-form> 
                </v-col>
            </v-row>
        </v-col>

        <!-- Barre de séparation -->
        <v-col cols="4" my-4 class="hidden-sm-and-up">
            <v-sheet color="success" height="2px"></v-sheet>
        </v-col>

        <v-col cols="12" sm="4" class="text-xs-center">
            <v-row row wrap>
                <v-col cols="12" class="text-uppercase success--text font-weight-bold fredoka-font" mb-2>Rejoignez la Ty Communauté</v-col>
                <v-col cols="3" offset="3">
                    <a href="https://www.facebook.com/SandrineKerlidou/">
                        <v-img :src="facebookIcon" max-height="50px" max-width="50px" style="margin: auto;"></v-img>
                    </a>
                </v-col>
                <v-col cols="3" mb-2>
                    <a href="https://www.linkedin.com/in/sandrine-kerlidou-8a4964165/">
                        <v-img :src="linkedInIcon" max-height="50px" max-width="50px" style="margin: auto;"></v-img>
                    </a>
                </v-col>
                <v-col cols="12" class="body-2 info--text raleway-font" mb-1>Le blog</v-col>
                <v-col cols="12" class="body-2 info--text raleway-font">Presse</v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script setup>
import facebookIcon from '@/assets/img/facebook.png'
import linkedInIcon from '@/assets/img/linkedin.png'
</script>
