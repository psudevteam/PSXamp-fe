<template>
    <section class="wrap">
        <div class="card">
            <img class="image" src="@/assets/img/ilustration/learn.png" alt="learn">
            <div class="text">
            <h3 class="title">PSXamp E-Learning</h3>
            <h1>Welcome to  <strong>PXamp</strong> </h1>
            <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nam!</p>
            <button class="btn btn-blue" >Learn More</button>
            </div>
        </div>
        <Modal v-if="modal" />
    </section>
</template>
<script>
import Modal from '@/components/Modal'
import {mapState} from 'vuex'
export default {
    name:'FrontIndex',
    components:{
        Modal
    },
    computed:{
        ...mapState([
            'modal',
            'isLogin',
            'isRegister'
        ]),
    }

}
</script>