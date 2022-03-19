<template>
  <div class="dashboard-editor-container">
    <div>
      <span
        style="font-size: 30px; font-weight: 600; font-family: SimHei"
      >Dionysus</span>
    </div>

    <div />
    <div style="margin-top: 40px">
      <span style="font-size: 20px; font-weight: 400;"> 当前用户 - {{ accountName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardAdmin",

  data() {
    return {
      accountName: "",
    };
  },
  created() {
    this.accountName = localStorage.getItem("accountName");
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
