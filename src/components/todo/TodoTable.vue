<script setup>
defineProps({
    fakedb: Array,
})

const emit = defineEmits(["done","delete","edit","move"])

const emitDone = (id) =>{
    emit("done", id)
}

const emitDelete = (id) => {
    emit("delete", id)
}

const emitEdit = (id) => {
    emit("edit", id)
}


</script>
<template>
    <div class="flex flex-col overflow-x-auto">
        <div class="sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-x-auto">
                    <table class="min-w-full text-left text-sm font-light">
                        <thead class="border-b font-medium dark:border-neutral-500">
                            <tr>
                                <th scope="col" class="px-6 py-4">Completed</th>
                                <th scope="col" class="px-6 py-4">Title</th>
                                <th scope="col" class="px-6 py-4">Date created</th>
                                <th scope="col" class="px-6 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- ################## list rendering ######################## -->
                            <tr v-if="fakedb" v-for="item in fakedb" :key="item.id" ref="itemRefs"
                                class="border-b dark:border-neutral-500">
                                <td class="whitespace-nowrap px-6 py-4 font-medium ">
                                    <input
                                        class="relative  btn-blue w-6 h-6 align-middle"
                                        type="checkbox" value="" id="checkboxDefault" />
                                </td>
                                <td class="whitespace-nowrap px-6 py-4">{{ item.title }}</td>
                                <td class="whitespace-nowrap px-6 py-4">{{ item.dateCreated.slice(0, 10) }} at {{
                                    item.dateCreated.slice(11, 16) }}</td>
                                <td class="whitespace-nowrap px-6 py-4">
                                    <button class="text-green-600">
                                        <span class="material-symbols-outlined" @click="emitEdit(item.id)">
                                            edit
                                        </span>
                                    </button>
                                    <button class="text-red-600" @click="emitDelete(item.id)">
                                        <span class="material-symbols-outlined">
                                            delete
                                        </span>
                                    </button>
                                </td>

                            </tr>
                            <div v-else>LOADING</div>
                            <!-- ########################################################### -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>