<template>
    <div class="login">
        <div class="main">
            <!-- <img src="@/assets/img/logo.png" alt="logo"> -->
            <input placeholder="请输入账号" type="text" v-model="token" />
            <div @click="login" class="btn">验证</div>
        </div>
    </div>
</template>
<script>
import { login } from '@/common/api'
export default{
    data () {
        return {
            token: 'www123'
        }
    },
    methods: {
        login () {
            const params = {
                token: this.token
            }
            login(params)
                .then(res => {
                    if (res.code === 200) {
                        // 登陆成功
                        this.$router.replace('/')
                    }
                })
        }
    },
    created () {
    }
}
</script>
<style lang="less" scoped>
.login{
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: #1b262c;
    .main{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 3rem;
        height: 1.5rem;
        font-size: .16rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        input {
            display: block;
            line-height: .36rem;
            border: none;
            text-align: center;
            border-radius: .02rem;
            &:focus{
                outline: none;
            }
        }
        .btn {
            display: block;
            text-align: center;
            border-radius: .02rem;
            line-height: .36rem;
            background-color: #fd9d80;
            color: #fff;
        }
    }
}
</style>