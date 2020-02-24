<template>
  <section class="container">
    <Sidebar />
    <main class="main">
      <div class="row">
        <h1>Задай вопрос</h1>
        <Form />
      </div>
      <div class="row">
        <div class="questionsList">
          <div v-if="loading">
            <p>Загузка...</p>
          </div>
          <div v-else-if="questions == null">
            <p>Вы пока не задали вопрос</p>
          </div>
          <div
            v-else
            class="question"
            v-for="(question, index) in questions"
            :key="index"
          >
            <p>{{ question.text }}</p>
            <span>{{ question.date | date("date") }}</span>
            <!-- <span>{{ question.date | date('time') }}</span> -->
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import Form from "@/components/Form.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "Main",
  components: { Form, Sidebar },
  data() {
    return {};
  },
  computed: {
    questions() {
      return this.$store.state.questions;
    },
    loading() {
      return this.$store.state.loading;
    }
  },
  created() {
    this.$store.dispatch("LOAD_QUESTIONS");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  display: flex;
}
.main {
  padding: 30px;
  h1 {
    margin: 0 0 20px 0;
    font-size: 30px;
  }
}
.question {
  margin: 15px 0;
  p {
    margin-bottom: 3px;
  }
}
</style>
