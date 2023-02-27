<script setup>

import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import editModal from "@/components/todo/EditModal.vue"
import TodoTable from '@/components/todo/TodoTable.vue'

const state = reactive({
    fakedb: [],
    editModal: false,
    expandRot: 0
})

// list item refs
const itemRefs = ref([])
const expandRefs = ref([])

onMounted(() => {
    //fetch mock data 
    fetch("https://api.mockaroo.com/api/71c302f0?count=30&key=5c8be110")
    .then(response => response.json())
    .then(data => state.fakedb = sortArrayByDate(data))
    .then(console.log("loaded data"))    

})

const sortArrayByDate = (d) => {
    let r = d.sort(
        function (a, b) {
            return (a.dateCreated > b.dateCreated) ? -1 : ((a.dateCreated < b.dateCreated) ? 1 : 0);
        }
    )

    return r
}

const handleAdd = () => {
    let d = new Date().toISOString()
    console.log(d)
    state.fakedb = sortArrayByDate(state.fakedb)
}

const handleDel = (id) => {

    for (var i = 0; i < state.fakedb.length; i++) {
        if (state.fakedb[i].id == id) {
            state.fakedb.splice(i, 1)
        }
    }
}

const testMessage = (msg) =>{
    console.log(msg)
}

</script>

<template>
    <fieldset class="border border-solid border-slate-100 p-3">
        <editModal v-if="state.editModal"></editModal>
        <legend>
            <code class="text-xl text-white">TODO LIST</code>
        </legend>

        <div class="grid grid-cols-10 gap-4">

            <button class="btn-blue col-start-2" @click="handleAdd()">
                <span class="material-symbols-outlined ">
                    add
                </span>
            </button>
            <TodoTable 
                class="col-start-2 col-end-10 col-span-10 border-solid border-2 border-slate-100"
                :fakedb="state.fakedb"
                @delete="testMessage('delete emitted')"
                @edit="testMessage('edit emitted')"
                @move="testMessage('move emitted')"
                @done="testMessage('done emitted')"
            />
        </div>

    </fieldset>
</template>

<style scoped>
/* Animation for each element of the list */
.fade-enter-active {
    transition: all 0.3s ease-out;
}

.fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

</style>