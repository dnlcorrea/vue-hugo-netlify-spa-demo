<template>
  <v-app>
    <v-app-bar
      fixed
      :style="{ marginTop: onFooter ? '-64px' : '0', transition: 'all 0.2s' }"
      app
      class="c-secondary"
      :class="isup ? 'elevation-0' : 'elevation-2'"
    >
      <v-flex xs10 sm11 lg2 class="fill-height">
        <router-link to="/">
          <v-img
            @load="contentLoaded"
            contain
            class="fill-height flex-0 sml-10 sml-xs-12"
            style="width: calc(150px + 1vw)"
            src="/logo-s-n.png"
          ></v-img>
        </router-link>
        <v-spacer></v-spacer>
      </v-flex>
      <v-flex
        xs2
        sm1
        lg10
        class="
          fill-height
          hidden-lg-and-up
          c-primary
          align-center
          justify-center
        "
        style="display: flex"
      >
        <v-btn
          class="hidden-lg-and-up"
          icon
          @click.stop="rightDrawer = !rightDrawer"
        >
          <v-icon class="fas fa-bars"></v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs4 sm1 lg10 class="fill-height hidden-md-and-down">
        <div
          class="
            c-primary
            spr-24
            spl-10
            menu-btns
            d-flex
            justify-end
            fill-height
            text-right
          "
        >
          <v-btn
            class="
              fill-height
              c-secondary--text
              transparent
              spx-5
              no-radius
              mx-0
            "
            depressed
            x-large
            :class="pathname.includes(item.path) ? 'is-selected' : ''"
            :to="item.path"
            v-for="(item, i) in items"
            :key="i"
          >
            {{ item.name }}
          </v-btn>
        </div>
      </v-flex>
    </v-app-bar>

    <v-main class="pa-0">
      <NuxtChild keep-alive :isup="isup" :onFooter="onFooter" />
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="true"
      temporary
      fixed
      class="c-primary"
    >
      <v-list class="sidebar">
        <div v-for="(item, i) in items" :key="i">
          <v-list-item
            :class="pathname.includes(item.path) ? 'is-selected' : ''"
            :to="item.path"
            v-if="item.name !== 'Faculdade Multiversa'"
          >
            <v-list-item-title class="c-secondary--text">{{
              item.name
            }}</v-list-item-title>
          </v-list-item>

          <v-list-group
            no-action
            :value="true"
            class="c-secondary--text"
            v-else
          >
            <template v-slot:activator>
              <v-list-item-content class="c-secondary--text">
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item-content>
            </template>

            <!-- :class="pathname.includes(item.path) ? 'is-selected' : ''" -->
            <v-list-item
              :class="pathname === path ? 'is-selected' : ''"
              v-for="({ name, path }, i) in submenus"
              :key="i"
              :to="path"
            >
              <v-list-item-title v-text="name"></v-list-item-title>
            </v-list-item>
          </v-list-group>
        </div>
      </v-list>
    </v-navigation-drawer>

    <br />
    <br />
    <br />
    <v-footer
      class="c-secondary spy-15 align-start relative pa-0"
      style="
        min-height: calc(100vh - 10px - 80px - 32px);
        z-index: 6;
        margin-top: calc(-35px - 2vw);
      "
      v-view="changeOnFooter"
    >
      <v-flex xs12 md4 lg3 class="spl-24 fill-height spt-20 c-secondary">
        <v-img
          contain
          class=""
          style="width: 220px; height: 54px"
          src="/logo-s-n.png"
        ></v-img>
        <br />
        <br />

        <a
          class="white--text no-underline"
          href="mailto:contato@multiversa.edu.br"
        >
          <p>
            <v-icon small class="c-primary--text mr-2">fas fa-envelope</v-icon>
            contato@multiversa.edu.br
          </p>
        </a>
        <p class="white--text">
          &nbsp;<v-icon small class="c-primary--text mr-2"
            >fas fa-map-marker-alt</v-icon
          >
          Foz do Iguaçu / Paraná
        </p>
      </v-flex>
      <v-flex xs12 md8 lg9 class="c-secondary-darken-1 fill-height">
        <div
          class="c-primary sml-20 px-10 pt-4 pb-3"
          style="margin-top: calc(-35px - 2vw) !important"
        >
          <h1 class="mt-0 font-300">Cadastre-se na nossa newsletter</h1>

          <v-layout>
            <v-text-field solo class="smr-10" label="E-mail"></v-text-field>
            <v-btn height="46px">Enviar</v-btn>
          </v-layout>
        </div>
        <!-- <v-divider class="mx-10 mb-5 c-primary"></v-divider> -->
        <br />
        <br />

        <v-layout class="white--text">
          <v-flex class="spl-24">
            <a class="white--text no-underline" to="/quem-somos">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Quem Somos</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Acontece na Multiversa</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Blog Multiversa</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Contato</p>
            </a>
          </v-flex>
          <v-flex>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Faculdade Multiversa</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Graduação Presencial</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Graduação Digital</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Pós-Graduação Digital</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Curso de Extensão Digital</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Metodologia Educacional</p>
            </a>
          </v-flex>
          <v-flex>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Colégio Multiversa</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Portal de Cursos Digitais</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Escola de Saúde</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Centro Integrado de Saúde</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Hospital Veterinário</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Hub de Inovação</p>
            </a>
            <a class="white--text no-underline" to="">
              <v-icon
                class="mr-2 pt-1 c-primary--text"
                small
                style="float: left"
                >fas fa-caret-right</v-icon
              >
              <p>Gestão Interina de IES</p>
            </a>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-footer>
    <v-layout
      class="c-secondary-darken-1 text-center grey--text text--darken-4"
    >
      <v-flex xs12 md4 lg3 class="fill-height c-secondary"></v-flex>
      <v-flex>
        <v-divider class="c-info-darken-3 smx-20"></v-divider>
        <p class="mt-2 mb-1 c-info-darken-3--text">31 Solutions @ 2021</p>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isup: true,
      pathname: '',
      items: [
        {
          name: 'Home',
          path: '/home',
        },
        {
          name: 'Faculdade Multiversa',
          path: '/faculdade-multiversa',
        },
        {
          name: 'Quem Somos',
          path: '/quem-somos',
        },
        {
          name: 'Acontece na Multiversa',
          path: '/acontece-na-multiversa',
        },
        {
          name: 'Blog Multiversa',
          path: '/blog-multiversa',
        },
        {
          name: 'Contato',
          path: '/#contato',
        },
      ],
      submenus: [
        { name: 'Início', path: '/faculdade-multiversa' },
        {
          name: 'Graduação Presencial',
          path: '/faculdade-multiversa/graduacao-presencial',
        },
        {
          name: 'Graduação Digital',
          path: '/faculdade-multiversa/graduacao-digital',
        },
        { name: 'Pós-Graduação', path: '/faculdade-multiversa/pos-graduacao' },
        {
          name: 'Turismo e Hotelaria',
          path: '/faculdade-multiversa/portal-de-turismo-e-hotelaria',
        },
        {
          name: 'Extensão Digital',
          path: '/faculdade-multiversa/extensao-digital',
        },
        { name: 'Metodologia', path: '/faculdade-multiversa/metodologia' },
      ],

      rightDrawer: false,
      onFooter: false,
    }
  },
  methods: {
    contentLoaded() {
      $nuxt.$emit('content-loaded')
    },
    changeOnFooter(e) {
      if (e.percentInView >= 0.8) {
        this.onFooter = true
      } else {
        this.onFooter = false
      }
    },
  },

  watch: {
    $route(to, from) {
      this.pathname = to.fullPath
    },
  },
  mounted() {
    this.pathname = location.pathname

    let txtbanner = document.querySelector('.txt-banner')
    if (txtbanner) {
      txtbanner.style.display = 'none'
    }

    addEventListener('scroll', () => {
      if (scrollY > 200) {
        this.isup = false
      } else {
        this.isup = true
      }
    })
    if (scrollY > 200) {
      this.isup = false
    } else {
      this.isup = true
    }

    if (txtbanner) {
      this.$nuxt.$on('content-loaded', () => {
        document.querySelector('.txt-banner').style.display = 'block'
      })
    }
  },
}
</script>

<style lang="scss">
.v-main {
  top: 0;
}
.v-toolbar__content,
.v-toolbar__extension {
  padding: 0;
}

.sidebar .v-list .v-list-item--active,
.sidebar .v-list .v-list-item--active .v-icon {
  color: #2d386d !important;
}

.sidebar {
  .v-list-item.is-selected {
    background: rgba(0, 0, 0, 0.103) !important;
  }
}
.v-list-item--active::before {
  opacity: 0 !important;
}
.v-application--is-ltr
  .v-list-group--no-action
  > .v-list-group__items
  > .v-list-item {
  padding-left: 38px;
}
.menu-btns {
  .v-btn {
    overflow: visible !important;
    height: 64px !important;
    font-size: 15px;
    &::before {
      opacity: 0 !important;
    }

    &:hover::after,
    &.is-selected::after {
      height: 4px;
      width: 100% !important;
      content: '';
      position: absolute;
      transition: all 0.3s, background 0.2s;
      background: transparent !important;
      bottom: 0px;
      width: 7px !important;
      border-left: 7px solid transparent !important;
      border-right: 7px solid transparent !important;
      border-bottom: 7px solid #2d386d !important;
    }
  }
}
</style>
