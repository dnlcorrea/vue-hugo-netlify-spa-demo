<template>
  <div>
    <v-dialog v-model="dialog" width="90vw" max-width="600px" persistent>
      <v-card class="white">
        <v-card-title
          class="
            headline
            grey
            lighten-2
            c-secondary--text
            uppercase
            semibold
            py-2
          "
        >
          <small class="mt-1 ml-1">{{ dialogInfo.titulo }}</small>
          <v-spacer></v-spacer>
          <v-btn icon @click="resetForm">
            <v-icon small class="secondary--text">fas fa-times</v-icon>
          </v-btn>
        </v-card-title>
        <v-form
          v-if="!submited"
          ref="form"
          method="POST"
          action="javascript:void(0);"
          :name="`${dialogInfo.titulo} - ${dialogInfo.curso} - Portal de Turismo e Hotelaria`"
          @submit.prevent="submit"
        >
          <v-card-text class="px-4" v-if="!preenchido">
            <p
              class="font-500 c-secondary--text mt-2 p2 mb-0"
              v-if="dialogInfo.curso"
            >
              <big>{{ dialogInfo.curso }}</big>
            </p>
            <p class="semilight c-info-darken-2--text mt-2 p2">
              Após o preenchimento você será redirecionado.
            </p>
            <v-text-field
              label="Nome Completo"
              color="primary"
              v-model="inscricao.nome"
              :rules="rules.nome"
              required
              name="nome"
              maxlength="255"
            ></v-text-field>
            <v-layout class="align-center">
              <v-select
                style="width: 40px; flex: 0 !important"
                v-model="local"
                :items="['BR', 'PY', 'AR']"
                append-icon="fas fa-arrow-down"
                @change="mostrarlocal"
                name="país"
                class="select-pais"
                label="País"
              >
              </v-select>
              <v-text-field
                label="Celular"
                color="primary"
                v-model="inscricao.celular"
                :mask="localMasks[local]"
                :rules="rules.celular"
                required
                name="celular"
              ></v-text-field>
            </v-layout>
            <v-text-field
              label="E-Mail"
              color="primary"
              v-model="inscricao.email"
              :rules="rules.email"
              required
              name="email"
            ></v-text-field>
          </v-card-text>
          <v-card-text v-else>
            <p class="my-0 p2">Nome: {{ inscricao.nome }}</p>
            <p class="my-0 p2">Celular: {{ inscricao.celular }}</p>
            <p class="my-0 p2">E-mail: {{ inscricao.email }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              type="submit"
              :loading="loading"
              :disabled="disabled"
            >
              <span class="white--text">CONTINUAR</span>
              <v-icon small class="ml-2">fas fa-arrow-right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-form>

        <v-card-text class="spy-10" v-else>
          <p class="text-xs-center mb-4 uppercase c-info-darken-2--text">
            Você será redirecionado
          </p>
          <div
            class="
              primary
              d-flex
              align-center
              justify-center
              mx-auto
              white--text
              titulo
              bold
            "
            style="width: 50px; height: 50px; border-radius: 100px"
          >
            <span v-if="count != 0" class="text-xs-center">{{ count }}</span>
            <span v-else class="text-xs-center enter-check"
              ><v-icon class="white--text">fas fa-check</v-icon></span
            >
          </div>
          <p class="p3 mt-2" v-if="count != 0">&nbsp;</p>
          <p v-else class="p3 c-info-darken-2--text text-xs-center mt-2">
            Caso você não seja redirecionado
            <a :href="dialogInfo.redirect" target="_blank">clique aqui.</a>
          </p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
const maxChars = (v) => v.length < 191 || 'Máx. 191 caracteres'
const required = (v) => !!v || 'Preenchimento obrigatório'

export default {
  props: ['curso', 'destino'],
  data() {
    return {
      local: 'BR',
      localMasks: {
        BR: '(##) #########',
        PY: '(###) #########',
        AR: '(##) ###########',
      },
      dialog: false,
      dialogInfo: {
        titulo: '',
        redirect: '',
      },
      rules: {
        required: [maxChars, required],
        nome: [
          (v) => !!v || 'Preencha seu nome',
          (v) => v.length < 191 || 'Máx. 191 caracteres',
        ],
        email: [
          (v) => !!v || 'Preencha seu e-mail',
          (v) =>
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(v) ||
            'Digite um e-mail válido.',
        ],
        celular: [(v) => !!v || 'Preencha seu celular'],
      },
      loading: false,
      disabled: false,
      submited: false,
      count: 2,
      inscricao: {
        nome: '',
        celular: '',
        email: '',
      },
      preenchido: false,
    }
  },

  methods: {
    mostrarlocal() {
      console.log(this.localMasks[this.local])
    },
    decrementCounter: function () {
      this.count -= 1
    },
    resetForm() {
      this.dialog = false
      setTimeout(() => {
        this.count = 2
        this.submited = false
      }, 500)
    },
    submit(event) {
      this.loading = true
      this.disabled = true
      setTimeout(() => {
        if (this.$refs.form.validate()) {
          event.target.submit()
          this.submited = true

          let interval = setInterval(() => {
            if (this.count != 0) {
              this.decrementCounter()
            } else {
              clearInterval(interval)
              open(this.dialogInfo.redirect)
            }
          }, 1000)
          this.preenchido = true
        }
        this.loading = false
        this.disabled = false
      }, 1000)
    },
  },
  mounted() {
    Event.$on('openDialog', (dados) => {
      this.dialog = true
      this.dialogInfo = dados
    })
  },
}
</script>
<style lang='scss'>
.select-pais {
  .v-icon {
    font-size: 13px;
  }
  .v-input__icon {
    justify-content: flex-start;
  }
  .v-input__append-inner {
    padding-left: 0px !important;
  }
}
.enter-check {
  animation: rotate 0.3s;

  @keyframes rotate {
    0% {
      transform: rotateY(90deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
}
</style>