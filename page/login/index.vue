<template>
<div class="login-container">
    <el-form class="card-box login-form" autoComplete="on" label-position='left' ref='loginForm' :model='loginForm' :rules='loginRules'>
        <h3 class="title">系统登录</h3>
        <!--用户名-->
        <el-form-item prop="username">
            <span class="svg-container svg-container_login">
                <icon-svg icon-class="people"/>
            </span>
            <el-input name="username" type="text" placeholder="用户名/邮箱" autoComplete="on" v-model="loginForm.username"></el-input>
        </el-form-item>
        <!--密码-->
        <el-form-item prop="password">
            <span class="svg-container">
                 <icon-svg icon-class="lock_fill"/>
            </span>
            <el-input name="password" autoComlite='on' :type="pwdType" v-model='loginForm.password' placeholder="密码">
            </el-input>
            <span class="show-pwd" @click='showPwd'>
              <icon-svg icon-class="eye"/>
            </span>
        </el-form-item>
        <!--登录按钮-->
        <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading"  @click.native.prevent='handleLogin'>登录</el-button>

        <div class="tips">账号:admin 密码随便填</div>
        <div class="tips">账号:editer 密码随便填</div>
        <el-button class="thirdparty-button" type="primary" @click='showDialog=true'>第三方登录</el-button>
        <el-dialog title="第三方验证" :visible.sync="showDialog">
            本地不能模拟
        </el-dialog>
    </el-form>
</div>
</template>
<script type="text/babel">
import {isValidUsername}  from 'utils/validate';
export default {
    name:'login',
    data(){
      const validateUsername=(rule,value,callback)=>{
        if(!isValidUsername(value)){
          callback(new Error('请输入正确的用户名'))
        }else{
          callback()
        }
      }
      const validatePassword=(rule,value,callback)=>{
        if(value.length<6){
          callback(new Error('密码不能小于6位'))
        }else{
          callback()
        }
      }
      return{
        loginForm:{
          username:'',
          password:''
        },
        loginRules:{
          username:[{required:true,trigger:'blur',validator:validateUsername}],
          password:[{required:true,trigger:'blur',validator:validatePassword}]
        },
        pwdType:'password',
        loading:false,
        showDialog:false
      }
    },
    methods:{
      showPwd(){
        if (this.pwdType=='password'){
          this.pwdType=''
        }else{
          this.pwdType='password'
        }
      },
      handleLogin(){
        this.$refs.loginForm.validate(valid=>{
          if (valid){
            this.loading=true
            this.$store.dispatch('loginByUsername',this.loginForm).then(()=>{
              this.loading=false;
               console.log('登录成功')
            }).catch(()=>{
              this.loading=false
            })
          }else{
            console.log('验证错误')
            return false
          }
        })
      }
    }
};
</script>
<style rel="stylesheet/scss" lang="scss">
@import 'asset/style/mixin.scss';
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
body{
  margin :0;
}
.login-container {
  height: 100vh;
  background-color: $bg;
 input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
  input {
    background: transparent;
    border: 0px;
    border-radius: 0px;
    padding: 12px 5px 12px 5px;
    color: $light_gray;
    height: 47px;
  }
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
  }
  .svg-container {
    padding: 6px 5px 6px 5px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
    width: 30px;
    &login {
      font-size: 20px;
    }
  }
  .title {
    font-size: 26px;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .el-form-item {
    border:1px solid rgba(255,255,255,.1);
    background:rgba(0,0,0,.1);
    border-radius: 5px;
    color:#454545;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top:7px;
    color:$dark_gray;
    cursor: pointer;
  }
  .thirdparty-button {
    position: absolute;
    right:35px;
    bottom:28px;
  }
}
</style>

