<script setup>

import { reactive, ref } from 'vue'
import json from "@/assets/fakedb.json"

const state = reactive({
    fakedb: json,
    expand:"expand_more"

})

const itemClicked = (id) => {
    console.log(id)
    for (var i = 0; i < state.fakedb.length; i++) {
        if (state.fakedb[i].id == id) {
            console.log(state.fakedb[i].id)
            state.fakedb[i].contentShown = !state.fakedb[i].contentShown
        }
    }
}

</script>

<template>
    <fieldset class="border border-solid border-slate-100 p-3">

        <legend><code class="text-3xl text-white">TODO LIST</code></legend>

        <div class="grid grid-cols-10 gap-5">
            <button class="material-symbols-outlined btn-blue col-start-1">add</button>
            <ul class="col-start-1 col-span-10 border-solid border-2 border-slate-100">
                <!-- ################## list rendering ######################## -->
                <li class="px-5 my-5 " v-for="item in state.fakedb" :key="item.id">
                    <hr>
                    <h5>
                        <button class="material-symbols-outlined btn-blue" @click="itemClicked(item.id)">
                            {{ state.expand }}
                        </button>
                        {{ item.title }}
                        <div class="float-right">
                            <button class="material-symbols-outlined btn-green">
                                edit
                            </button>
                            <button class="material-symbols-outlined btn-red">
                                delete
                            </button>
                        </div>

                    </h5>
                    <p v-if="item.contentShown">{{ item.content }}</p>
                    <p>
                        <span class="text-green-500 font-bold">
                            <span class="material-symbols-outlined">
                                calendar_month
                            </span>
                            Date created:
                        </span>
                        {{ item.dateCreated }}
                    </p>
                </li>
                <!-- ########################################################## -->
            </ul>
        </div>

    </fieldset>
</template>