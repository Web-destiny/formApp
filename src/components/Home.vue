<template>
  <div>
    <v-container>
      <v-layout row class="form-layout">
        <v-flex xs11 class="form-box">
          <form>
            <v-card-text>
              <h1 class="form-title">Мобильным приложением Онлайн легко пользоваться</h1>
            </v-card-text>
            <div class="form-question-box">
              <v-col cols="12">
                <v-subheader class="pl-0 form-subtitle">
                  (где 1 - абсолютно не согласен, а 7 - абсолютно согласен)
                </v-subheader>
                <v-slider
                  thumb-label="always"
                  track-color="grey lighten-3"
                  color="black"
                  thumb-color="black"
                  min="0"
                  max="10"
                  v-model="formSteps[activeStep].value"
                ></v-slider>
              </v-col>

              <v-card-text>
                <h2 class="form-question mb-5">{{ formSteps[activeStep].question }}</h2>
              </v-card-text>
              <v-list
                flat
                subheader
                three-line
                v-if="formSteps[activeStep].value<7"
              >
                <v-subheader class="pl-0 form-subtitle">
                  (возможно несколько вариантов)
                </v-subheader>
                <v-list-item-group
                  multiple
                  active-class=""
                >
                  <v-list-item
                    v-for="(answer, index) in formSteps[activeStep].answers"
                    :key="'answer' + index"
                    @change="answer.done = !answer.done"
                    class="checkbox-item"
                  >
                    <template>
                      <v-list-item-action>
                        <v-checkbox
                          color="red"
                          v-model="answer.done"
                          @click="answer.done = !answer.done"
                        >
                        </v-checkbox>
                      </v-list-item-action>

                      <v-list-item-content class="checkbox-item-content">
                        <v-list-item-title>{{ answer.label }}</v-list-item-title>
                        <!-- <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle> -->
                      </v-list-item-content>

                    <div
                      style="display: flex;flex-wrap: wrap"
                      v-if="chipLabels[index + (activeStep * formSteps[activeStep].answers.length)] != undefined"
                    >
                      <v-chip-group
                        column
                        multiple
                        :key="'chip' + index"
                        v-for="(chip, index) in chipLabels[index + (activeStep * formSteps[activeStep].answers.length)].chips"
                      >
                        <v-chip
                          @click.stop
                          filter
                          outlined
                          v-if="answer.done ? chip.label : ''"
                        >
                          {{ chip.label }}
                        </v-chip>
                      </v-chip-group>
                    </div>
                    </template>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>

            <v-btn
              class="mr-4 red white--text col-sm-12"
              @click="nextStep"
              v-if="activeStep < formSteps.length - 1"
              :disabled="!isValid()"
            >
              Далее
            </v-btn>
            <v-btn
              class="mr-4 red white--text col-sm-12"
              to="/thanks"
              v-if="activeStep === formSteps.length - 1"
              :disabled="!isValid()"
            >
              Отправить
            </v-btn>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeStep: 0,
      formSteps: [
        {
          question: 'Уточните, какой именно ' +
            'функционал требует улучшений в интернет-банке?',
          answers: [
            { label:'Информация по вашим продуктам (счета, карты, вклады, кредиты и т.д.)', done: false },
            { label:'Оплата услуг (ЖКХ, мобильная связь, интернет и т.д.)',  done: false },
            { label:'Переводы',    done: false },
            { label:'Другое',    done: false }
          ],
          value: 0,
        },
        {
          question: 'фывфывфывфывывфывыфф',
          answers: [
            { label:'авппавпвапавпва', done: false },
            { label:'впапвпапвпа',  done: false },
            { label:'вапавпап',    done: false },
            { label:'вапавпапапв',    done: false }
          ],
          value: 0,
        },
        {
          question: '5555555555555555555',
          answers: [
            { label:'вапвапвап', done: false },
            { label:'вапвапапвап',  done: false },
            { label:'впаавппвапвап',    done: false },
            { label:'вапапвапвап',    done: false }
          ],
          value: 0,
        },
      ],
      chipLabels: [
        {
          chips: [
            { label:'Текущие счета'},
            { label:'Накопительные счета'},
            { label:'Дебетовые карты'},
            { label:'Вклады'},
            { label:'Автокредиты'},
            { label:'Ипотека'}
          ],
        },
        {
          chips: [
            { label:'ЖКХ'},
            { label:'Мобильная связь'},
            { label:'Интернет'},
            { label:'Другие услуги'}
          ],
        },
        {
          chips: [
            { label:'Переводы между своими счетами'},
            { label:'Обмен валюты'},
            { label:'Переводы по номеру телефона'},
            { label:'Переводы по реквизитам'},
            { label:'Переводы с помощью QR-кода'}
          ],
        },
        {
          chips: [
            { label:'Настройки приложения'},
            { label:'Информация о тарифе'},
            { label:'Прочие услуги'}
          ],
        },
        {
          chips: [
            { label:'выаваыав'},
            { label:'ывавыаы связь'},
            { label:'выав'},
            { label:'ываваыва услуги'}
          ],
        },
        {
          chips: [
            { label:'ываии'},
            { label:'3243432 связь'},
            { label:'аываыва'},
            { label:'Другие ываываваы'}
          ],
        },
        {
          chips: [
            { label:'ывавыаыва'},
            { label:'авыаввввввввввввввв связь'},
            { label:'ввввввввввввв'},
            { label:'сячсчясчясячсчяс услуги'}
          ],
        },
        {
          chips: [
            { label:'счсчсм'},
            { label:'Мобильнмсиимимиимимая связь'},
            { label:'имиимимими'},
            { label:'имсиимии мисимсими'}
          ],
        },
        {
          chips: [
            { label:'счсчсм'},
            { label:'Мобильнмсиимимиимимая связь'},
            { label:'имиимимими'},
            { label:'имсиимии мисимсими'}
          ],
        },
      ],
    }
  },
  methods: {
    isValid(){
      let result = false;
      this.formSteps[this.activeStep].answers.forEach(elem => {
        if (elem.done || this.formSteps[this.activeStep].value > 6) {
          result = true
        } else {
          return
        }
      });
      return result
    },
    nextStep () {
      this.activeStep++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.form-layout{
  margin-top: 20px;
  justify-content: center;
}
.form-box{
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
}
.form-title{
  font-weight: 700;
  font-size: 23px;
  color: #e62c24;
  margin-bottom: 10px;
}
.form-subtitle{
  font-size: 14px;
  color: #c3c3c4;
}

.checkbox-item{
  background-color: #ededf0;
  border-radius: 4px;
  margin-bottom: 10px;
}
.v-list-item__action{
  align-self: center!important;
}
.v-list-item__title {
  white-space: normal;
}
.v-list-item{
  min-height: 0;
  flex-wrap: wrap;
  padding: 16px 16px;;
}

.v-card__text{
  padding: 4px;
}
.v-chip-group--column .v-slide-group__content{
  padding: 1px 1px!important;
}
.v-chip-group .v-chip {
  margin: 1px!important;
}
.v-list-item__action{
  margin-right: 18px!important;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
@media (min-width: 600px ) {
  .v-list-item__content {
    min-width: fit-content;
  }
}

</style>
