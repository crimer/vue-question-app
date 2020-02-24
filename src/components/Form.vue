<template>
  <div>
    <form @submit.prevent="formSubmit">
      <div class="row">
        <textarea
          v-model="questionText"
          type="text"
          placeholder="Ваш вопрос"
          class="questionInput"
        >
        </textarea>
      </div>
      <div class="row">
        <button :disabled="isDisabled" type="submit" name="login" class="btn">
          Задать вопрос
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      questionText: ""
    };
  },
  computed: {
    isDisabled() {
      return this.validForm(this.questionText) ? false : true;
    }
  },
  methods: {
    formSubmit() {
      let self = this;

      if (!this.validForm(this.questionText)) return;

      let question = {
        text: self.questionText,
        date: new Date().toJSON()
      };
      this.$store.dispatch("CREATE_QUESTION", question);
      this.questionText = "";
    },
    validForm(val) {
      return val.length >= 10 ? true : false;
    }
  }
};
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
}
.questionInput {
  font-size: 15px;
  width: 400px;
  min-height: 100px;
  min-width: 300px;
  padding: 10px;
  outline: none;
  border-radius: 10px;
  border: 1px solid #2196f3;
  margin-bottom: 20px;
}

.btn {
  font-size: 15px;
  color: white;
  border-radius: 10px;
  border: 1px solid #2196f3;
  outline: none;
  width: 120px;
  height: 40px;
  background-color: #2196f3;
}
.btn:disabled {
  border: 1px solid darken(#2196f3, 20%);
  background-color: darken(#2196f3, 20%);
}
.login {
  margin-top: 25px;
  border-right: 1px solid #ddd;
}
</style>
