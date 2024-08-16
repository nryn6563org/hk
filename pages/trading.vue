<template>
  <div id="container">
    <div class="catch_wrap">
      <div class="catch_tab">
        <button :class="{active: activeTab === 'issue'}" @click="changeTab('issue')">이슈캐치1</button>
        <button :class="{active: activeTab === 'signal'}" @click="changeTab('signal')">신호캐치</button>
      </div>
      <!-- catch 탭 -->

      <div class="catch_content">
        <ContentFour v-show="activeTab === 'issue'"></ContentFour>
        <ContentThree v-show="activeTab === 'signal'"></ContentThree>
      </div>
    </div>
  </div>
</template>

<script>
import ContentThree from '~/components/SignalCatch/ContentThree'
import ContentFour from '~/components/IssueCatch/ContentFour'

export default {
  components: {
    ContentThree,
    ContentFour
  },
  layout: 'defaultLayout',
  data() {
    return {
      activeTab: 'issue', // Default active tab
      showModal: false
    }
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab
    }
  }
}
</script>

<style scoped>
@import '~/assets/css/main.css';
@import '~/assets/css/todayIssue.css';
</style>
