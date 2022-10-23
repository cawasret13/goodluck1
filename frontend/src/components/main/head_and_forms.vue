<template>
    <div>
        <div class="content">
            <header id="header">
                <div class="content_header">
                    <div class="control">
                        <ul class="menu">
                            <li>Инструкция</li>
                            <li>Обратная связь</li>
                        </ul>
                    </div>
                <div class="info_user">
                        <h4>Бабич Александр</h4>
                        <img class="icon" src="../../assets/logo.png" alt="icon">
                        <div class="user_menu">
                            <ul class="um_ul">
                                <li>Профиль</li>
                                <li>История</li>
                                <li>Выход</li>
                            </ul>
                        </div>
                </div>
                </div>
            </header>
            <div class="content_size">
                <h1 class="h1_cs">Оцените рыночную цену квартиры</h1>
                <h3 class="h4_cs">Оценка квартир, работает только в городе Москва</h3>
                <h4 class="h4_cs">Не знаете как это работает? <a href="">Мы расскажем</a></h4>
                <div class="form">
                    <div v-if="getOpenForm == false">
                        <Form />
                    </div>
                    <div v-else class="load_div sl">
                        <img class="load_gif" src="../../assets/XOsX.gif" alt="">
                        <h3>Загрузка</h3>
                    </div>
                </div>
                <div class="advanteges">
                    <h2 class="h1_a">Почему мы?</h2>
                    <div class="grid">
                        <div class="card"><div class="card_info">
                            <img src="https://m1.dogecdn.wtf/website/index/features-test-2/okay.svg" alt="">
                            <h3>Бесплатный сервис</h3>
                        </div></div>
                        <div class="card"><div class="card_info">
                            <img src="https://m1.dogecdn.wtf/website/index/features-test-2/okay.svg" alt="">
                            <h3>Быстрая поддержка</h3>
                        </div></div>
                        <div class="card"><div class="card_info">
                            <img src="https://m1.dogecdn.wtf/website/index/features-test-2/okay.svg" alt="">
                            <h3>У нас есть маленький ослик</h3>
                        </div></div>
                </div>
            </div>
       </div>
       </div>
    </div>
</template>
<script>
import Form from './Form.vue';
import {mapGetters} from 'vuex'
    export default{
        components:{
            Form
        },
        computed: mapGetters(['getOpenForm']),
    }
</script>
<style>
    .load_gif{
        width: 9%;
        z-index: 0;
    }
    .load_div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>