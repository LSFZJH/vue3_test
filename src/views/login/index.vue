<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
const router = useRouter();

interface form {
  userName: string | undefined;
  pass: string | undefined;
}

const getInitData = () => {
  return {
    userName: "",
    pass: "",
  };
};

const loginForm = reactive<form>(getInitData());

const submitForm = () => {
  const { userName, pass } = loginForm;
  console.log(userName, pass);
  if (userName === "admin" && pass === "123123") {
    router.push("/layout");
  } else {
    ElMessage({
      message: "账户错误",
      type: "error",
    });
  }
};

const resetForm = () => {
  Object.assign(loginForm, getInitData());
};
</script>
<template>
  <div class="box">
    <el-form :model="loginForm" class="login-box">
      <el-form-item label="userName" prop="userName">
        <el-input v-model="loginForm.userName" />
      </el-form-item>
      <el-form-item label="Password" prop="pass">
        <el-input v-model="loginForm.pass" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">Submit</el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.box {
  background: #fff;
  width: 100%;
  height: 100%;
}
.login-box {
  background: #6e96ec;
  width: 40%;
  margin: 300px auto;
  padding: 50px;
}
.login-btn {
  width: 50%;
  margin: 50px auto;
}
</style>